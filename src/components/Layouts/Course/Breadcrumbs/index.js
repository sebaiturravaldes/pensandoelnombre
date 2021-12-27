import Link from 'next/link'

export default function Breadcrumbs(props) {
  const { title, subTitle } = props

  return (
    <h1 className="title">
      <Link href="/javascript">JavaScript</Link> ~ {title} ~ {subTitle}
    </h1>
  )
}
