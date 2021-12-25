import { CopyBlock } from 'react-code-blocks'
import example01 from '../../../../components/examples/comments/1'

export default function Example() {
  return (
    <div>
      Ejemplo:
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
