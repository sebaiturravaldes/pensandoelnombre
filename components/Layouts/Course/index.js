import Link from 'next/link'

export default function Course({ children }) {
  return (
    <div className="content">
      <div className="sidebar">
        <Link href="/javascript/comentarios">Concepto</Link>
        <Link href="/javascript/comentarios/ejemplo">Ejemplo</Link>
        <Link href="/javascript/comentarios/ejercicios">Ejercicios</Link>
        <Link href="/javascript/comentarios/buenas-practicas">Buenas prácticas</Link>
        <Link href="/javascript/comentarios/referencias">Referencias</Link>
      </div>

      <main>{children}</main>
    </div>
  )
}
