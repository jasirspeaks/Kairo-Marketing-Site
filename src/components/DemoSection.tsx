import { useRef, useState } from 'react'
import { color, font } from '../styles/tokens'

export default function DemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const el = videoRef.current
    if (!el) return
    el.play()
    setPlaying(true)
  }

  return (
    <section id="demo" style={{ background: color.bg, padding: '110px 24px' }}>
      <div className="container" style={{ maxWidth: 980 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="eyebrow" style={{ color: color.primary }}>
            See it in action
          </span>
          <h2
            style={{
              fontFamily: font.display,
              fontSize: 'clamp(28px, 4.2vw, 46px)',
              fontWeight: 500,
              color: color.textPrimary,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '16px auto 0',
              maxWidth: 640,
            }}
          >
            Two minutes. One deal. Everything you'd otherwise miss.
          </h2>
        </div>

        <div
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            border: `1px solid ${color.border}`,
            background: color.surface,
            boxShadow: '0 40px 100px -30px rgba(139, 108, 255, 0.25)',
          }}
        >
          <video
            ref={videoRef}
            src="/demo.mp4"
            poster="/demo-poster.jpg"
            controls={playing}
            playsInline
            style={{
              display: 'block',
              width: '100%',
              aspectRatio: '16 / 9',
              background: '#000',
              cursor: playing ? 'default' : 'pointer',
            }}
            onClick={() => !playing && handlePlay()}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play demo video"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(18, 16, 24, 0.25)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: color.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 0 0 ${color.glow}`,
                  transition: 'transform 0.15s ease',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7-11-7z" fill={color.textPrimary} />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}