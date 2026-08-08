import { color, font } from '../styles/tokens'

export default function Footer() {
  return (
    <footer style={{ background: color.bg, borderTop: `1px solid ${color.border}`, padding: '56px 24px 36px' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 48,
            flexWrap: 'wrap',
            marginBottom: 44,
          }}
        >
          <div style={{ maxWidth: 240 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  background: `linear-gradient(135deg, ${color.primary} 0%, ${color.glow} 100%)`,
                }}
              />
              <span style={{ fontFamily: font.display, color: color.textPrimary, fontSize: 17, fontWeight: 600 }}>Kairo</span>
            </div>
            <p style={{ color: color.textTertiary, fontSize: 13, lineHeight: 1.6 }}>
              The deal intelligence workspace for sellers who can't afford to miss what they don't know.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div className="eyebrow" style={{ color: color.textTertiary, marginBottom: 14 }}>Product</div>
              {['Product', 'How it Works', 'Pricing'].map((l) => (
                <div key={l} style={{ marginBottom: 9 }}>
                  <a href={`#${l.toLowerCase().replace(/ /g, '-')}`} style={{ color: color.textSecondary, fontSize: 13, textDecoration: 'none' }}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <div className="eyebrow" style={{ color: color.textTertiary, marginBottom: 14 }}>Company</div>
              {['About', 'Privacy', 'Terms'].map((l) => (
                <div key={l} style={{ marginBottom: 9 }}>
                  <a href="#" style={{ color: color.textSecondary, fontSize: 13, textDecoration: 'none' }}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${color.border}`,
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span style={{ fontFamily: font.mono, color: color.textTertiary, fontSize: 11 }}>© 2026 Kairo. All rights reserved.</span>
          <span style={{ color: color.textTertiary, fontSize: 12 }}>Know what you're missing before it costs you.</span>
        </div>
      </div>
    </footer>
  )
}
