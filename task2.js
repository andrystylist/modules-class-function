// A Ed le gustaría poder introducir los nombres de tres de sus amigos.
// * Exporta una clase que tome 3 argumentos para construir un objeto con 3 propiedades.
//     * Las 3 propiedades en el constructor deberían llamarse `nombre1`, `nombre2`, y `nombre3`.

export class FriendNames {
    constructor(name1, name2, name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;
    }
  }
  const friends = new FriendNames('Andry', 'Carlos', 'Jose')
console.log(friends)