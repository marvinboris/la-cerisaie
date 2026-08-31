/**
 * Contenu des pages pathologies (FR).
 * ⚠️ CONTENU MÉDICAL DE BASE — À FAIRE VALIDER PAR LES MÉDECINS DE LA CERISAIE
 * AVANT MISE EN LIGNE. Rédigé à titre informatif, ne remplace pas une consultation.
 * Le fichier EN (`pathologies.en.ts`) doit rester structurellement identique.
 */

export interface PathologyContent {
  name: string
  short: string
  tag: string
  title: string
  accent: string
  heroDesc: string
  intro: string
  symptomsTitle: string
  symptoms: string[]
  causesTitle: string
  causes: string[]
  diagnosisTitle: string
  diagnosis: string
  exams: string[]
  treatmentsTitle: string
  treatments: { title: string; desc: string }[]
  faqTitle: string
  faq: { q: string; a: string }[]
}

const pathologies: Record<string, PathologyContent> = {
  glaucoma: {
    name: 'Le glaucome',
    short: "Maladie du nerf optique liée à la pression intraoculaire, silencieuse jusqu'à un stade avancé.",
    tag: 'Pathologie',
    title: 'Le',
    accent: 'glaucome',
    heroDesc:
      "Le glaucome est une atteinte progressive du nerf optique, le plus souvent liée à une pression intraoculaire trop élevée. Il évolue sans douleur ni symptôme pendant des années : seul un dépistage régulier permet de le prendre en charge à temps.",
    intro:
      "Le glaucome regroupe plusieurs maladies qui détruisent lentement les fibres du nerf optique. La perte de vision commence par la périphérie du champ visuel et progresse vers le centre. Les lésions sont irréversibles, mais un traitement instauré tôt stabilise la maladie dans la grande majorité des cas. Au Cameroun, le glaucome est l'une des premières causes de cécité évitable : le dépistage à partir de 40 ans, et plus tôt en cas d'antécédent familial, est déterminant.",
    symptomsTitle: 'Signes qui doivent alerter',
    symptoms: [
      "Aucun symptôme pendant des années — c'est le cas le plus fréquent",
      'Rétrécissement progressif du champ visuel latéral',
      'Difficulté à percevoir les obstacles sur les côtés, chutes ou heurts répétés',
      'Vision floue intermittente, halos colorés autour des lumières',
      "Douleur oculaire intense, œil rouge, nausées et baisse brutale de vision — glaucome aigu, urgence absolue",
    ],
    causesTitle: 'Facteurs de risque',
    causes: [
      'Pression intraoculaire élevée',
      "Antécédents familiaux de glaucome — le risque est multiplié en cas de parent au premier degré atteint",
      'Âge supérieur à 40 ans',
      'Origine africaine — survenue plus précoce et évolution plus rapide',
      'Myopie forte, diabète, hypertension artérielle',
      'Traitement prolongé par corticoïdes, y compris en collyre ou en pommade',
      'Traumatisme oculaire ancien',
    ],
    diagnosisTitle: 'Comment nous établissons le diagnostic',
    diagnosis:
      "Le diagnostic ne repose jamais sur un seul examen. Nous mesurons la pression intraoculaire, examinons le nerf optique et quantifions le champ visuel. L'OCT permet de mesurer l'épaisseur des fibres nerveuses et de détecter une atteinte avant qu'elle ne soit visible par le patient. Le bilan complet se déroule en une seule consultation.",
    exams: [
      'Tonométrie — mesure de la pression intraoculaire',
      'Examen du fond d\'œil et de la papille optique',
      'Champ visuel automatisé (périmétrie)',
      'OCT du nerf optique — analyse des fibres nerveuses',
      'Gonioscopie — examen de l\'angle irido-cornéen',
      'Pachymétrie — mesure de l\'épaisseur cornéenne',
    ],
    treatmentsTitle: 'Prise en charge',
    treatments: [
      {
        title: 'Collyres hypotonisants',
        desc: "Traitement de première intention. Une ou plusieurs gouttes par jour abaissent la pression intraoculaire. L'observance quotidienne est le facteur déterminant du pronostic : le traitement se poursuit à vie.",
      },
      {
        title: 'Laser (trabéculoplastie, iridotomie)',
        desc: "Séance ambulatoire de quelques minutes. Le laser améliore l'évacuation de l'humeur aqueuse ou lève un blocage de l'angle. Il peut remplacer ou compléter les collyres.",
      },
      {
        title: 'Chirurgie filtrante',
        desc: "Proposée quand la pression reste trop élevée malgré le traitement médical et le laser. Elle crée une nouvelle voie d'évacuation pour le liquide intraoculaire.",
      },
      {
        title: 'Surveillance au long cours',
        desc: "Un glaucome se surveille toute la vie. Contrôle de la pression, du champ visuel et de l'OCT tous les 6 à 12 mois selon le stade, pour ajuster le traitement avant toute aggravation.",
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Peut-on guérir du glaucome ?',
        a: "Non. Les fibres nerveuses détruites ne se régénèrent pas. En revanche, un traitement bien suivi stoppe l'évolution : l'objectif est de préserver la vision restante, ce qui est atteint dans la très grande majorité des cas dépistés à temps.",
      },
      {
        q: 'À partir de quel âge se faire dépister ?',
        a: "À partir de 40 ans, un contrôle tous les deux ans. Dès 30 ans et tous les ans en cas d'antécédent familial direct, de forte myopie ou de diabète.",
      },
      {
        q: 'Le traitement par collyre est-il à vie ?',
        a: "Oui dans la majorité des cas. Interrompre les gouttes fait remonter la pression en quelques jours et reprend la destruction du nerf optique, sans que vous ne ressentiez rien.",
      },
      {
        q: 'Le glaucome rend-il forcément aveugle ?',
        a: "Non, à condition d'être dépisté et traité. La cécité concerne les glaucomes découverts tardivement ou les traitements abandonnés.",
      },
    ],
  },

  keratoconus: {
    name: 'Le kératocône',
    short: "Déformation progressive de la cornée, qui s'amincit et prend une forme conique.",
    tag: 'Pathologie',
    title: 'Le',
    accent: 'kératocône',
    heroDesc:
      "Le kératocône déforme la cornée, qui s'amincit et se bombe en cône. La vision devient floue et déformée, mal corrigée par des lunettes classiques. Détecté tôt, il peut être stabilisé durablement.",
    intro:
      "Le kératocône touche surtout l'adolescent et l'adulte jeune. La cornée, normalement sphérique, perd sa rigidité, s'amincit et se déforme, ce qui crée un astigmatisme irrégulier impossible à corriger correctement avec des verres classiques. L'évolution est le plus souvent bilatérale et asymétrique. La priorité est de stabiliser la déformation avant qu'elle n'impose une greffe de cornée.",
    symptomsTitle: 'Signes qui doivent alerter',
    symptoms: [
      'Vision floue et déformée qui ne se corrige plus bien avec des lunettes',
      'Changements fréquents de correction, astigmatisme qui augmente vite',
      'Dédoublement des images, halos et éblouissement la nuit',
      'Sensibilité accrue à la lumière',
      'Frottements oculaires répétés, souvent associés à une allergie',
    ],
    causesTitle: 'Facteurs de risque',
    causes: [
      "Frottement chronique des yeux — le facteur aggravant le mieux établi",
      'Terrain allergique : conjonctivite allergique, eczéma, asthme',
      'Antécédents familiaux de kératocône',
      'Âge entre 15 et 30 ans, période où la maladie évolue le plus vite',
      'Certaines maladies génétiques (trisomie 21, syndrome de Marfan)',
    ],
    diagnosisTitle: 'Comment nous établissons le diagnostic',
    diagnosis:
      "La topographie cornéenne est l'examen clé : elle cartographie la courbure et l'épaisseur de la cornée et détecte un kératocône bien avant que la vision ne se dégrade. Elle sert aussi à suivre l'évolution d'un examen à l'autre, ce qui décide de l'indication au cross-linking.",
    exams: [
      'Topographie cornéenne — cartographie de la courbure',
      'Pachymétrie — mesure de l\'épaisseur de la cornée',
      'Réfraction et acuité visuelle corrigée',
      'Examen à la lampe à fente',
      'OCT du segment antérieur',
    ],
    treatmentsTitle: 'Prise en charge',
    treatments: [
      {
        title: 'Arrêt du frottement oculaire',
        desc: "Première mesure, non négociable. Traiter l'allergie sous-jacente et rompre l'habitude de se frotter les yeux ralentit à lui seul l'évolution de la maladie.",
      },
      {
        title: 'Lentilles rigides ou spécialisées',
        desc: "Les lentilles rigides perméables au gaz recréent une surface optique régulière et restaurent une vision nette là où les lunettes échouent.",
      },
      {
        title: 'Cross-linking cornéen (CXL)',
        desc: "Traitement de référence pour stabiliser un kératocône évolutif. Riboflavine et lumière UV renforcent les liaisons du collagène cornéen. Il ne restaure pas la vision perdue mais bloque l'aggravation.",
      },
      {
        title: 'Anneaux intracornéens',
        desc: "Segments implantés dans l'épaisseur de la cornée pour en régulariser la forme et améliorer la tolérance aux lentilles.",
      },
      {
        title: 'Greffe de cornée',
        desc: "Réservée aux formes très évoluées, avec cornée trop fine ou opacifiée, quand les autres options ne suffisent plus.",
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Le kératocône rend-il aveugle ?',
        a: "Non. Il dégrade fortement la qualité de vision mais ne provoque pas de cécité complète. Les formes sévères relèvent de la greffe de cornée, dont les résultats sont bons.",
      },
      {
        q: 'Le cross-linking améliore-t-il ma vue ?',
        a: "Son objectif est de stabiliser, pas de corriger. Une légère amélioration est possible, mais la correction visuelle reste assurée par des lunettes ou des lentilles adaptées.",
      },
      {
        q: 'Puis-je être opéré au laser pour ne plus porter de lunettes ?',
        a: "Non. Le LASIK et la PKR sont formellement contre-indiqués en cas de kératocône : ils amincissent encore la cornée et aggravent la déformation. C'est précisément pourquoi la topographie fait partie du bilan pré-opératoire de toute chirurgie réfractive.",
      },
      {
        q: 'Est-ce héréditaire ?',
        a: "Il existe une prédisposition familiale. Si un parent proche est atteint, un dépistage par topographie est recommandé à l'adolescence.",
      },
    ],
  },

  amd: {
    name: 'Rétine & DMLA',
    short: 'Atteintes de la rétine et dégénérescence maculaire liée à l’âge : la vision centrale en jeu.',
    tag: 'Pathologie',
    title: 'Rétine &',
    accent: 'DMLA',
    heroDesc:
      "La macula est la zone de la rétine responsable de la vision fine : lire, reconnaître un visage, conduire. Son atteinte, dont la DMLA est la forme la plus fréquente après 50 ans, altère la vision centrale sans toucher la vision périphérique.",
    intro:
      "La rétine tapisse le fond de l'œil et transforme la lumière en signal nerveux. Sa partie centrale, la macula, assure la vision des détails. La dégénérescence maculaire liée à l'âge (DMLA) existe sous deux formes : la forme sèche, d'évolution lente, et la forme humide, marquée par la croissance de vaisseaux anormaux et une baisse de vision rapide. Cette dernière relève de l'urgence : traitée dans les semaines qui suivent son apparition, elle peut être stabilisée, voire améliorée.",
    symptomsTitle: 'Signes qui doivent alerter',
    symptoms: [
      'Lignes droites qui apparaissent ondulées ou déformées',
      'Tache sombre ou floue au centre du champ de vision',
      'Difficulté croissante à lire malgré des lunettes adaptées',
      'Besoin de plus en plus de lumière pour lire',
      'Perception altérée des contrastes et des couleurs',
      'Baisse de vision brutale sur un œil — consulter en urgence',
    ],
    causesTitle: 'Facteurs de risque',
    causes: [
      'Âge supérieur à 50 ans',
      'Tabagisme — le facteur modifiable le plus fort',
      'Antécédents familiaux de DMLA',
      'Hypertension artérielle et maladies cardiovasculaires',
      'Diabète — cause majeure de rétinopathie',
      'Exposition solaire intense sans protection',
      'Alimentation pauvre en antioxydants et en oméga-3',
    ],
    diagnosisTitle: 'Comment nous établissons le diagnostic',
    diagnosis:
      "L'examen du fond d'œil après dilatation, complété par une OCT maculaire, permet de visualiser la rétine couche par couche et de distinguer une forme sèche d'une forme humide. Cette distinction décide du traitement. La grille d'Amsler, remise au patient, sert à surveiller soi-même l'apparition de déformations entre deux consultations.",
    exams: [
      'Fond d\'œil dilaté',
      'OCT maculaire — coupes de la rétine',
      'Grille d\'Amsler — autosurveillance à domicile',
      'Rétinophotographie',
      'Angiographie rétinienne si nécessaire',
    ],
    treatmentsTitle: 'Prise en charge',
    treatments: [
      {
        title: 'Injections intravitréennes (anti-VEGF)',
        desc: "Traitement de référence de la DMLA humide. L'injection, réalisée sous anesthésie locale au bloc, stoppe la croissance des vaisseaux anormaux. Le protocole comprend plusieurs injections rapprochées puis un suivi rythmé par l'OCT.",
      },
      {
        title: 'Compléments et hygiène de vie',
        desc: "Dans la forme sèche, arrêt du tabac, protection solaire, alimentation riche en lutéine, zéaxanthine et oméga-3, et selon les cas une supplémentation antioxydante pour ralentir l'évolution.",
      },
      {
        title: 'Laser rétinien',
        desc: "Utilisé pour traiter certaines lésions périphériques, déchirures rétiniennes et complications de la rétinopathie diabétique.",
      },
      {
        title: 'Rééducation basse vision',
        desc: "Aides optiques et adaptation du domicile pour maintenir l'autonomie de lecture et de déplacement lorsque l'atteinte centrale est installée.",
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'La DMLA rend-elle aveugle ?',
        a: "Elle n'atteint pas la vision périphérique : on ne devient pas aveugle au sens strict. La vision centrale, elle, peut être sévèrement altérée, ce qui gêne la lecture et la reconnaissance des visages.",
      },
      {
        q: 'Les injections dans l\'œil sont-elles douloureuses ?',
        a: "L'œil est anesthésié par collyre. Le geste dure quelques secondes ; les patients décrivent une pression plutôt qu'une douleur. Une gêne légère et un œil rouge sont possibles pendant un ou deux jours.",
      },
      {
        q: 'À quelle fréquence faire un fond d\'œil après 50 ans ?',
        a: "Tous les deux ans en l'absence de facteur de risque, tous les ans en cas de diabète, d'hypertension, de tabagisme ou d'antécédent familial de DMLA.",
      },
      {
        q: 'Je suis diabétique, dois-je consulter même sans symptôme ?',
        a: "Oui, impérativement et une fois par an. La rétinopathie diabétique évolue longtemps sans aucun signe et se traite d'autant mieux qu'elle est prise tôt.",
      },
    ],
  },

  dryEye: {
    name: 'Sécheresse oculaire',
    short: 'Larmes en quantité ou en qualité insuffisante : irritation, brûlure et vision fluctuante.',
    tag: 'Pathologie',
    title: 'La sécheresse',
    accent: 'oculaire',
    heroDesc:
      "Le film lacrymal protège et nourrit la surface de l'œil. Quand il devient insuffisant ou instable, la cornée s'irrite : brûlures, sensation de sable, vision qui fluctue au fil de la journée.",
    intro:
      "La sécheresse oculaire est l'un des motifs de consultation les plus fréquents. Elle relève de deux mécanismes, souvent associés : une production de larmes insuffisante, ou une évaporation trop rapide liée à un dysfonctionnement des glandes de Meibomius. Le climat chaud, la climatisation, la poussière et le travail prolongé sur écran l'aggravent. Ce n'est pas une maladie bénigne à négliger : non traitée, elle abîme durablement la surface cornéenne.",
    symptomsTitle: 'Signes qui doivent alerter',
    symptoms: [
      'Sensation de sable ou de corps étranger dans les yeux',
      'Brûlures, picotements, yeux rouges en fin de journée',
      "Larmoiement paradoxal — l'œil pleure justement parce qu'il est sec",
      'Vision qui se trouble par intermittence et redevient nette au clignement',
      'Paupières collées au réveil, bords des paupières rouges et épaissis',
      'Intolérance au port de lentilles',
      'Fatigue visuelle rapide devant un écran',
    ],
    causesTitle: 'Facteurs de risque',
    causes: [
      'Travail prolongé sur écran — la fréquence de clignement chute de moitié',
      'Climatisation, ventilateur, poussière, air sec',
      'Âge et ménopause',
      'Port de lentilles de contact',
      'Blépharite et dysfonctionnement des glandes de Meibomius',
      'Médicaments : antihistaminiques, antidépresseurs, certains traitements de l\'hypertension',
      'Maladies auto-immunes (syndrome de Gougerot-Sjögren)',
      'Suites de chirurgie réfractive',
    ],
    diagnosisTitle: 'Comment nous établissons le diagnostic',
    diagnosis:
      "L'examen à la lampe à fente évalue la stabilité du film lacrymal, l'état de la surface cornéenne et le fonctionnement des glandes des paupières. Des colorants permettent de visualiser les zones de souffrance de la cornée. L'enjeu est d'identifier le mécanisme en cause, car le traitement d'une sécheresse par manque de larmes diffère de celui d'une sécheresse par évaporation.",
    exams: [
      'Examen à la lampe à fente',
      'Temps de rupture du film lacrymal (BUT)',
      'Test de Schirmer — quantité de larmes produites',
      'Coloration de la surface oculaire',
      'Examen des glandes de Meibomius',
    ],
    treatmentsTitle: 'Prise en charge',
    treatments: [
      {
        title: 'Substituts lacrymaux',
        desc: "Larmes artificielles adaptées au mécanisme en cause. Privilégier les formules sans conservateur en cas d'usage pluriquotidien, les conservateurs entretenant eux-mêmes l'irritation.",
      },
      {
        title: 'Soins des paupières',
        desc: "Compresses chaudes et massage quotidien des paupières pour rétablir l'écoulement des glandes de Meibomius. C'est le traitement de fond de la sécheresse par évaporation, et il demande de la régularité.",
      },
      {
        title: 'Correction de l\'environnement',
        desc: "Pauses écran régulières, clignements volontaires, éloignement des flux de climatisation, hydratation. Ces mesures simples suffisent à soulager de nombreux patients.",
      },
      {
        title: 'Traitements anti-inflammatoires',
        desc: "Dans les formes rebelles, collyres anti-inflammatoires ou immunomodulateurs sur prescription et sous surveillance.",
      },
      {
        title: 'Bouchons méatiques',
        desc: "Petits obturateurs placés dans les canaux lacrymaux pour conserver les larmes à la surface de l'œil, dans les sécheresses sévères par manque de production.",
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Pourquoi mes yeux pleurent-ils alors qu\'on me dit qu\'ils sont secs ?',
        a: "C'est un réflexe. La surface irritée déclenche une production de larmes de mauvaise qualité, qui s'écoulent sans stabiliser le film lacrymal. Le larmoiement est un signe de sécheresse, pas son contraire.",
      },
      {
        q: 'Puis-je utiliser n\'importe quel collyre vendu en pharmacie ?',
        a: "Non. Les collyres qui blanchissent l'œil masquent la rougeur sans traiter la cause et aggravent la situation à l'usage. Les formules avec conservateurs sont à éviter au-delà de quelques instillations par jour.",
      },
      {
        q: 'La climatisation est-elle vraiment en cause ?',
        a: "Oui, très souvent à Douala. Un flux d'air dirigé vers le visage accélère l'évaporation du film lacrymal. Réorienter la ventilation change nettement le confort.",
      },
      {
        q: 'Est-ce que ça se guérit ?',
        a: "La sécheresse chronique se contrôle plutôt qu'elle ne se guérit. Avec un traitement adapté et des soins de paupières réguliers, la gêne disparaît le plus souvent au quotidien.",
      },
    ],
  },

  strabismus: {
    name: 'Strabisme & amblyopie',
    short: "Déviation des yeux et « œil paresseux » chez l'enfant : plus le dépistage est précoce, meilleur est le résultat.",
    tag: 'Pathologie',
    title: 'Strabisme &',
    accent: 'amblyopie',
    heroDesc:
      "Un enfant qui louche ne s'en plaint jamais : son cerveau neutralise l'image de l'œil dévié. Sans prise en charge avant l'âge de 6 ans, cet œil peut perdre définitivement sa capacité à voir.",
    intro:
      "Le strabisme est un défaut d'alignement des deux yeux. Chez l'enfant, il conduit fréquemment à l'amblyopie : le cerveau ignore l'image du mauvais œil, dont la vision cesse de se développer. Cette perte est récupérable tant que le système visuel est plastique, c'est-à-dire jusque vers 6 à 8 ans. Passé ce cap, elle devient définitive. Le dépistage précoce est donc le seul vrai traitement.",
    symptomsTitle: 'Signes qui doivent alerter',
    symptoms: [
      'Un œil qui dévie vers le nez ou vers l\'extérieur, en permanence ou par moments',
      'Enfant qui ferme un œil au soleil ou incline la tête pour fixer',
      'Yeux qui ne semblent pas regarder au même endroit sur les photos',
      'Maladresse, difficulté à attraper les objets, chutes fréquentes',
      'Chez l\'adulte : vision double d\'apparition récente — consulter sans délai',
      'Retard scolaire, fatigue ou maux de tête à la lecture',
    ],
    causesTitle: 'Facteurs de risque',
    causes: [
      'Antécédents familiaux de strabisme ou d\'amblyopie',
      'Défaut de réfraction non corrigé, en particulier une forte hypermétropie',
      'Prématurité, faible poids de naissance',
      'Différence importante de correction entre les deux yeux (anisométropie)',
      'Cataracte congénitale ou autre obstacle sur l\'axe visuel',
      'Atteinte neurologique',
    ],
    diagnosisTitle: 'Comment nous établissons le diagnostic',
    diagnosis:
      "L'examen est possible à tout âge, y compris chez le nourrisson qui ne parle pas encore. Il mesure l'angle de déviation, recherche une amblyopie et impose une réfraction sous cycloplégie — instillation d'un collyre qui bloque l'accommodation — sans laquelle la correction optique réelle de l'enfant reste invisible. Notre orthoptiste réalise le bilan et assure la rééducation.",
    exams: [
      'Mesure de l\'acuité visuelle adaptée à l\'âge',
      'Réfraction sous cycloplégie',
      'Bilan orthoptique complet',
      'Étude de la vision binoculaire et du relief',
      'Fond d\'œil pour éliminer une cause organique',
    ],
    treatmentsTitle: 'Prise en charge',
    treatments: [
      {
        title: 'Correction optique',
        desc: "Première étape systématique. Beaucoup de strabismes de l'enfant se réduisent nettement, parfois disparaissent, avec le simple port permanent de lunettes correctement calculées.",
      },
      {
        title: 'Occlusion de l\'œil dominant',
        desc: "Le cache sur le bon œil force le cerveau à utiliser l'œil amblyope et relance son développement. Durée quotidienne et suivi ajustés par l'ophtalmologiste : c'est le traitement de référence de l'amblyopie.",
      },
      {
        title: 'Rééducation orthoptique',
        desc: "Séances de travail de la coordination des deux yeux et de la vision du relief, assurées au cabinet par notre orthoptiste.",
      },
      {
        title: 'Chirurgie des muscles oculomoteurs',
        desc: "Envisagée quand la déviation persiste malgré la correction optique. Elle réaligne les yeux ; elle ne traite pas l'amblyopie, qui doit être prise en charge avant.",
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'À quel âge faire examiner les yeux de mon enfant ?',
        a: "Un premier examen entre 9 mois et 1 an, un second vers 3 ans, puis avant l'entrée à l'école. Immédiatement, à tout âge, en cas de déviation visible ou d'antécédent familial.",
      },
      {
        q: 'Mon bébé louche par moments, est-ce grave ?',
        a: "Une déviation intermittente est banale avant 4 mois. Au-delà, ou si elle est permanente, elle doit être examinée sans attendre. Un strabisme ne se corrige pas tout seul avec l'âge.",
      },
      {
        q: 'Le cache sur l\'œil est-il vraiment nécessaire ?',
        a: "Oui, et son efficacité dépend directement de la régularité avec laquelle il est porté. C'est contraignant pour la famille, mais c'est la fenêtre thérapeutique : après 6 à 8 ans, la vision de l'œil amblyope ne se récupère plus.",
      },
      {
        q: 'L\'opération est-elle uniquement esthétique ?',
        a: "Non. Elle rétablit l'alignement, ce qui a un vrai impact fonctionnel et social. Mais la récupération de la vision de l'œil faible passe par le traitement de l'amblyopie, mené avant la chirurgie.",
      },
    ],
  },
}

export default pathologies

/** Nom + accroche de chaque pathologie du menu, y compris celles à page dédiée. */
export const summaries: Record<string, { name: string; short: string }> = {
  cataract: {
    name: 'La cataracte',
    short: "Opacification du cristallin après 60 ans : la chirurgie restaure durablement la vision.",
  },
  visionDefects: {
    name: 'Défauts de la vision',
    short: 'Myopie, hypermétropie, astigmatisme et presbytie : diagnostic et correction adaptés.',
  },
  refractiveSurgery: {
    name: 'Vivre sans lunettes',
    short: 'Chirurgie réfractive : se libérer des lunettes et des lentilles après bilan complet.',
  },
  ...Object.fromEntries(
    Object.entries(pathologies).map(([id, content]) => [id, { name: content.name, short: content.short }]),
  ),
}
