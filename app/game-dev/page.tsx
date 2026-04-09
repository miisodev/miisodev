import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/SchemaScripts'
import ShowcaseCard from '@/components/ShowcaseCard'
import ReviewsCarousel, { type Review } from '@/components/ReviewsCarousel'

export const metadata: Metadata = {
  title: 'Fortnite Game Dev — Kevin Miiso Novo | Custom Maps',
  description:
    'Fortnite game experiences and custom maps by Kevin Miiso Novo — from concept to published map. World design, mechanics, scripting, and performance-optimized builds.',
  keywords: ['game development', 'Fortnite', 'UEFN', 'Kevin Miiso Novo', 'miisodev', 'game design', 'Fortnite creative maps', 'custom Fortnite map', 'NITROderby'],
  authors: [{ name: 'Kevin Miiso Novo' }],
  openGraph: {
    title: 'Fortnite Game Dev — Kevin Miiso Novo | Custom Maps',
    description: 'Fortnite game experiences and custom maps by Kevin Miiso Novo — concept to published map. World design, mechanics, scripting, and optimized builds.',
    url: 'https://miiso.dev/game-dev',
    type: 'website',
    siteName: 'Kevin Miiso Novo',
    images: [{ url: 'https://miiso.dev/og-image.png', width: 1200, height: 630, alt: 'Kevin Miiso Novo — Game Dev' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite Game Dev — Kevin Miiso Novo | Custom Maps',
    description: 'Fortnite game experiences and custom maps by Kevin Miiso Novo — concept to published map. World design, mechanics, scripting, and optimized builds.',
    creator: '@miisodev',
    images: ['https://miiso.dev/og-image.png'],
  },
  alternates: { canonical: 'https://miiso.dev/game-dev' },
}

const gameDevReviews: Review[] = [
  {
    name: 'Satriin Studios',
    project: 'NITROderby',
    remarks: 'Beautiful, performant, and has a real identity. Stands out from most maps out there.',
    stars: 4,
  },
]

const sectionHeading = (title: string) => (
  <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 24 }}>
    {title}
  </h2>
)

export default function GameDevPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://miiso.dev' }, { name: 'Game Dev', url: 'https://miiso.dev/game-dev' }]} />
      <div className="animate-page" style={{ maxWidth: 896, margin: '0 auto', padding: '0 24px' }}>

        <section style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Game Dev</p>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: 16 }}>Game Dev.</h1>
          <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300, fontSize: 18, color: 'var(--muted)', marginBottom: 16 }}>Fortnite experiences and custom maps — from concept to published game.</p>
          <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480 }}>I design and build game experiences in Fortnite. Published experiences on the platform and custom maps built to brief. World design, mechanics, scripting, and performance-optimized builds. Available for custom projects.</p>
        </section>

        <section style={{ paddingBottom: 64 }}>
          {sectionHeading('Custom Maps')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            <ShowcaseCard
              image="/showcases/nitroderby.png"
              imageAlt="NITROderby Fortnite Map"
              imagePosition="center"
              rating={4.5}
              title="NITROderby"
              description="Free-for-all combat racing experience on a deserted island. 20 rounds, ranked play, NITRO-fueled battles built in UEFN."
              badges={['Battle Royale', 'Racing', 'Open World', 'UEFN']}
              stats={[
                { label: 'Playtime', value: '63.5K' },
                { label: 'Favourites', value: '172' },
                { label: 'Status', value: 'Live', highlight: true },
              ]}
              linkLabel="View map →"
              linkHref="https://www.fortnite.com/@dudleydorsey/6462-1014-9638"
            />
          </div>
        </section>

        <section style={{ paddingBottom: 64 }}>
          {sectionHeading('Fortnite Experiences')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[1, 2].map((n) => (
              <div key={n} style={{ background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: 'var(--muted)' }}>Coming soon</span>
                </div>
                <div style={{ padding: 20 }}>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 16, color: 'var(--text)', marginBottom: 6 }}>Experience {n}</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: 14, color: 'var(--muted)' }}>A Fortnite experience is in the works.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingBottom: 64 }}>
          {sectionHeading('Reviews')}
          <ReviewsCarousel reviews={gameDevReviews} />
        </section>

        <section style={{ paddingBottom: 96 }}>
          <div style={{ background: 'var(--surface)', borderRadius: 12, padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 20, color: 'var(--text)' }}>Need a custom map?</p>
            <a href="mailto:miisodev@gmail.com" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: 15, color: 'var(--accent)' }}>Get in touch →</a>
          </div>
        </section>

      </div>
    </>
  )
}
