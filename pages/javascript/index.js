import Head from 'next/head'
import Link from 'next/link'
import { defaultPath, lessons } from 'src/courses/javascript'

export default function Page() {
  return (
    <div className="container">
      <Head>
        <title>Aprendiendo JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/">Volver al inicio</Link>
        <h1>Bienvenido a aprender JavaScript</h1>

        <div className="container">
          <p>
            Este tutorial, tiene como objetivo enseñar de una forma sencilla y resumida lo que es
            JavaScript y como utilizarlo, si deseas profundizar más en el lenguaje, puedes aprender
            desde su url oficial, https://developer.mozilla.org/es/docs/Web/JavaScript
          </p>

          {/* <p>Fundamentos</p> */}
          <ul>
            {Object.values(lessons).map((lesson, index) => (
              <li key={index}>
                <Link href={defaultPath + lesson.path}>{lesson.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
