import Code from 'src/components/Code'
import example01 from 'src/components/examples/comments/1'

export default function Page() {
  return (
    <div>
      <Code type="monaco" language="javascript" height="150px" code={example01} />
    </div>
  )
}

Page.layout = 'Course'
Page.lesson = 'comentarios'
Page.page = 'Ejemplo'
