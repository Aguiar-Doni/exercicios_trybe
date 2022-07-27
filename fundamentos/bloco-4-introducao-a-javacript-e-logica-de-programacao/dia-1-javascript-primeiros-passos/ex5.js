//5.Faça um programa que defina três constantes com valores de três ângulos internos de um triângulo.
//retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for inválido
// deve retornar uma menssagem de erro.

const ang1 = 80;
const ang2 = 45;
const ang3 = 5;

if (ang1 + ang2 > ang3 && ang1 + ang3 > ang2 && ang2 + ang3 > ang1) {
  console.log("true");
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("algo deu errado");
} else if (ang1 + ang2 + ang3 != 180) {
  console.log("false");
}
