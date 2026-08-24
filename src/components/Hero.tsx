import { color, font, dealStatuses, APP_URL } from '../styles/tokens'

function HeroDealMockup() {
  const atRisk = dealStatuses.find((s) => s.key === 'atRisk')!

  return (
    <div
      style={{
        background: color.surface,
        border: `1px solid ${color.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 40px 100px rgba(0,0,0,0.55)',
        width: '100%',
        maxWidth: 460,
      }}
    >
      <div
        style={{
          background: color.surfaceSecondary,
          borderBottom: `1px solid ${color.border}`,
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.75 }} />
          ))}
        </div>
        <span style={{ fontFamily: font.mono, fontSize: 11, color: color.textTertiary, flex: 1, textAlign: 'center' }}>
          Deal Review · Meridian Health
        </span>
      </div>

      <div style={{ padding: '22px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div>
            <div style={{ fontFamily: font.display, color: color.textPrimary, fontSize: 16, fontWeight: 500 }}>
              Meridian Cloud Migration
            </div>
            <div style={{ fontFamily: font.mono, color: color.textTertiary, fontSize: 11, marginTop: 3 }}>
              Proposal · $84,000
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: `${atRisk.color}1A`,
              border: `1px solid ${atRisk.color}40`,
              borderRadius: 100,
              padding: '5px 10px',
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: atRisk.color }} />
            <span style={{ fontFamily: font.mono, fontSize: 10, color: atRisk.color, fontWeight: 600, letterSpacing: '0.04em' }}>
              AT RISK
            </span>
          </div>
        </div>

        <div
          style={{
            background: 'rgba(246, 178, 62, 0.08)',
            border: `1px solid ${atRisk.color}30`,
            borderRadius: 10,
            padding: '14px 16px',
            marginBottom: 12,
          }}
        >
          <div style={{ fontFamily: font.mono, fontSize: 10, color: atRisk.color, letterSpacing: '0.06em', marginBottom: 6 }}>
            HIGHEST PRIORITY RISK
          </div>
          <div style={{ color: color.textPrimary, fontSize: 13.5, lineHeight: 1.5 }}>
            Economic buyer has never engaged directly
          </div>
        </div>

        <div
          style={{
            border: `1px dashed ${color.border}`,
            borderRadius: 10,
            padding: '14px 16px',
          }}
        >
          <div style={{ fontFamily: font.mono, fontSize: 10, color: color.textTertiary, letterSpacing: '0.06em', marginBottom: 6 }}>
            STILL MISSING
          </div>
          <div style={{ color: color.textSecondary, fontSize: 13.5, lineHeight: 1.5 }}>
            Budget confirmation · Decision timeline
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-section"
      style={{
        background: color.bg,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 15%, rgba(139, 108, 255, 0.16) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(205, 184, 255, 0.06) 0%, transparent 45%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        className="container hero-grid"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(139, 108, 255, 0.14)',
              border: `1px solid ${color.border}`,
              borderRadius: 100,
              padding: '6px 14px',
              marginBottom: 32,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: color.primary }} />
            <span className="eyebrow" style={{ color: color.glow }}>
              Deal intelligence, not another CRM
            </span>
          </div>

          <h1
            style={{
              fontFamily: font.display,
              fontSize: 'clamp(38px, 5vw, 64px)',
              fontWeight: 500,
              color: color.textPrimary,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            Every deal is hiding
            <br />
            something.
            <br />
            <span style={{ fontStyle: 'italic', color: color.glow }}>Kairo finds it first.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.6vw, 18px)',
              color: color.textSecondary,
              lineHeight: 1.65,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            Kairo is the deal intelligence workspace that tracks what you know, what you don't,
            and what's about to cost you the deal — across every call, every stakeholder, every stage.
          </p>

          <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a
              href={APP_URL}
              style={{
                background: color.primary,
                color: color.textPrimary,
                padding: '15px 30px',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = color.primaryHover
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = `0 10px 28px rgba(139, 108, 255, 0.35)`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = color.primary
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              style={{
                color: color.textSecondary,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = color.textPrimary)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = color.textSecondary)}
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-mockup-wrap" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <HeroDealMockup />
        </div>
      </div>
    </section>
  )
}