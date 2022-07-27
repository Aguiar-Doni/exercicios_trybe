//1.Construa um algortimo que calcule o fatorial de 10;
// Fatorial é um numero multiplicado pelo antecessor dele ate um antes de 0, ex ; 4x3x2x1;

//Pensando nisso faz sentido pra mim criar um laço for que vai ser percorrido de tras pra frente começando da posição qual eu queri fazer o fatorial
// se eu quiser o fatorial 4 então ele deve começar a percorrer do 4, constinuar percorrendo enquanato meu index foi menor que 0, e decrementar 1
// Faz sentido pra mim criar uma variavel que vai armazenar o valor do fatorial
// Feito isso devo incrementar a variavel o valor do meu index multiplicado;

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}
console.log(fatorial);
