import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <section id="contador" className="contador tarjeta">
      <div>
        <p className="etiqueta">Componente dinamico</p>
        <h2>Contador con useState</h2>
      </div>

      <p className="numero" aria-live="polite">{contador}</p>

      <div className="acciones">
        <button type="button" onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
        <button type="button" className="secundario" onClick={() => setContador(0)}>
          Reiniciar
        </button>
      </div>
    </section>
  )
}

export default Contador
