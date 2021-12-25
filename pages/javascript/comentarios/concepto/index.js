import Link from 'next/link'

const title = 'Comentarios'

export default function Concept() {
  return (
    <div>
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
        TIP: Usa comentarios para ayudar a reconocer la traza de un código, si es que este tiende a
        ser muy complejo.
      </p>
    </div>
  )
}
