import Link from 'next/link'

export default function Breadcrumbs(props) {
  const { title } = props

  return (
    <h1 className="title">
      <Link href="/javascript">JavaScript</Link> ~ {title}
    </h1>
  )
}
