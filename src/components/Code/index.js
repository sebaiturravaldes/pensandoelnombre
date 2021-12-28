import { CopyBlock } from 'react-code-blocks'
import Codepen from 'react-codepen-embed' // https://www.npmjs.com/package/react-codepen-embed
import Loading from './Loading'
import Codepen2 from './Codepen2'
import Codepen3 from './Codepen3'
import MonacoEditor from '@monaco-editor/react'
import styles from './Code.module.css'
import PropTypes from 'prop-types'

export default function Code(props) {
  const { type = 'codepen', height, language, code } = props

  if (type === 'copyblock') {
    return <CopyBlock language={language} {...props} />
  } else if (type === 'monaco') {
    return (
      <div className={styles.monaco}>
        <MonacoEditor
          height={height}
          defaultLanguage={language}
          options={{
            quickSuggestions: false,
            minimap: {
              enabled: false
            }
          }}
          defaultValue={code}
        />
      </div>
    )
  } else if (type === 'codepen') {
    return <Codepen user="siturra" loader={Loading} defaultTab={'js'} preview={false} {...props} />
  } else if (type === 'codepen2') {
    return (
      <Codepen2
        user="siturra"
        loader={Loading}
        defaultTab={'js'}
        preview={false}
        editable={true}
        {...props}
      />
    )
  } else if (type === 'codepen3') {
    return <Codepen3 user="siturra" loader={Loading} defaultTab={'js'} preview={false} {...props} />
  }
  return props.children
}

Code.defaultProps = {
  height: '150px'
}

Code.propTypes = {
  height: PropTypes.string,
  language: PropTypes.string
}
