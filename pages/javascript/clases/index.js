import Head from 'next/head'
import { CopyBlock } from 'react-code-blocks'
import Link from 'next/link'
import example01 from '../../../components/examples/class/01'

export default function Clases() {
  return (
    <div className="container">
      <Head>
        <title>JavaScript - Clases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <Link href="/javascript">JavaScript</Link> > Clase
        </h1>

        <div>
          Ejemplos:
          <CopyBlock
            text={example01}
            theme="dracula"
            language="javascript"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          Referencias:
          <ul>
            <li>
              https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS
            </li>
            <li>https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
