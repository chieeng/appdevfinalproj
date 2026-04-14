function Topbar() {
  return (
    <div className="topbar">

      <input className="topbar-search" placeholder="Search..." />

      <div className="topbar-actions">
        <button>🔍</button>
        <button>🌐</button>
        <button>👤</button>
      </div>

    </div>
  );
}

export default Topbar;