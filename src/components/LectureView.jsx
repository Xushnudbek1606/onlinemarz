import { useState } from 'react'

export default function LectureView({ lecture, onBack, onEdit, onPresent }) {
  const [fontSize, setFontSize] = useState(20)
  const [fontOpen, setFontOpen] = useState(false)

  return (
    <div className="page">
      <div className="toolbar">
        <button className="back-btn" onClick={onBack}>← Orqaga</button>
        <div className="toolbar-spacer" />
        <button
          className="btn primary present-btn"
          onClick={onPresent}
          title="Dars rejimi: katta shrift bilan to'liq ekran"
        >
          🎓 Dars rejimi
        </button>
        <button className="icon-btn" onClick={onEdit} title="Ma'ruzani tahrirlash">✏️</button>
      </div>

      <div className="lecture-header">
        <div className="lecture-breadcrumb">
          <span style={{ color: lecture.subjectNameColor || undefined }}>{lecture.subjectName || 'Fan'}</span>
          <span> · </span>
          <span>{lecture.content.length} paragraf</span>
        </div>
        <h1 className="lecture-title">{lecture.title}</h1>
        <div className="font-control">
          <label className="font-label">Matn o'lchami</label>
          <div className="font-buttons">
            <button className="icon-btn" onClick={() => setFontSize((s) => Math.max(14, s - 2))}>A−</button>
            <span className="font-value">{fontSize}px</span>
            <button className="icon-btn" onClick={() => setFontSize((s) => Math.min(36, s + 2))}>A+</button>
          </div>
        </div>
      </div>

      <article className="lecture-content" style={{ fontSize }}>
        {lecture.content.map((p, i) => (
          <p key={i} className="lecture-paragraph">
            <span className="paragraph-num">{i + 1}</span>
            {p}
          </p>
        ))}
      </article>

      <div className="lecture-end">
        <p>✅ Ma'ruza yakunlandi</p>
        <button className="btn primary" onClick={onPresent}>🎓 Dars rejimida takrorlash</button>
      </div>
    </div>
  )
}