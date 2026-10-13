import { useMemo, useState } from 'react'
import { SUBJECTS } from '../data/lectures'
import RecentLectures from './RecentLectures'

export default function HomeScreen({ lectures, onOpenSubject, onOpenLecture }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SUBJECTS
    return SUBJECTS.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      lectures.some((l) => l.subjectId === s.id && l.title.toLowerCase().includes(q))
    )
  }, [query, lectures])

  return (
    <div className="home">
      <section className="hero">
        <h1>Dars o'tish uchun <span className="accent">ma'ruzalar</span></h1>
        <p className="hero-sub">Fanlar bo'yicha tayyor ma'ruza matnlari. Ekrandan o'qib, darsingizni sifatli o'tkazing.</p>
        <div className="search-box">
          <input
            className="search-input"
            placeholder="Fan yoki ma'ruza nomini kiriting..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="subjects">
        <h2 className="section-title">Fanlar</h2>
        <div className="subject-grid">
          {filtered.map((s) => {
            const count = lectures.filter((l) => l.subjectId === s.id).length
            return (
              <button key={s.id} className="subject-card" style={{ '--c': s.color }} onClick={() => onOpenSubject(s.id)}>
                <span className="subject-icon">{s.icon}</span>
                <span className="subject-name">{s.name}</span>
                <span className="subject-count">{count} ta ma'ruza</span>
              </button>
            )
          })}
        </div>
      </section>

      <RecentLectures lectures={lectures} onOpenLecture={onOpenLecture} onOpenSubject={onOpenSubject} />
    </div>
  )
}