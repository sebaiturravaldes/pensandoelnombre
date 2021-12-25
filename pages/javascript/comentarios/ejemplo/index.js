import { CopyBlock } from 'react-code-blocks'
import example01 from '../../../../components/examples/comments/1'

export default function Page() {
  return (
    <div>
      <CopyBlock
        text={example01}
        theme="dracula"
        language="javascript"
        showLineNumbers={true}
        codeBlock
      />
    </div>
  )
}

Page.layout = 'Course'
Page.title = 'Ejemplo'
