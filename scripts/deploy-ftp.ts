/**
 * Déploiement de dist/ sur l'hébergement LWS du client, par FTP.
 *
 *   npm run deploy:ftp                       — envoi de dist/ (site déjà en place)
 *   npm run deploy:ftp -- --replace-wordpress — 1er déploiement : archive WordPress puis envoie
 *   npm run deploy:ftp -- --rollback          — remet l'archive WordPress à la racine
 *
 * Identifiants dans .env.deploy (jamais commité) : FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_DIR.
 */
import { existsSync, readdirSync, statSync } from 'node:fs'
import { basename, join, posix, relative, sep } from 'node:path'
import { Client } from 'basic-ftp'

const BACKUP_DIR = '_wordpress-backup-2026-09-17'
/** Contenu d'une racine WordPress : tout ce qui est déplacé dans BACKUP_DIR. */
const WORDPRESS_ENTRIES = /^(wp-.*|index\.php|\.htaccess|xmlrpc\.php|license\.txt|readme\.html|\.user\.ini|php\.ini|cgi-bin|error_log|\.maintenance|default_index\.html|phpinfolws\.php|Archive .*\.zip)$/
// Laissés en place : fichier de vérification Google (google*.html), .quarantaine et *.sqlite gérés par LWS.
/** Fichiers à renvoyer à chaque déploiement même si la taille est identique (contenu non haché). */
const ALWAYS_UPLOAD = /\.(html|xml|txt)$|^\.htaccess$/
const REQUIRED_REMOTE = ['index.html', 'shell.html', '.htaccess', 'sitemap.xml', 'robots.txt']

if (!existsSync('.env.deploy')) fail('.env.deploy introuvable. Créer le fichier avec FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_DIR.')
process.loadEnvFile('.env.deploy')
const env = (key: string) => process.env[key] ?? fail(`${key} manquant dans .env.deploy`)
const HOST = env('FTP_HOST')
const USER = env('FTP_USER')
const PASSWORD = env('FTP_PASSWORD')
const DIR = env('FTP_DIR')
const args = new Set(process.argv.slice(2))

if (!existsSync('dist/index.html') && !args.has('--rollback')) fail('dist/ absent : lancer `npm run build` avant.')

const client = new Client(120_000)
try {
  await connect()
  await client.cd(DIR)
  const entries = await client.list()
  const names = entries.map((e) => e.name)
  const hasWordpress = names.includes('wp-config.php')
  const hasBackup = names.includes(BACKUP_DIR)

  if (args.has('--rollback')) {
    if (!hasBackup) fail(`Aucune archive ${BACKUP_DIR} sur le serveur.`)
    await rollback()
  } else {
    if (hasWordpress && !args.has('--replace-wordpress')) {
      fail(`Le répertoire distant contient encore WordPress (wp-config.php). Relancer avec --replace-wordpress pour l'archiver dans ${BACKUP_DIR}/.`)
    }
    if (hasWordpress) await archiveWordpress(names)
    await upload()
  }
} finally {
  client.close()
}

async function connect() {
  try {
    await client.access({ host: HOST, user: USER, password: PASSWORD, secure: true, secureOptions: { rejectUnauthorized: false } })
    console.log('Connecté en FTPS (TLS explicite)')
  } catch (err) {
    console.warn(`FTPS refusé (${(err as Error).message}), repli sur FTP simple`)
    await client.access({ host: HOST, user: USER, password: PASSWORD, secure: false })
    console.log('Connecté en FTP')
  }
}

async function archiveWordpress(names: string[]) {
  await client.ensureDir(BACKUP_DIR)
  await client.cd(DIR)
  const toMove = names.filter((n) => WORDPRESS_ENTRIES.test(n) && n !== BACKUP_DIR)
  for (const name of toMove) {
    await client.rename(name, `${BACKUP_DIR}/${name}`)
    console.log(`archivé  ${name} → ${BACKUP_DIR}/`)
  }
  console.log(`WordPress archivé (${toMove.length} entrées). Rollback : npm run deploy:ftp -- --rollback`)
}

async function rollback() {
  await client.cd(`${DIR}/${BACKUP_DIR}`)
  const archived = (await client.list()).map((e) => e.name)
  await client.cd(DIR)
  // .htaccess du site statique cède la place à celui de WordPress
  if (archived.includes('.htaccess')) await client.remove('.htaccess').catch(() => undefined)
  for (const name of archived) {
    await client.rename(`${BACKUP_DIR}/${name}`, name)
    console.log(`restauré ${name}`)
  }
  await client.removeDir(BACKUP_DIR)
  console.log('WordPress restauré. Les fichiers du site statique restent en place (index.html, assets/…) mais index.php reprend la main.')
}

async function upload() {
  console.log(`Envoi de dist/ vers ${HOST}:${DIR} …`)
  const files = walk('dist').sort(uploadOrder)
  let uploaded = 0
  let skipped = 0
  const remoteSizes = new Map<string, Map<string, number>>()

  for (const local of files) {
    const rel = relative('dist', local).split(sep).join('/')
    const remoteDir = posix.join(DIR, posix.dirname(rel))
    const name = posix.basename(rel)
    const size = statSync(local).size
    if (!remoteSizes.has(remoteDir)) {
      await withRetry(async () => {
        await client.ensureDir(remoteDir)
        remoteSizes.set(remoteDir, new Map((await client.list()).map((e) => [e.name, e.size])))
      })
    }
    if (!ALWAYS_UPLOAD.test(name) && remoteSizes.get(remoteDir)!.get(name) === size) {
      skipped++
      continue
    }
    await withRetry(async () => {
      await client.cd(remoteDir)
      await client.uploadFrom(local, name)
    })
    uploaded++
    console.log(`envoyé  ${rel}`)
  }

  await client.cd(DIR)
  const remote = (await client.list()).map((e) => e.name)
  const missing = REQUIRED_REMOTE.filter((f) => !remote.includes(f))
  if (missing.length) fail(`Fichiers absents après envoi : ${missing.join(', ')}`)
  console.log(`Déployé : ${uploaded} fichiers envoyés, ${skipped} inchangés. Vider le cache LWS puis vérifier https://lacerisaie-eyeclinic.com/`)
}

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]))
}

/** Assets et médias d'abord, HTML en dernier : un HTML en ligne référence toujours des fichiers déjà présents. */
function uploadOrder(a: string, b: string) {
  const rank = (f: string) => (ALWAYS_UPLOAD.test(basename(f)) ? 1 : 0)
  return rank(a) - rank(b) || a.localeCompare(b)
}

/** Le serveur LWS coupe parfois la connexion de contrôle : on se reconnecte et on reprend. */
async function withRetry(op: () => Promise<void>, attempts = 3) {
  for (let i = 1; ; i++) {
    try {
      if (client.closed) await connect()
      return await op()
    } catch (err) {
      if (i >= attempts) throw err
      console.warn(`  reconnexion (${(err as Error).message})`)
      client.close()
    }
  }
}

function fail(message: string): never {
  console.error(`✗ ${message}`)
  process.exit(1)
}
