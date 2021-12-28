import Editor from 'src/components/Code/Editor'

export default function Page() {
  const exercises = [
    {
      title: '1) Escribe un comentario utilizando //',
      inputs: ['//Soy un comentario en una línea'],
      evaluate: value => {
        if (value.includes('//')) {
          return alert('Muy bien, aprobado')
        }
        return alert('Ups, aún no lo consigues, vamos que puedes!')
      },
      passed: false
    },
    {
      title: '2) En el editor de código escribamos comentarios utilizando /* */',
      inputs: [
        `/*
      Soy un comentarion en bloque
      */`
      ],
      evaluate: value => {
        if (value.includes('/*') && value.includes('*/')) {
          return alert('Muy bien, aprobado')
        }
        return alert('Ups, aún no lo consigues, vamos que puedes!')
      },
      passed: false
    }
  ]

  return (
    <div>
      {exercises.map(exercise => (
        <>
          <h3>{exercise.title}</h3>
          Ejemplo
          {exercise.inputs.map(input => (
            <p>{input}</p>
          ))}
          <Editor
            height="100px"
            run={false}
            preview={false}
            handleResponse={value => exercise.evaluate(value)}
          />
        </>
      ))}
    </div>
  )
}

Page.layout = 'Course'
Page.lesson = 'declaracion'
Page.page = 'Ejercicios'
