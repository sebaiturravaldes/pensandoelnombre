const phrases = [
  'Si una persona quiere aprender y te pregunta algo, explícaselo, en lugar de hacerla sentir tonta... por que hace tiempo tú tampoco lo sabías.', //linkedin
  'No hay seniors sin juniors.', //linkedin
  'Yo no tengo sueños, tengo metas, y seguiré a la siguiente.', //SUITS
  '¿Qué debes hacer cuando estas contra la pared?, ¡Romper la maldita pared!.', //SUITS
  'Nunca es tarde.',
  'Nos levantamos día tras día a cambiar el mundo, eso es lo que hacemos.'
]

export default function Motivational() {
  const randomNumber = Math.floor(Math.random() * phrases.length)

  return <i>"{phrases[randomNumber]}"</i>
}
