import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="content">
      <Head>
        <title>JavaScript - Declaración</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>...</main>
    </div>
  )
}

Page.layout = 'Course'
Page.title = 'Declaración'
Page.subTitle = 'Concepto'
