export function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap">
        <div className="mark">
          <span className="blip" /> shadiyn.org
        </div>
        <nav className="topnav">
          <a href="#about">/about</a>
          <a href="#wins">/wins</a>
          <a href="#path">/track-record</a>
          <a href="#contact">/contact</a>
        </nav>
      </div>
    </header>
  );
}
