export function rubricExcellent(score) {
  score = parseInt(score)
  if(score >= 5) {
    return ('Pass')
  }
  else if(score >= 8){
    return 'Excellent'
  }
  else{
    return ('Fail')
  }
}