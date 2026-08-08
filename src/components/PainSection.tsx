import { color, font } from '../styles/tokens'

const SCENARIOS = [
  {
    number: '01',
    headline: 'The deal went quiet, and you don\u2019t know why.',
    body: 'You sent a strong proposal. They said they\u2019d follow up. It\u2019s been eleven days. Going back through your notes, you realize you never actually confirmed who signs off. That gap is now a loss you didn\u2019t see coming.',
  },
  {
    number: '02',
    headline: 'You solved the objection they said out loud \u2014 not the one that mattered.',
    body: '\u201cThe pricing is a concern,\u201d they told you. So you worked the commercial terms. But the real issue was that their CFO had never been in the room. You optimized for the wrong problem because the real one was never surfaced.',
  },
  {
    number: '03',
    headline: 'You felt good about it. Then they went with someone else.',
    body: 'The worst deals to lose are the ones that felt close. Close to what, exactly? You didn\u2019t know what you didn\u2019t know \u2014 and neither did anyone reviewing the deal with you.',
  },
]

export default function PainSection() {
  return (
    <section style={{ background: color.bg, padding: '110px 24px' }}>
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 620 }}>
          <span className="eyebrow" style={{ color: color.primary }}>
            The problem
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
            Three ways a winnable deal becomes a loss you didn't see coming.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: color.border }}>
          {SCENARIOS.map((s) => (
            <div
              key={s.number}
              style={{
                background: color.bg,
                padding: '40px 32px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = color.surface)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = color.bg)}
            >
              <div style={{ fontFamily: font.mono, fontSize: 12, color: color.textTertiary, letterSpacing: '0.1em', marginBottom: 28 }}>
                {s.number}
              </div>
              <h3
                style={{
                  fontFamily: font.display,
                  fontSize: 21,
                  fontWeight: 500,
                  color: color.textPrimary,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  marginBottom: 14,
                }}
              >
                {s.headline}
              </h3>
              <p style={{ fontSize: 14.5, color: color.textSecondary, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
