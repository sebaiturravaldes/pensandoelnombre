import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const SCRIPT_URL = 'https://static.codepen.io/assets/embed/ei.js' // new embed
const LOAD_STATE = {
  booting: '__booting__',
  error: '__error__',
  loading: '__loading__',
  loaded: '__loaded__'
}

const ReactCodepen = props => {
  const [loadState, setLoadState] = useState(LOAD_STATE.booting)
  const [error, setError] = useState()
  const _isMounted = useRef(false)

  const loadScript = () => {
    // load the codepen embed script
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = 1
    script.onload = () => {
      // do not do anything if the component is already unmounted.
      if (!_isMounted.current) return
      setLoadState(LOAD_STATE.loaded)
    }
    script.onerror = () => {
      if (!_isMounted.current) return
      setLoadState(LOAD_STATE.error)
      setError('Failed to load the pen')
    }

    setLoadState(LOAD_STATE.loading)
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (_isMounted.current === false) _isMounted.current = true

    loadScript()

    return () => (_isMounted.current = false)
  }, [])

  const showLoader = loadState === LOAD_STATE.loading && props.loader !== undefined

  return (
    <React.Fragment>
      {showLoader &&
        React.createElement(props.loader, {
          isLoading: loadState === LOAD_STATE.loading,
          error
        })}
      <div
        data-prefill
        data-height={props.heoght}
        data-preview={props.preview}
        data-default-tab={props.defaultTab}
        data-editable={props.editable}
        data-theme-id={props.themeId}
        data-title={props.title}
        className="codepen">
        <pre data-lang="js">{props.code}</pre>
      </div>
    </React.Fragment>
  )
}

ReactCodepen.defaultProps = {
  defaultTab: 'css,result',
  height: 300,
  preview: true,
  editable: true,
  themeId: 'dark'
}

ReactCodepen.propTypes = {
  defaultTab: PropTypes.string,
  height: PropTypes.number,
  loader: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  preview: PropTypes.bool,
  editable: PropTypes.bool,
  title: PropTypes.string,
  themeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ReactCodepen
