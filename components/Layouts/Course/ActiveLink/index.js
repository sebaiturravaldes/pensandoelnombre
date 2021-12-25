import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const isActive = router.asPath === href

  const style = {
    color: isActive ? 'red' : 'black'
  }

  const text = isActive ? `- ${children}` : children

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {text}
    </a>
  )
}

export default ActiveLink
