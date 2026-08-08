import { color, font } from '../styles/tokens'
import DealReviewMockup from './DealReviewMockup'

export default function DealReviewSection() {
  return (
    <section style={{ background: color.surface, padding: '110px 24px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div style={{ order: 2 }}>
            <DealReviewMockup />
          </div>
          <div style={{ order: 1 }}>
            <span className="eyebrow" style={{ color: color.primary }}>
              Deal Review
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
              Before every important call, know exactly what you're missing.
            </h2>
            <p style={{ fontSize: 16, color: color.textSecondary, lineHeight: 1.75 }}>
              Deal Review gives you one focused output before you need it: the highest-priority
              risk, what's still unknown, and the exact next move \u2014 down to a drafted follow-up
              message. Not a summary of the last call. An answer to what to do next.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
