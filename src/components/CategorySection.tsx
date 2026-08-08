import type { CSSProperties } from 'react'
import { color, font } from '../styles/tokens'

const ROWS = [
  { capability: 'Primary object', crm: 'The contact / company record', recorder: 'The recording', kairo: 'The deal — living, continuously updated' },
  { capability: 'What it tells you', crm: 'What was logged', recorder: 'What was said', kairo: 'What you still don\u2019t know' },
  { capability: 'Across multiple calls', crm: 'Manual notes, easy to lose', recorder: 'Isolated transcripts', kairo: 'Risk Evolution — what changed, what\u2019s still open' },
  { capability: 'Before your next call', crm: 'You dig through history yourself', recorder: 'You re-listen or re-read', kairo: 'One answer: the highest-priority risk, and what to do' },
]

export default function CategorySection() {
  return (
    <section style={{ background: color.surface, padding: '110px 24px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow" style={{ color: color.primary }}>
            Why not just use a CRM
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
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            A CRM stores what happened.
            <br />
            <span style={{ fontStyle: 'italic', color: color.glow }}>Kairo tells you what's missing.</span>
          </h2>
        </div>

        <div
          style={{
            overflowX: 'auto',
            border: `1px solid ${color.border}`,
            borderRadius: 16,
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
            <thead>
              <tr>
                <th style={{ ...cellStyle, textAlign: 'left', color: color.textTertiary, fontWeight: 500 }}>&nbsp;</th>
                <th style={{ ...cellStyle, color: color.textTertiary, fontWeight: 500 }}>CRM</th>
                <th style={{ ...cellStyle, color: color.textTertiary, fontWeight: 500 }}>Call recorder</th>
                <th
                  style={{
                    ...cellStyle,
                    color: color.glow,
                    fontWeight: 600,
                    background: 'rgba(139, 108, 255, 0.08)',
                  }}
                >
                  Kairo
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.capability} style={{ borderTop: `1px solid ${color.border}` }}>
                  <td style={{ ...cellStyle, textAlign: 'left', color: color.textPrimary, fontWeight: 600, fontSize: 13.5 }}>
                    {row.capability}
                  </td>
                  <td style={{ ...cellStyle, color: color.textTertiary, fontSize: 13.5 }}>{row.crm}</td>
                  <td style={{ ...cellStyle, color: color.textTertiary, fontSize: 13.5 }}>{row.recorder}</td>
                  <td
                    style={{
                      ...cellStyle,
                      color: color.textPrimary,
                      fontSize: 13.5,
                      background: 'rgba(139, 108, 255, 0.05)',
                      borderBottom: i === ROWS.length - 1 ? 'none' : undefined,
                    }}
                  >
                    {row.kairo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const cellStyle: CSSProperties = {
  padding: '16px 20px',
  textAlign: 'center',
  verticalAlign: 'top',
  lineHeight: 1.5,
}
