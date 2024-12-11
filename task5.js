// Un profesor quiere crear una rúbrica para calificar a los alumnos basándose en una puntuación de 0 a 11.
//     * Un alumno aprueba si tiene una puntuación mayor o igual a 5. Exporte una función que devuelva «Aprobado» o «Suspenso».

export function rubricPassFail(score) {
  score = parseInt(score)
  if(score >= 5) {
    return 'Pass'
  }
  return 'Fail'
  
}