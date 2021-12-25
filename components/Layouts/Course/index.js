import ActiveLink from './ActiveLink'
import Breadcrumbs from './Breadcrumbs'

export default function Course(props) {
  const { title, children } = props

  return (
    <div className="content">
      <div className="sidebar">
        <ActiveLink href="/javascript/comentarios">Concepto</ActiveLink>
        <ActiveLink href="/javascript/comentarios/ejemplo">Ejemplo</ActiveLink>
        <ActiveLink href="/javascript/comentarios/ejercicios">Ejercicios</ActiveLink>
        <ActiveLink href="/javascript/comentarios/buenas-practicas">Buenas prácticas</ActiveLink>
        <ActiveLink href="/javascript/comentarios/referencias">Referencias</ActiveLink>
      </div>

      <main>
        <Breadcrumbs title={title} />
        {children}
      </main>
    </div>
  )
}
