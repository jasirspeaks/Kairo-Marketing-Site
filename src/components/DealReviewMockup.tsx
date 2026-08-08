import { useState } from 'react'
import { color, font, dealStatuses } from '../styles/tokens'

const TABS = ['Highest Priority Risk', "What's Missing", 'Next Action']

export default function DealReviewMockup() {
  const [tab, setTab] = useState(0)
  const critical = dealStatuses.find((s) => s.key === 'critical')!

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
          Deal Review · Meridian Cloud Migration
        </span>
      </div>

      <div style={{ borderBottom: `1px solid ${color.border}`, display: 'flex', padding: '0 18px', overflowX: 'auto' }}>
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: tab === i ? `2px solid ${color.primary}` : '2px solid transparent',
              color: tab === i ? color.textPrimary : color.textTertiary,
              padding: '12px 12px',
              fontSize: 12,
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: '22px 20px', minHeight: 240 }}>
        {tab === 0 && (
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: `${critical.color}1A`,
                border: `1px solid ${critical.color}40`,
                borderRadius: 100,
                padding: '4px 10px',
                marginBottom: 16,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: critical.color }} />
              <span style={{ fontFamily: font.mono, fontSize: 10, color: critical.color, fontWeight: 600, letterSpacing: '0.05em' }}>
                CRITICAL
              </span>
            </div>
            <div style={{ color: color.textPrimary, fontSize: 15, fontWeight: 600, marginBottom: 10 }}>
              Champion has gone silent for 9 days after proposal send.
            </div>
            <p style={{ color: color.textSecondary, fontSize: 13.5, lineHeight: 1.65, marginBottom: 18 }}>
              Dana was highly responsive through discovery and demo. Nine days of silence after a
              proposal, with no auto-reply or OOO signal, usually means internal pushback \u2014 not
              disinterest. This is the moment to re-engage directly, not wait.
            </p>
            <div
              style={{
                background: 'rgba(255, 102, 122, 0.08)',
                border: `1px solid ${color.status.critical}30`,
                borderRadius: 10,
                padding: '14px 16px',
              }}
            >
              <div style={{ color: color.status.critical, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Manager Note</div>
              <p style={{ color: color.textSecondary, fontSize: 12.5, lineHeight: 1.6, fontStyle: 'italic' }}>
                "Don't let this sit another week. If Dana can't get you to her VP directly, that's your answer."
              </p>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Economic buyer never engaged', detail: 'VP of Infrastructure has not been in any conversation. No sign-off path exists without them.' },
              { label: 'Business impact not quantified', detail: 'You\u2019ve described features, not outcomes. What does this save Meridian in dollars or hours per year?' },
              { label: 'Competing vendor unaddressed', detail: 'Unknown whether a competitor is in the running \u2014 this hasn\u2019t come up in three calls.' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: color.surfaceSecondary,
                  border: `1px solid ${color.border}`,
                  borderRadius: 10,
                  padding: '13px 14px',
                }}
              >
                <div style={{ color: color.textPrimary, fontSize: 13, fontWeight: 600, marginBottom: 5 }}>{item.label}</div>
                <p style={{ color: color.textTertiary, fontSize: 12, lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div>
            <div style={{ fontFamily: font.mono, fontSize: 10, color: color.textTertiary, marginBottom: 12, letterSpacing: '0.06em' }}>
              KEY FOLLOW-UP MESSAGE
            </div>
            <div
              style={{
                background: 'rgba(139, 108, 255, 0.1)',
                border: `1px solid ${color.primary}40`,
                borderRadius: 10,
                padding: '16px',
                marginBottom: 16,
              }}
            >
              <p style={{ color: color.textPrimary, fontSize: 13, lineHeight: 1.7, fontStyle: 'italic' }}>
                "Dana \u2014 wanted to reconnect before another week passes. To build the right case
                for your leadership, could we set up 20 minutes with you and your VP of
                Infrastructure? I want the business case to speak to what they care about."
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                style={{
                  background: color.primary,
                  border: 'none',
                  borderRadius: 7,
                  padding: '9px 16px',
                  color: color.textPrimary,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Copy message
              </button>
              <button
                style={{
                  background: 'transparent',
                  border: `1px solid ${color.border}`,
                  borderRadius: 7,
                  padding: '9px 16px',
                  color: color.textSecondary,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Schedule next meeting
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
