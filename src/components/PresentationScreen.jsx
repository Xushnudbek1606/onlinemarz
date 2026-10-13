import { useCallback, useEffect, useState } from 'react'

export default function PresentationScreen({ lecture, onExit }) {
  const [index, setIndex] = useState(0)
  const [fontSize, setFontSize] = useState(34)
  const total = lecture.content.length

  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total])
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const first = useCallback(() => setIndex(0), [])
  const last = useCallback(() => setIndex(total - 1), [total])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
      else if (e.key === 'Home') { e.preventDefault(); first() }
      else if (e.key === 'End') { e.preventDefault(); last() }
      else if (e.key === 'Escape') { e.preventDefault(); onExit() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, first, last, onExit])

  if (total === 0) {
    return (
      <div className="presentation empty-present">
        <h1>Ma'ruza matni bo'sh</h1>
        <button className="btn primary" onClick={onExit}>Chiqish</button>
      </div>
    )
  }

  const progress = ((index + 1) / total) * 100

  return (
    <div className="presentation">
      <div className="present-topbar">
        <button className="present-exit" onClick={onExit} title="Chiqish (Esc)">✕</button>
        <div className="present-title">{lecture.title}</div>
        <div className="present-zoom">
          <button onClick={() => setFontSize((s) => Math.max(20, s - 4))}>A−</button>
          <button onClick={() => setFontSize((s) => Math.min(60, s + 4))}>A+</button>
        </div>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="present-main">
        <button className="present-nav prev" onClick={prev} disabled={index === 0} title="Oldingi (→)">‹</button>

        <div className="present-slide">
          <div className="present-counter">{index + 1} / {total}</div>
          <p className="present-text" style={{ fontSize }}>{lecture.content[index]}</p>
          {lecture.content.length > 1 && (
            <div className="present-hint">
              ← → strelkalar bilan varaqlang · Esc chiqish
            </div>
          )}
        </div>

        <button className="present-nav next" onClick={next} disabled={index === total - 1} title="Keyingi (→)">›</button>
      </div>

      <div className="present-bottombar">
        <span className="present-subject">{lecture.subjectName}</span>
        <div className="present-dots">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Paragraf ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}