import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'

export default function Course(props) {
  const { title, children } = props

  return (
    <div className="content">
      <div className="sidebar">
        <Link href="/javascript/comentarios">Concepto</Link>
        <Link href="/javascript/comentarios/ejemplo">Ejemplo</Link>
        <Link href="/javascript/comentarios/ejercicios">Ejercicios</Link>
        <Link href="/javascript/comentarios/buenas-practicas">Buenas prácticas</Link>
        <Link href="/javascript/comentarios/referencias">Referencias</Link>
      </div>

      <main>
        <Breadcrumbs title={title} />
        {children}
      </main>
    </div>
  )
}
