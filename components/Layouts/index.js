import Default from './Default'
import Course from './Course'

export default function Layouts(props) {
  const { layout = 'Default' } = props

  const layouts = {
    Default,
    Course
  }

  const Component = layouts[layout]

  return <Component {...props} />
}
