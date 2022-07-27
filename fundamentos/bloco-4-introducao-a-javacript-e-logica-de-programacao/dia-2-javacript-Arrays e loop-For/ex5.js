//5.Descubra qual maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 165];
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  let numero = numbers[index];
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero);
