const links = [
  'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements#declaraciones',
  'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaraciones'
]

export default function Page() {
  return (
    <div>
      Referencias:
      <ul>
        {links.map(link => (
          <li>
            <a href={link} target="_blank">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Page.layout = 'Course'
Page.lesson = 'declaracion'
Page.page = 'Referencias'
