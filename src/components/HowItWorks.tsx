import { color, font } from '../styles/tokens'

const STEPS = [
  {
    number: '1',
    headline: 'Start a deal in under two minutes.',
    body: 'Name it, add what you already know \u2014 company, stage, champion, value. Kairo builds the workspace immediately. No CRM setup, no integration maze.',
  },
  {
    number: '2',
    headline: 'Log calls as they happen.',
    body: 'Paste a transcript, upload a recording, or connect your calendar and Fireflies for automatic capture. Kairo reads the evidence and updates the deal\u2019s understanding.',
  },
  {
    number: '3',
    headline: 'Know what matters before it matters.',
    body: 'Get a Deal Review before any important call. See what changed, what\u2019s still open, and exactly what to do next \u2014 never walk in blind again.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: color.bg, padding: '110px 24px' }}>
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
          <span className="eyebrow" style={{ color: color.primary }}>
            How it works
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
            From first deal to full clarity, in three steps.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40 }}>
          {STEPS.map((step) => (
            <div key={step.number}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: color.surface,
                  border: `1px solid ${color.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: font.display,
                  color: color.glow,
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontFamily: font.display,
                  fontSize: 19,
                  fontWeight: 500,
                  color: color.textPrimary,
                  lineHeight: 1.3,
                  marginBottom: 10,
                }}
              >
                {step.headline}
              </h3>
              <p style={{ fontSize: 14.5, color: color.textSecondary, lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
