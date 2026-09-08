import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plans — Enigma',
  description: 'Enigma is free forever.',
}

export default function PlansPage() {
  return (
    <div className="site-frame">
      <div className="mobile-page">
        <header className="app-header">
          <Link href="/" className="app-brand"><Image src="/assets/enigma-logo.png" alt="" width={28} height={28} /><span>Enigma</span></Link>
          <Link href="/" className="back-link"><ArrowLeft size={16} /> Home</Link>
        </header>
        <main className="plans-content">
          <div className="platform-badge"><span /> Simple pricing</div>
          <h1>One plan.<br /><em>That&apos;s it.</em></h1>
          <p className="hero-copy">Everything Enigma offers is available to everyone, forever.</p>
          <section className="plan-card">
            <div className="plan-heading"><span>ENIGMA / FREE</span><b>FOREVER</b></div>
            <div className="plan-price">$0 <small>USD / always</small></div>
            <a className="get-started plan-button" href="/">Download Enigma <Download size={16} /></a>
            <div className="plan-divider" />
            {['Full executor access', 'Fast injection', 'Regular updates', 'Community support', 'No subscriptions'].map((item) => <p className="plan-feature" key={item}><Check size={16} />{item}</p>)}
          </section>
        </main>
      </div>
    </div>
  )
}
