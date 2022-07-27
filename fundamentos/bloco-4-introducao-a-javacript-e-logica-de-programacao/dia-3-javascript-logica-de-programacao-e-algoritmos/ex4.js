// 4.Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let maiorNumero = 0;

for (let index = 2; index <= 50; index += 1) {
  let ePrimo = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      //usando um laço for dentro do outro eu comparo cada numero e faço o % === 0
      ePrimo = false;
    }
  }
  if (ePrimo) {
    // ePrimo sendo true maiorNumero recebe o numero do meu indice e volta a fazer o laço ate chegar no maior numero que seja primo
    maiorNumero = index;
  }
}

console.log(maiorNumero);
