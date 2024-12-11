export function costCalculator(cantidadNumber) {
  // const cantidadNumber = cantidad*1
  const comision = 3
  const comisionInteres = cantidadNumber * 0.01
  return cantidadNumber + comision + comisionInteres
}
