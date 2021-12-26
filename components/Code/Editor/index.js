import React, { useRef, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import styles from './Editor.module.css'
import PropTypes from 'prop-types'

function Editor(props) {
  const { preview, run, response, height } = props
  const [showResponse, setShowResponse] = useState(false)
  const editorRef = useRef(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  function showValue() {
    alert(editorRef.current.getValue())
  }

  return (
    <div>
      <div className={styles.editor}>
        <div className={styles.code}>
          <h4>Editor de código</h4>

          {run ? <button onClick={showValue}>Ejecutar</button> : null}

          <MonacoEditor
            height={height}
            defaultLanguage="javascript"
            onMount={handleEditorDidMount}
            options={{
              quickSuggestions: false,
              minimap: {
                enabled: false
              }
            }}
            defaultValue=""
          />
        </div>
        {preview ? (
          <div className={styles.preview}>
            <h4>Preview</h4>
          </div>
        ) : null}
      </div>
      {showResponse ? (
        <div>
          <h4>Respuesta</h4>

          <MonacoEditor
            height={height}
            defaultLanguage="javascript"
            options={{
              quickSuggestions: false,
              minimap: {
                enabled: false
              }
            }}
            defaultValue="//Soy un comentario"
          />
        </div>
      ) : null}

      <div className={styles.actions}>
        {showResponse ? (
          <button onClick={() => setShowResponse(false)}>Ocultar respuesta</button>
        ) : (
          <button onClick={() => setShowResponse(true)}>Mostrar respuesta</button>
        )}
        <button onClick={() => response(editorRef.current.getValue())}>Enviar respuesta</button>
      </div>
    </div>
  )
}

Editor.defaultProps = {
  preview: true,
  run: true,
  height: '400px'
}

Editor.propTypes = {
  height: PropTypes.string,
  preview: PropTypes.bool,
  run: PropTypes.bool,
  response: PropTypes.func
}

export default Editor
