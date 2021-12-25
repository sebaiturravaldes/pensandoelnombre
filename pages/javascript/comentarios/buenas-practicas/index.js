export default function Page() {
  return (
    <div>
      <p>
        A continuación podrás encontrar un listado de buenas prácticas al momento de utilizar
        comentarios
      </p>
      <ul>
        <li>1) Comentario != Documentar</li>
        <li>2) Los comentarios deben ser útiles</li>
        <li>3) Piensa si un comentario es necesario antes de añadirlo.</li>
        <li>4) Evita comentarios dentro de tu algoritmo, a menos que sea necesario.</li>
        <li>5) Piensa que los comentarios también hay que mantenerlos.</li>
        <li>6) Ten cuidado con los comentarios engañosos.</li>
        <li>7) Sigue siempre un mismo estilo y compartelo con el resto.</li>
        <li>8) No dejes los comentarios para el final.</li>
        <li>9) Es mejor ser educado.</li>
        <li>
          10) Para documentar el código mediante comentarios, existe una convención llamada JSDoc,
          adoptada por la comunidad.
        </li>
        <li>
          11) Un algoritmo, no necesitará ser comentado si se explica por sí solo. (esto se logra
          utilizando nombres descriptivos y expresivos en tu algoritmo)
        </li>
      </ul>
    </div>
  )
}

Page.layout = 'Course'
Page.title = 'Buenas prácticas'
