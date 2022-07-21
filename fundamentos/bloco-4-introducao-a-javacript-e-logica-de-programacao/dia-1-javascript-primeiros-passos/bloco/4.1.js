   //1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, 
   //definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 10;

    const adicao = a + b;
    const subtracao = a - b;
    const multiplicacao = a * b;
    const divisao = a / b;
    const modulo = a % b;

   //2.Faça um programa que retorne o maior de dois numeros.

const n1 = 2;
const n2= 3;
const n3 = 5;

   if (n1 > n2) {
    console.log(n1)
   } else {
    console.log(n2)
   }

   //3.Faça um programa que retorne o maior de três numeros.

   if (n1 > n2) {
    console.log(n1)
   } else if (n2>n2) {
    console.log(n2)
   } else {
    console.log(n3)
   }

   //4.Faça um programa que, dado um valor definido numa constante, retorne 'positive' se esse valor for positivo;
   //'negative' se esse valor fot negativo e 'zero' caso contrário.

   if (n1 > 0) {
    console.log ('positive')
   } else if (n1 < 0) {
    console.log('negative')
   } else {
    console.log('zero')
   }
   
   //5.Faça um programa que defina três constantes com valores de três ângulos internos de um triângulo.
   //retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for inválido
   // deve retornar uma menssagem de erro.

   const ang1 = 80
   const ang2 = 45
   const ang3 = -5

   if (ang1 + ang2 > ang3 && ang1 + ang3 > ang2 && ang2 + ang3 > ang1) {
    console.log('true') 

   } else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
        console.log('algo deu errado') 
        
   } else if (ang1 + ang2 + ang3 != 180) {
    console.log('false')
   }  
