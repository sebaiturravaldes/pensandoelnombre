import Head from 'next/head'

function Page() {
  return (
    <div className="content">
      <Head>
        <title>JavaScript - Comentarios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>Los comentarios, se pueden utilizar para explicar el código y hacerlo más legible.</p>
          <p>También se pueden utilizar para evitar la ejecución de una parte del código.</p>

          <hr />
          <p>¿Cómo escribir comentarios?</p>
          <p>Para comentar una línea, podemos utilizar //</p>
          <p>Para comentar un bloque, podemos utilizar /* */</p>
          <p>
            TIP: Usa comentarios para ayudar a reconocer la traza de un código, si es que este
            tiende a ser muy complejo.
          </p>
        </div>
      </main>
    </div>
  )
}

Page.layout = 'Course'
Page.title = 'Concepto'

export default Page
