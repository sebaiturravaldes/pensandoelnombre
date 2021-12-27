import ActiveLink from './ActiveLink'
import Breadcrumbs from './Breadcrumbs'

export default function Course(props) {
  const {
    title,
    subTitle,
    basePath,
    concept,
    example,
    exercises,
    bestPractices,
    references,
    children
  } = props

  return (
    <div className="content">
      <div className="sidebar">
        {concept ? <ActiveLink href={`${basePath}`}>Concepto</ActiveLink> : null}
        {example ? <ActiveLink href={`${basePath}/ejemplo`}>Ejemplo</ActiveLink> : null}
        {exercises ? <ActiveLink href={`${basePath}/ejercicios`}>Ejercicios</ActiveLink> : null}
        {bestPractices ? (
          <ActiveLink href={`${basePath}/buenas-practicas`}>Buenas prácticas</ActiveLink>
        ) : null}
        {references ? <ActiveLink href={`${basePath}/referencias`}>Referencias</ActiveLink> : null}
      </div>

      <main>
        <Breadcrumbs title={title} subTitle={subTitle} />
        {children}
      </main>
    </div>
  )
}
