import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/SchemaScripts'
import ShowcaseCard from '@/components/ShowcaseCard'
import ReviewsCarousel, { type Review } from '@/components/ReviewsCarousel'

export const metadata: Metadata = {
  title: 'Framer & Custom Sites — Web Dev | Kevin Miiso Novo',
  description:
    'Framer templates and custom-coded sites by Kevin Miiso Novo. UI/UX design, motion, and performance-optimized builds — SEO-ready and built to convert.',
  keywords: ['web development', 'Framer templates', 'custom websites', 'Kevin Miiso Novo', 'miisodev', 'UI/UX', 'web design', 'custom Framer site', 'Framer designer'],
  authors: [{ name: 'Kevin Miiso Novo' }],
  openGraph: {
    title: 'Framer & Custom Sites — Web Dev | Kevin Miiso Novo',
    description: 'Framer templates and custom-coded sites by Kevin Miiso Novo. UI/UX, motion, and performance-optimized builds — SEO-ready and built to convert.',
    url: 'https://miiso.dev/web-dev',
    type: 'website',
    siteName: 'Kevin Miiso Novo',
    images: [{ url: 'https://miiso.dev/og-image.png', width: 1200, height: 630, alt: 'Kevin Miiso Novo — Web Dev' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Framer & Custom Sites — Web Dev | Kevin Miiso Novo',
    description: 'Framer templates and custom-coded sites by Kevin Miiso Novo. UI/UX, motion, and performance-optimized builds — SEO-ready and built to convert.',
    creator: '@miisodev',
    images: ['https://miiso.dev/og-image.png'],
  },
  alternates: { canonical: 'https://miiso.dev/web-dev' },
}

const webDevReviews: Review[] = [
  {
    name: 'Thabani Ndelu',
    project: "Artist's Portfolio",
    remarks: 'Yho the website is dope bro.',
    stars: 5,
  },
]

const sectionHeading = (title: string) => (
  <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 24 }}>
    {title}
  </h2>
)

export default function WebDevPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://miiso.dev' }, { name: 'Web Dev', url: 'https://miiso.dev/web-dev' }]} />
      <div className="animate-page" style={{ maxWidth: 896, margin: '0 auto', padding: '0 24px' }}>

        <section style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Web Dev</p>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: 16 }}>Web Dev.</h1>
          <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300, fontSize: 18, color: 'var(--muted)', marginBottom: 16 }}>Framer templates and custom-coded sites — from concept to launch.</p>
          <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480 }}>I design and build for the web. Framer templates built to convert and custom-coded sites tailored to the brief. UI/UX design, motion, and performance-optimized builds. SEO-ready and available for custom projects.</p>
        </section>

        <section style={{ paddingBottom: 64 }}>
          {sectionHeading('Custom Sites')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            <ShowcaseCard
              image="/showcases/artists-portfolio.png"
              imageAlt="Thabani Ndelu Artist Portfolio"
              imagePosition="top"
              rating={5.0}
              title="Thabani Ndelu — Artist Portfolio"
              description="Minimal gallery-style portfolio for a South African contemporary oil painter. Artwork-first layout with mailing list integration."
              badges={['Next.js', 'Tailwind', 'Loops.so', 'Truehost']}
              stats={[
                { label: 'Avg. monthly visits', value: '700' },
                { label: 'Subscribers', value: '2K' },
                { label: 'Status', value: 'Live', highlight: true },
              ]}
              linkLabel="View site →"
              linkHref="https://thabanindelu.com"
            />
          </div>
        </section>

        <section style={{ paddingBottom: 64 }}>
          {sectionHeading('Framer Templates')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[1, 2].map((n) => (
              <div key={n} style={{ background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: 'var(--muted)' }}>Coming soon</span>
                </div>
                <div style={{ padding: 20 }}>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 16, color: 'var(--text)', marginBottom: 6 }}>Template {n}</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: 14, color: 'var(--muted)' }}>A Framer template is in the works.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingBottom: 64 }}>
          {sectionHeading('Reviews')}
          <ReviewsCarousel reviews={webDevReviews} />
        </section>

        <section style={{ paddingBottom: 96 }}>
          <div style={{ background: 'var(--surface)', borderRadius: 12, padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 20, color: 'var(--text)' }}>Need a custom site?</p>
            <a href="mailto:miisodev@gmail.com" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: 15, color: 'var(--accent)' }}>Get in touch →</a>
          </div>
        </section>

      </div>
    </>
  )
}
