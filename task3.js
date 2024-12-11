// 4. Ed quisiera una manera de calcular una edad a partir de una fecha de nacimiento dada.
//     * Exportar una función que tome 3 argumentos - un **año**, un **mes** y un **día** - y devuelva una edad exacta.
//         * Por ejemplo, `ageCalculator(2000, 12, 25)` debería devolver la edad de alguien nacido el día de Navidad de 2000.

export function ageCalculator(year, month, day) { 
    const today = new Date();
    const birthDate = new Date(year, month - 1, day)
  
    let age = today.getFullYear() - birthDate.getFullYear();
      if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  