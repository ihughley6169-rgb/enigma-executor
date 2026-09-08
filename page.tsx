'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-frame">
      <div className="mobile-page">
        <header className="app-header">
          <Link href="/" className="app-brand" aria-label="Enigma home">
            <Image src="/assets/enigma-logo.png" alt="" width={28} height={28} />
            <span>Enigma</span>
          </Link>
          <div className="header-actions">
            <button className="header-icon menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={19} /> : <Menu size={20} />}
            </button>
            <a className="discord-link" href="#community" aria-label="Join the Enigma community"><MessageCircle size={18} /></a>
            <Link className="login-button" href="/plans">Login</Link>
          </div>
          {menuOpen && <nav className="app-menu"><Link href="/plans" onClick={() => setMenuOpen(false)}>Plans</Link><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#community" onClick={() => setMenuOpen(false)}>Community</a></nav>}
        </header>

        <main>
          <section className="hero-section">
            <div className="platform-badge"><span /> Free forever <b>·</b> Windows</div>
            <div className="hero-logo"><Image src="/assets/enigma-logo.png" alt="Enigma lunar logo" width={155} height={155} priority /></div>
            <h1>Enigma</h1>
            <p className="hero-copy">The free, undetectable Roblox executor.<br />Powerful scripts, blazing-fast injection, and zero<br className="desktop-break" /> cost — ever.</p>
            <a className="get-started" href="#features">Get started <ArrowRight size={17} /></a>
          </section>

          <section className="feature-stack" id="features">
            <Feature title="Optimized">Enigma is engineered to run silky smooth even on low-end devices. Injection stays lightweight so your game performance never takes a hit.</Feature>
            <Feature title="Powerful">Run your favorite scripts with a clean interface and fast, reliable execution built around the Roblox experience.</Feature>
            <Feature title="Always free">No subscriptions, locked features, or confusing tiers. Enigma stays accessible to everyone.</Feature>
          </section>

          <section className="bottom-cta" id="community">
            <p className="mini-label">ENIGMA / 2026</p>
            <h2>Ready when<br />you are.</h2>
            <Link className="get-started" href="/plans">View plans <ArrowRight size={17} /></Link>
          </section>
        </main>
      </div>
    </div>
  )
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return <article className="feature-card"><h2>{title}</h2><p>{children}</p></article>
}
