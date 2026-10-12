import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="page">
      <header>
        <a className="brand" href="#inicio"><span className="brand-mark">W<span>↗</span></span>Willy / Lab</a>
        <span className="edition">PRÁCTICA 02 <span>·</span> REACT</span>
      </header>
      <main id="inicio">
        <section className="intro">
          <p className="eyebrow"><span /> HECHO PARA APRENDER</p>
          <h1>Hola, Steven.<br />Ahora con <em>React.</em></h1>
          <p className="description">Una pequeña web. Un gran siguiente paso.<br />Nuestra práctica de pipelines, ahora interactiva.</p>
          <a className="explore" href="#demo">Prueba la demo <span>↓</span></a>
          <div className="stack"><span>React</span><span>GitHub Actions</span><span>GitHub Pages</span></div>
        </section>
        <section className="demo" id="demo" aria-labelledby="demo-title">
          <div className="demo-top"><span className="demo-label">PLAYGROUND</span><span className="dots">● ● ●</span></div>
          <div className="atom" aria-hidden="true"><span /><span /><span /><i /></div>
          <h2 id="demo-title">Dale vida a la página.</h2>
          <p>Cada clic cambia el estado de React.</p>
          <div className="count" role="status" aria-live="polite" aria-atomic="true"><strong>{count}</strong><span>{count === 1 ? 'clic realizado' : 'clics realizados'}</span></div>
          <button className="primary" onClick={() => setCount(value => value + 1)}>Probar React <span>+</span></button>
          <button className="reset" onClick={() => setCount(0)} disabled={count === 0}>Reiniciar contador</button>
        </section>
      </main>
      <footer><span>Pequeños experimentos, grandes ideas.</span><span>WILLY / LAB <span className="footer-arrow">↗</span></span></footer>
    </div>
  )
}
