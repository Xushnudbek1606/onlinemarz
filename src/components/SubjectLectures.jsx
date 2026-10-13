export default function SubjectLectures({ subject, lectures, onBack, onOpenLecture, onAddNew }) {
  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Orqaga</button>
      <div className="subject-header" style={{ '--c': subject.color }}>
        <span className="subject-header-icon">{subject.icon}</span>
        <h1>{subject.name}</h1>
        <p>{lectures.length} ta ma'ruza mavjud</p>
      </div>

      {lectures.length === 0 ? (
        <div className="empty">
          <p>Bu fan bo'yicha hali ma'ruza yo'q.</p>
          <button className="btn primary" onClick={onAddNew}>➕ Yangi ma'ruza qo'shish</button>
        </div>
      ) : (
        <>
          <div className="lecture-list">
            {lectures.map((l, i) => (
              <button key={l.id} className="lecture-list-item" onClick={() => onOpenLecture(l.id)}>
                <span className="lecture-num">{i + 1}</span>
                <span className="lecture-list-title">{l.title}</span>
                <span className="lecture-list-meta">{l.content.length} paragraf · o'qish</span>
                <span className="chevron">›</span>
              </button>
            ))}
          </div>
          <button className="btn primary add-btn" onClick={onAddNew}>➕ Yangi ma'ruza</button>
        </>
      )}
    </div>
  )
}