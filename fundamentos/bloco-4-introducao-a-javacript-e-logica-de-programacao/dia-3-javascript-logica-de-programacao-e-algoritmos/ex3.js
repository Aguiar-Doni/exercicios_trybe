// Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
//Considere o número de caracteres de cada palavra.

//1.Criar uma variavel com um array começando da posição [0]
//2.Criar um loop for que percorra todo o tamanho do meu array, começando da posição [1].
//2.Criar uma estrutura condicional que retorne a maior palavra
//3.Na comparação como se tratam se strings dentro de um array, uzar o .lenght para comparar o tamanho da string

let array = ["java", "javascript", "python", "html", "css"];

let maiorPalavra = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}
console.log(maiorPalavra);

let menorPalavra = array[0];

for (index = 1; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log(menorPalavra);
