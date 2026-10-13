import { SUBJECTS } from '../data/lectures'

export default function RecentLectures({ lectures, onOpenLecture, onOpenSubject }) {
  if (lectures.length === 0) return null
  const sorted = [...lectures].sort((a, b) => (b.updatedAt || b.id || '').localeCompare(a.updatedAt || a.id || ''))
  const recent = sorted.slice(0, 6)

  return (
    <section className="recent">
      <h2 className="section-title">Barcha ma'ruzalar</h2>
      <div className="lecture-card-list">
        {recent.map((l) => {
          const subj = SUBJECTS.find((s) => s.id === l.subjectId)
          return (
            <button key={l.id} className="lecture-card" onClick={() => onOpenLecture(l.id)}>
              <span className="lecture-card-icon">{subj ? subj.icon : '📄'}</span>
              <span className="lecture-card-body">
                <span className="lecture-card-title">{l.title}</span>
                <span className="lecture-card-subject" style={{ color: subj ? subj.color : undefined }}>
                  {subj ? subj.name : 'Noma\'lum fan'}
                </span>
              </span>
              <span className="lecture-card-meta">{l.content.length} paragraf</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}