export default function Loading(props) {
  if (props.error) {
    return <div>Error</div>
  }
  return <div>Cargando...</div>
}
