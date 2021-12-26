import Editor from '../../../../components/Code/Editor'

export default function Page() {
  const evaluate = value => {
    if (value.includes('//')) {
      return alert('Muy bien, aprobado')
    }
    return alert('Ups, aún no lo consigues, vamos que puedes!')
  }

  return (
    <div>
      <h3>1) Escribe un comentario utilizando // </h3>
      <Editor height="100px" run={false} preview={false} response={value => evaluate(value)} />
      <h3>2) En el editor de código escribamos comentarios utilizando /* */</h3>
    </div>
  )
}

Page.layout = 'Course'
Page.title = 'Ejercicios'
