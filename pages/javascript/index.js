import Head from 'next/head'
import Link from 'next/link'

export default function JavaScript() {
  return (
    <div className="container">
      <Head>
        <title>Aprendiendo JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/">Volver</Link>
        <h1>Bienvenido a aprender JavaScript</h1>

        <div className="container">
          <p>
            Este tutorial, tiene como objetivo enseñar de una forma sencilla y resumida lo que es
            JavaScript y como utilizarlo, si deseas profundizar más en el lenguaje, puedes aprender
            desde su url oficial, https://developer.mozilla.org/es/docs/Web/JavaScript
          </p>

          {/* <p>Fundamentos</p> */}
          <ul>
            <li>
              <Link href="/javascript/introduccion">Introducción</Link>
            </li>
            <li>
              <Link href="/javascript/comentarios">Comentarios</Link>
            </li>
            <li>
              <Link href="/javascript/declaracion">Declaración</Link>
            </li>
            <li>
              <Link href="/javascript/asignacion">Asignación</Link>
            </li>
            <li>
              <Link href="/javascript/funciones">Condicionales</Link>
            </li>
            <li>
              <Link href="/javascript/funciones">Función</Link>
            </li>
            <li>
              <Link href="/javascript/ciclos">Ciclos</Link>
            </li>
            <li>
              <Link href="/javascript/clases">Clase</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
