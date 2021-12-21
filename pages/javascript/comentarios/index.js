import Head from 'next/head'
import { CopyBlock } from 'react-code-blocks'
import Link from 'next/link'
import example01 from '../../../components/examples/comments/1'

const title = 'Comentarios'

export default function Comments() {
  return (
    <div className="container">
      <Head>
        <title>JavaScript - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <Link href="/javascript">JavaScript</Link> > {title}
        </h1>
        <p>Los comentarios, se pueden utilizar para explicar el código y hacerlo más legible.</p>
        <p>También se pueden utilizar para evitar la ejecución de una parte del código.</p>

        <hr />
        <p>¿Cómo escribir comentarios?</p>
        <p>Para comentar una línea, podemos utilizar //</p>
        <p>Para comentar un bloque, podemos utilizar /* */</p>
        <p>
          TIP: Usa comentarios para ayudar a reconocer la traza de un código, si es que este tiende
          a ser muy complejo.
        </p>
        <hr />
        <div>
          Ejemplo:
          <CopyBlock
            text={example01}
            theme="dracula"
            language="javascript"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <hr />

        <div>
          Buenas prácticas:
          <p>
            A continuación podrás encontrar un listado de buenas prácticas al momento de utilizar
            comentarios
          </p>
          <ul>
            <li>1) Comentario != Documentar</li>
            <li>2) Los comentarios deben ser útiles</li>
            <li>3) Piensa si un comentario es necesario antes de añadirlo.</li>
            <li>4) Evita comentarios dentro de tu algoritmo, a menos que sea necesario.</li>
            <li>5) Piensa que los comentarios también hay que mantenerlos.</li>
            <li>6) Ten cuidado con los comentarios engañosos.</li>
            <li>7) Sigue siempre un mismo estilo y compartelo con el resto.</li>
            <li>8) No dejes los comentarios para el final.</li>
            <li>9) Es mejor ser educado.</li>
            <li>
              10) Para documentar el código mediante comentarios, existe una convención llamada
              JSDoc, adoptada por la comunidad.
            </li>
            <li>
              11) Un algoritmo, no necesitará ser comentado si se explica por sí solo. (esto se
              logra utilizando nombres descriptivos y expresivos en tu algoritmo)
            </li>
          </ul>
        </div>

        <hr />

        <div>
          Ejercicio:
          <p>En el editor de código escribamos comentarios utilizando // y /* */</p>
        </div>
        <hr />

        <div>
          Referencias:
          <ul>
            <li>https://developer.mozilla.org/es/docs/Web/CSS/Comments</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
