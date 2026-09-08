import type { Metadata } from 'next'
import { MobileShell } from '@/components/mobile-shell'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PlansContent } from '@/components/plans-content'

export const metadata: Metadata = {
  title: 'Pricing — Enigma',
  description: 'Enigma is completely free. Every feature, unlocked for everyone.',
}

export default function PlansPage() {
  return (
    <MobileShell>
      <SiteHeader />
      <main>
        <PlansContent />
      </main>
      <SiteFooter />
    </MobileShell>
  )
}
