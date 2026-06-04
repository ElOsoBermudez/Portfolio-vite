function Header() {
  return (
    <header className="header">
      <div>
        <p className="etiqueta">React + Vite</p>
        <h1>Mi Portfolio Vite</h1>
      </div>
      <nav className="nav" aria-label="Secciones principales">
        <a href="#contador">Contador</a>
        <a href="#footer">Contacto</a>
      </nav>
    </header>
  )
}

export default Header
