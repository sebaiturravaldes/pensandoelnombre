import Code from '../../../../components/Code'
import example01 from '../../../../components/examples/comments/1'

export default function Page() {
  return (
    <div>
      {/* <Code type="codepen" hash="NWawXPg" /> */}
      <Code type="codepen2" editable={true} code={example01} />
      Source: https://codepen.io/siturra/pen/NWawXPg
    </div>
  )
}

Page.layout = 'Course'
Page.title = 'Ejemplo'
