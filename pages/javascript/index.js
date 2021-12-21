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
        <h1 className="title">Bienvenido a aprender JavaScript</h1>
        <ul>
          <li>
            <Link href="/javascript/declaracion">Declaración</Link>
          </li>
          <li>
            <Link href="/javascript/asignacion">Asignación</Link>
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
      </main>
    </div>
  )
}
