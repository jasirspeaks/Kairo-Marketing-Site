import { color, font, APP_URL } from '../styles/tokens'

export default function FinalCta() {
  return (
    <section
      style={{
        background: color.surfaceSecondary,
        padding: '130px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(139, 108, 255, 0.24) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontFamily: font.display,
            fontSize: 'clamp(32px, 5.5vw, 58px)',
            fontWeight: 500,
            color: color.textPrimary,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          Know what you're missing
          <br />
          <span style={{ fontStyle: 'italic', color: color.glow }}>before it costs you.</span>
        </h2>
        <p style={{ fontSize: 16, color: color.textSecondary, lineHeight: 1.65, marginBottom: 40, maxWidth: 420, margin: '0 auto 40px' }}>
          Start your first deal in under two minutes. No CRM. No integrations required. Just
          clarity on every deal in your pipeline.
        </p>
        <a
          href={APP_URL}
          style={{
            background: color.primary,
            color: color.textPrimary,
            padding: '16px 36px',
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = color.primaryHover
            el.style.transform = 'translateY(-2px)'
            el.style.boxShadow = `0 12px 32px rgba(139, 108, 255, 0.4)`
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = color.primary
            el.style.transform = 'translateY(0)'
            el.style.boxShadow = 'none'
          }}
        >
          Get Early Access
        </a>
      </div>
    </section>
  )
}