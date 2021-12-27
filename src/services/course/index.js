export default function course({
  Page, // React Component
  ...props
}) {
  if (props.hasOwnProperty('name')) {
    throw new Error("Can't use the `name` property.")
  }

  const result = Page

  for (const property in props) {
    result[property] = props[property]
  }

  return result
}
