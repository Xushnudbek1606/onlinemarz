export default function Header({ onHome }) {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="logo" onClick={onHome}>
          <span className="logo-icon">📚</span>
          <span className="logo-text">
            student<span className="logo-dot">.</span>uz
          </span>
        </button>
        <span className="header-sub">Ma'ruzalar to'plami</span>
      </div>
    </header>
  )
}