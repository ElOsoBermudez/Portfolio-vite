import Header from './components/Header.jsx'
import Contador from './components/Contador.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const tecnologias = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Git']

  return (
    <div className="app">
      <Header />

      <main className="contenido">
        <section className="presentacion tarjeta">
          <p className="etiqueta">Portfolio academico</p>
          <h2>Hola, soy Johan</h2>
          <p>
            Esta web sencilla esta creada con React y Vite para practicar la
            organizacion de componentes, estilos propios y el uso de Hooks.
          </p>
        </section>

        <Contador />

        <section className="tarjeta">
          <h2>Sobre mi</h2>
          <p>
            Soy estudiante de DAW y estoy aprendiendo a crear interfaces web
            modernas, claras y adaptables. Me interesa mejorar mis proyectos paso
            a paso y escribir codigo facil de entender.
          </p>
        </section>

        <section className="tarjeta">
          <h2>Tecnologias</h2>
          <ul className="lista-tecnologias">
            {tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
