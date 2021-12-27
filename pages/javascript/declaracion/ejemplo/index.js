import { CopyBlock } from 'react-code-blocks'
import example01 from 'src/components/examples/statements/1'

export default function Page() {
  return (
    <div>
      Ejemplos:
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
