import { color, font, APP_URL } from '../styles/tokens'

const FEATURES = [
  'Never lose track of a deal again',
  'Know your biggest risk before it costs you',
  'Walk into every call already caught up',
  'Watch how risk shifts over time, not just once',
  'Skip the manual logging entirely',
  'Always know who really holds influence',
  'Get real help, not a support ticket',
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: color.bg, padding: '110px 24px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow" style={{ color: color.primary }}>
            Pricing
          </span>
          <h2
            style={{
              fontFamily: font.display,
              fontSize: 'clamp(28px, 4.2vw, 46px)',
              fontWeight: 500,
              color: color.textPrimary,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '16px 0 0',
            }}
          >
            One Price, Everything Included.
            <br />
            <span style={{ fontStyle: 'italic', color: color.glow }}>No seat games. No hidden limits.</span>
          </h2>
        </div>

        <div style={{ maxWidth: 420, margin: '0 auto' }}>
          <div
            style={{
              background: color.surfaceSecondary,
              border: `1px solid ${color.primary}`,
              borderRadius: 16,
              padding: '40px 36px',
              position: 'relative',
            }}
          >
            <span className="eyebrow" style={{ color: color.primary }}>Kairo</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '10px 0 12px' }}>
              <span style={{ fontFamily: font.display, color: color.textPrimary, fontSize: 46, fontWeight: 500, letterSpacing: '-0.03em' }}>
                $59
              </span>
              <span style={{ color: color.textTertiary, fontSize: 13 }}>/mo</span>
            </div>
            <p style={{ color: color.textSecondary, fontSize: 13.5, lineHeight: 1.6, marginBottom: 28 }}>
              Everything you need to know what's missing on every deal, before it costs you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: '50%',
                      background: `${color.status.healthy}20`,
                      border: `1px solid ${color.status.healthy}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke={color.status.healthy} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ color: color.textSecondary, fontSize: 13.5 }}>{f}</span>
                </div>
              ))}
            </div>
            <a
              href={APP_URL}
              style={{
                display: 'block',
                textAlign: 'center',
                background: color.primary,
                border: 'none',
                borderRadius: 10,
                padding: '12px 24px',
                color: color.textPrimary,
                fontSize: 14.5,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Reserve Your Spot
            </a>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: color.textTertiary, fontSize: 13, marginTop: 28 }}>
          Early access pricing. Limited to the first cohort of users.
        </p>
      </div>
    </section>
  )
}