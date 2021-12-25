import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Concept from './concepto'

const title = 'Comentarios'

export default function Page() {
  const router = useRouter()
  console.log('router:', router)

  return (
    <div className="content">
      <Head>
        <title>JavaScript - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Concept />
      </main>
    </div>
  )
}

Page.layout = 'Course'
