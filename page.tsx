import { MobileShell } from '@/components/mobile-shell'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { HighlightCards } from '@/components/highlight-cards'
import { FeatureGrid } from '@/components/feature-grid'
import { FaqSection } from '@/components/faq-section'

export default function Page() {
  return (
    <MobileShell>
      <SiteHeader />
      <main>
        <Hero />
        <HighlightCards />
        <FeatureGrid />
        <FaqSection />
      </main>
      <SiteFooter />
    </MobileShell>
  )
}
