import { useState } from 'react'
import { SUBJECTS } from '../data/lectures'

export default function LectureForm({ store, subjectId, editLecture, onBack, onSave }) {
  const isEdit = Boolean(editLecture)

  const [title, setTitle] = useState(editLecture ? editLecture.title : '')
  const [subject, setSubject] = useState(subjectId || (editLecture && editLecture.subjectId) || SUBJECTS[0].id)
  const [paragraphs, setParagraphs] = useState(editLecture ? editLecture.content.join('\n\n') : '')

  const save = () => {
    const trimmedTitle = title.trim()
    const content = paragraphs
      .split(/\n+/)
      .map((p) => p.trim())
      .filter(Boolean)

    if (!trimmedTitle) {
      alert('Ma\'ruza nomini kiriting.')
      return
    }
    if (content.length === 0) {
      alert('Ma\'ruza matnini kiriting. Har bir paragraf yangi qatordan yoziladi.')
      return
    }

    const data = {
      title: trimmedTitle,
      subjectId: subject,
      content,
      updatedAt: new Date().toISOString()
    }

    let id
    if (isEdit) {
      id = editLecture.id
      store.updateLecture(id, data)
    } else {
      id = store.addLecture(data)
    }
    onSave(id, subject)
  }

  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Orqaga</button>
      <h1 className="form-title">{isEdit ? 'Ma\'ruzani tahrirlash' : 'Yangi ma\'ruza'}</h1>

      <label className="field-label">Fan</label>
      <div className="subject-picker">
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            className={`subject-chip ${subject === s.id ? 'active' : ''}`}
            style={subject === s.id ? { '--c': s.color, background: s.color, color: '#fff' } : { '--c': s.color }}
            onClick={() => setSubject(s.id)}
          >
            {s.icon} {s.name}
          </button>
        ))}
      </div>

      <label className="field-label">Ma'ruza nomi</label>
      <input
        className="text-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Masalan: Mexanik harakat"
      />

      <label className="field-label">Ma'ruza matni (har bir paragraf yangi qatordan)</label>
      <textarea
        className="text-area"
        rows="12"
        value={paragraphs}
        onChange={(e) => setParagraphs(e.target.value)}
        placeholder={'Birinchi paragraf.\n\nIkkinchi paragraf.\n\nUchinchi paragraf...'}
      />

      <div className="form-actions">
        <button className="btn primary" onClick={save}>
          {isEdit ? '💾 Saqlash' : '➕ Qo\'shish'}
        </button>
        <button className="btn ghost" onClick={onBack}>Bekor qilish</button>
        {isEdit && (
          <button
            className="btn danger"
            onClick={() => {
              if (confirm(`${editLecture.title} ma'ruzasini o'chirishni tasdiqlaysizmi?`)) {
                store.deleteLecture(editLecture.id)
                onBack()
              }
            }}
          >
            🗑️ O'chirish
          </button>
        )}
      </div>
    </div>
  )
}