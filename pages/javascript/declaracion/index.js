import Head from 'next/head'
import Link from 'next/link'
import example01 from '../../../components/examples/statements/1'
import { CopyBlock } from 'react-code-blocks'

export default function JavaScript() {
  return (
    <div className="container">
      <Head>
        <title>Aprendiendo JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <Link href="/javascript">JavaScript</Link> > Declaración
        </h1>
        <p>...</p>

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
              https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements#declaraciones
            </li>
            <li>
              https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaraciones
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
