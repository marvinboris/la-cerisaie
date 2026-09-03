type Thing = Record<string, unknown>

/** Données structurées rendues dans le body : présentes dans le HTML prérendu, lues par Google où qu'elles soient. */
export default function JsonLd({ data }: { data: Thing | Thing[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...item }) }} />
      ))}
    </>
  )
}
