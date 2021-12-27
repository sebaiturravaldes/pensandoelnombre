import ActiveLink from './ActiveLink'
import Head from 'next/head'
import Link from 'next/link'
import { defaultPath, title, lessons } from 'src/courses/javascript'

export default function Course(props) {
  const { lesson, page, children } = props

  const { name, path, pages } = lessons[lesson]

  return (
    <div className="content">
      <Head>
        <title>
          {title} - {name}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sidebar">
        {pages.map(page => (
          <ActiveLink href={`${defaultPath}${path}${page.path}`}>{page.name}</ActiveLink>
        ))}
      </div>

      <main>
        <h1 className="title">
          <Link href={defaultPath}>{title}</Link> ~ {name} ~ {page}
        </h1>
        {children}
      </main>
    </div>
  )
}
