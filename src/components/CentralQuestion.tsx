import { color, font } from '../styles/tokens'

export default function CentralQuestion() {
  return (
    <section
      style={{
        background: color.surfaceSecondary,
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 55% 50%, rgba(139, 108, 255, 0.14) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 880, marginLeft: 'auto', marginRight: 'auto' }}>
        <span className="eyebrow" style={{ color: color.textTertiary }}>
          The central question
        </span>
        <h2
          style={{
            fontFamily: font.display,
            fontSize: 'clamp(26px, 5vw, 52px)',
            fontWeight: 500,
            color: color.textPrimary,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '20px 0 24px',
          }}
        >
          "What does the seller still not know
          <br />
          <span style={{ fontStyle: 'italic', color: color.glow }}>that could kill this deal?"</span>
        </h2>
        <p style={{ fontSize: 16, color: color.textSecondary, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
          Every part of Kairo exists to answer this. Not a transcript summary. Not a call score.
          The gap between what you know and what you need to know to close.
        </p>
      </div>
    </section>
  )
}
