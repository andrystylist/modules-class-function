// // A Ed le gustaría poder calcular la edad de sus amigos.
// * Exporta una clase que devuelva una cadena con el nombre y la edad de un amigo dado. Debería:
// * Tomar 4 argumentos - un **nombre**, un **año**, un **mes**, y un **día** - y construir un objeto con esas 4 propiedades.
// * Tener un método público llamado `returnAge()` que devuelva la siguiente cadena: `<nombre> es <edad> hoy!`
export class FriendAge {
  constructor(name, year, month, day) {
    this.name = name
    this.year = year
    this.month = month
    this.day = day
  }

  returnAge() {
    const today = new Date();
    const birthDate = new Date(this.year, this.month - 1, this.day);
    let age = today.getFullYear() - birthDate.getFullYear();

    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
      age--;
    }
    return `${this.name} is ${age} today!`;
  }
}

