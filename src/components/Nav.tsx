import { useState, useEffect } from 'react'
import { color, font, APP_URL } from '../styles/tokens'

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

function Logo({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Kairo"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        flexShrink: 0,
        objectFit: 'cover',
      }}
    />
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(18, 16, 24, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? color.border : 'transparent'}`,
      }}
    >
      <div
        className="container"
        style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Logo size={36} />
          <span style={{ fontFamily: font.display, color: color.textPrimary, fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' }}>
            Kairo
          </span>
        </a>

        <div className="hide-mobile" style={{ alignItems: 'center', gap: 36 }}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: color.textSecondary,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = color.textPrimary)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = color.textSecondary)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_URL}
            style={{
              background: color.primary,
              color: color.textPrimary,
              padding: '9px 20px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = color.primaryHover
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = color.primary
              el.style.transform = 'translateY(0)'
            }}
          >
            Get Early Access
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', color: color.textPrimary, padding: 8 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="show-mobile"
          style={{
            background: color.surface,
            borderTop: `1px solid ${color.border}`,
            padding: '20px 24px 24px',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: color.textSecondary, fontSize: 16, fontWeight: 500, textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_URL}
            style={{
              background: color.primary,
              color: color.textPrimary,
              padding: '12px 20px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  )
}