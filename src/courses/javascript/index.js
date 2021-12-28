export const title = 'Javascript'

export const defaultPath = '/javascript'

export const layout = 'Course'

export const lessons = {
  introduccion: { name: 'Introducción', path: '/introduccion', pages: [] },
  comentarios: {
    name: 'Comentarios',
    path: '/comentarios',
    pages: [
      {
        name: 'Concepto',
        path: ''
      },
      {
        name: 'Ejemplo',
        path: '/ejemplo'
      },
      {
        name: 'Ejercicios',
        path: '/ejercicios'
      },
      /*
      {
        name: 'Buenas Prácticas',
        path: '/buenas-practicas'
      },
      */
      {
        name: 'Referencias',
        path: '/referencias'
      }
    ]
  },
  declaracion: {
    name: 'Declaración y Asignación',
    path: '/declaracion-y-asignacion',
    pages: [
      {
        name: 'Concepto',
        path: ''
      },
      /*
      {
        name: 'Ejemplo',
        path: '/ejemplo'
      },*/
      {
        name: 'Ejercicios',
        path: '/ejercicios'
      },
      /*
      {
        name: 'Buenas Prácticas',
        path: '/buenas-practicas'
      },
      */
      {
        name: 'Referencias',
        path: '/referencias'
      }
    ]
  }
  //{ name: 'Asignación', path: '/asignacion' },
  //{ name: 'Condicionales', path: '/condicionales' },
  //{ name: 'Función', path: '/funciones' },
  //{ name: 'Ciclos', path: '/ciclos' },
  //{ name: 'Clases', path: '/clases' }
}
