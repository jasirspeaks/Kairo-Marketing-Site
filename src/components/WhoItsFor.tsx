import { color, font } from '../styles/tokens'

const SEGMENTS = [
  {
    role: 'Full-cycle AE',
    change: 'Walk into every call already knowing what\u2019s unresolved \u2014 no more digging through your own notes.',
  },
  {
    role: 'Founder-seller',
    change: 'Run your whole pipeline without a CRM you\u2019ll never fully set up. Kairo works from day one.',
  },
  {
    role: 'Consultant',
    change: 'Keep every client engagement\u2019s risk state visible, even across long gaps between calls.',
  },
  {
    role: 'Agency owner',
    change: 'See risk patterns across your whole team\u2019s pipeline \u2014 not just what each rep chooses to report.',
  },
]

export default function WhoItsFor() {
  return (
    <section style={{ background: color.surface, padding: '110px 24px' }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 560 }}>
          <span className="eyebrow" style={{ color: color.primary }}>
            Built for
          </span>
          <h2
            style={{
              fontFamily: font.display,
              fontSize: 'clamp(28px, 4.2vw, 46px)',
              fontWeight: 500,
              color: color.textPrimary,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginTop: 16,
            }}
          >
            For anyone who carries a pipeline alone.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {SEGMENTS.map((seg) => (
            <div
              key={seg.role}
              style={{
                background: color.bg,
                border: `1px solid ${color.border}`,
                borderRadius: 14,
                padding: '28px 24px',
              }}
            >
              <div style={{ fontFamily: font.display, fontSize: 17, fontWeight: 600, color: color.glow, marginBottom: 12 }}>
                {seg.role}
              </div>
              <p style={{ fontSize: 14, color: color.textSecondary, lineHeight: 1.65 }}>{seg.change}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
