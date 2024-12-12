export function costCalculator(amountNumber) {
  // const cantidadNumber = cantidad*1
  const commission = 3
  const commissionInterest = amountNumber * 0.01
  return amountNumber + commission + commissionInterest
}
