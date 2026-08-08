import { color, font } from '../styles/tokens'
import RiskEvolutionMockup from './RiskEvolutionMockup'

export default function ProductSection() {
  return (
    <section id="product" style={{ background: color.bg, padding: '110px 24px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
            <span className="eyebrow" style={{ color: color.primary }}>
              Risk Evolution
            </span>
            <h2
              style={{
                fontFamily: font.display,
                fontSize: 'clamp(26px, 3.6vw, 42px)',
                fontWeight: 500,
                color: color.textPrimary,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: '16px 0 20px',
              }}
            >
              One call tells you what happened.
              <br />
              <span style={{ fontStyle: 'italic', color: color.glow }}>Every call tells you what's changing.</span>
            </h2>
            <p style={{ fontSize: 16, color: color.textSecondary, lineHeight: 1.75, marginBottom: 28 }}>
              A single conversation is just evidence. The deal is what matters — and the deal has
              memory. Kairo tracks every risk across every call: what got resolved, what's still
              open, and what just appeared. A good call doesn't erase a risk you haven't actually
              closed.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Every call updates the deal\u2019s understanding \u2014 nothing is analyzed in isolation.',
                'See exactly what changed between this call and the last one.',
                'Unresolved risks stay visible until they\u2019re actually resolved, not just unmentioned.',
              ].map((line) => (
                <div key={line} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: color.primary,
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 14.5, color: color.textSecondary, lineHeight: 1.6 }}>{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <RiskEvolutionMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
