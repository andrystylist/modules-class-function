export function rubricExcellent(score) {
  score = parseInt(score)
  if(score > 8) {
    return 'Excellent'
  }
  else if(score >= 5){
    return 'Pass'
  }
  return 'Fail' 
}