import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const title = 'Comentarios'

export default function Comments() {
  const router = useRouter()
  console.log('router:', router)

  return (
    <div className="content">
      <Head>
        <title>JavaScript - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <sidebar>
        <Link href="/javascript/comentarios">Concepto</Link>
        <Link href="/javascript/comentarios/ejemplo">Ejemplo</Link>
        <Link href="/javascript/comentarios/ejercicios">Ejercicios</Link>
        <Link href="/javascript/comentarios/buenas-practicas">Buenas prácticas</Link>
        <Link href="/javascript/comentarios/referencias">Referencias</Link>
      </sidebar>

      <main></main>
    </div>
  )
}
