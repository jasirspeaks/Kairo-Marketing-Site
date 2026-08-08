import { color, font, dealStatuses } from '../styles/tokens'

const CALLS = [
  {
    date: 'Call 1 · Sep 3',
    status: dealStatuses.find((s) => s.key === 'promising')!,
    note: 'Discovery. Champion identified, budget range unconfirmed.',
    risks: [{ label: 'Economic buyer not yet identified', state: 'new' as const }],
  },
  {
    date: 'Call 2 · Sep 17',
    status: dealStatuses.find((s) => s.key === 'atRisk')!,
    note: 'Demo. Champion engaged, but decision process still opaque.',
    risks: [
      { label: 'Economic buyer not yet identified', state: 'unresolved' as const },
      { label: 'Decision timeline unclear', state: 'new' as const },
    ],
  },
  {
    date: 'Call 3 · Oct 2',
    status: dealStatuses.find((s) => s.key === 'critical')!,
    note: 'Proposal review. Champion went quiet for 9 days after send.',
    risks: [
      { label: 'Economic buyer not yet identified', state: 'unresolved' as const },
      { label: 'Decision timeline unclear', state: 'resolved' as const },
      { label: 'Champion has gone silent', state: 'new' as const },
    ],
  },
]

const stateColor = (state: 'new' | 'unresolved' | 'resolved') =>
  state === 'resolved' ? color.status.healthy : state === 'new' ? color.status.critical : color.risk

export default function RiskEvolutionMockup() {
  return (
    <div
      style={{
        background: color.surface,
        border: `1px solid ${color.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
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
          Risk Evolution · Meridian Cloud Migration
        </span>
      </div>

      <div style={{ padding: '24px 22px' }}>
        <div style={{ position: 'relative', paddingLeft: 20 }}>
          <div
            style={{
              position: 'absolute',
              left: 5,
              top: 8,
              bottom: 8,
              width: 1,
              background: color.border,
            }}
          />
          {CALLS.map((call, i) => (
            <div key={call.date} style={{ position: 'relative', marginBottom: i === CALLS.length - 1 ? 0 : 28 }}>
              <div
                style={{
                  position: 'absolute',
                  left: -20,
                  top: 3,
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: call.status.color,
                  border: `2px solid ${color.surface}`,
                  boxShadow: `0 0 0 1px ${call.status.color}55`,
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: font.mono, fontSize: 11, color: color.textTertiary }}>{call.date}</span>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 10,
                    fontWeight: 600,
                    color: call.status.color,
                    letterSpacing: '0.05em',
                    background: `${call.status.color}1A`,
                    border: `1px solid ${call.status.color}40`,
                    borderRadius: 100,
                    padding: '2px 8px',
                  }}
                >
                  {call.status.label.toUpperCase()}
                </span>
              </div>
              <p style={{ fontSize: 13, color: color.textSecondary, lineHeight: 1.55, marginBottom: 10 }}>{call.note}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {call.risks.map((risk) => (
                  <div
                    key={risk.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 12.5,
                      color: risk.state === 'resolved' ? color.textTertiary : color.textPrimary,
                      textDecoration: risk.state === 'resolved' ? 'line-through' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: stateColor(risk.state),
                        flexShrink: 0,
                      }}
                    />
                    {risk.label}
                    {risk.state === 'new' && (
                      <span style={{ fontFamily: font.mono, fontSize: 9, color: color.status.critical, letterSpacing: '0.05em' }}>
                        NEW
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
