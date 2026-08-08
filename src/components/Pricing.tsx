import { useState } from 'react'
import { color, font, APP_URL } from '../styles/tokens'

const PLANS = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    description: 'For sellers testing whether they\u2019re missing more than they think.',
    features: ['Up to 5 active deals', 'Call & transcript review', 'Deal Review before every call', 'Email support'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Professional',
    monthly: 39,
    annual: 31,
    description: 'For full-cycle sellers and consultants running a real pipeline.',
    features: ['Unlimited active deals', 'Risk Evolution across calls', 'Calendar & Fireflies integration', 'Stakeholder tracking', 'Priority support'],
    cta: 'Start free',
    highlight: true,
  },
  {
    name: 'Team',
    monthly: 89,
    annual: 71,
    description: 'For agency owners who need visibility across every rep\u2019s pipeline.',
    features: ['Everything in Professional', 'Team-wide Risk Center', 'Shared risk pattern reporting', 'Admin controls', 'Dedicated onboarding'],
    cta: 'Talk to us',
    highlight: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

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
              margin: '16px 0 32px',
            }}
          >
            Simple, honest pricing.
            <br />
            <span style={{ fontStyle: 'italic', color: color.glow }}>No seat games. No hidden limits.</span>
          </h2>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: color.surface,
              border: `1px solid ${color.border}`,
              borderRadius: 100,
              padding: '6px 8px 6px 16px',
            }}
          >
            <span style={{ color: annual ? color.textTertiary : color.textPrimary, fontSize: 13, fontWeight: 500 }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                width: 44,
                height: 24,
                borderRadius: 100,
                background: annual ? color.primary : color.border,
                border: 'none',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
              aria-label="Toggle annual billing"
            >
              <div
                style={{
                  position: 'absolute',
                  top: 3,
                  left: annual ? 23 : 3,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: color.textPrimary,
                  transition: 'left 0.2s',
                }}
              />
            </button>
            <span style={{ color: annual ? color.textPrimary : color.textTertiary, fontSize: 13, fontWeight: 500 }}>Annual</span>
            {annual && (
              <div
                style={{
                  background: 'rgba(61, 214, 140, 0.15)',
                  border: `1px solid ${color.status.healthy}40`,
                  borderRadius: 100,
                  padding: '3px 10px',
                  color: color.status.healthy,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Save 20%
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly
            return (
              <div
                key={plan.name}
                style={{
                  background: plan.highlight ? color.surfaceSecondary : color.surface,
                  border: `1px solid ${plan.highlight ? color.primary : color.border}`,
                  borderRadius: 16,
                  padding: '36px 32px',
                  position: 'relative',
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -1,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: color.primary,
                      borderRadius: '0 0 8px 8px',
                      padding: '4px 14px',
                      fontSize: 11,
                      fontWeight: 600,
                      color: color.textPrimary,
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <span className="eyebrow" style={{ color: color.primary }}>{plan.name}</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '10px 0 12px' }}>
                  <span style={{ fontFamily: font.display, color: color.textPrimary, fontSize: 46, fontWeight: 500, letterSpacing: '-0.03em' }}>
                    ${price}
                  </span>
                  {price > 0 && <span style={{ color: color.textTertiary, fontSize: 13 }}>/mo</span>}
                </div>
                <p style={{ color: color.textSecondary, fontSize: 13.5, lineHeight: 1.6, marginBottom: 28 }}>{plan.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
                  {plan.features.map((f) => (
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
                    background: plan.highlight ? color.primary : 'transparent',
                    border: plan.highlight ? 'none' : `1px solid ${color.border}`,
                    borderRadius: 10,
                    padding: '12px 24px',
                    color: color.textPrimary,
                    fontSize: 14.5,
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

        <p style={{ textAlign: 'center', color: color.textTertiary, fontSize: 13, marginTop: 28 }}>
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
