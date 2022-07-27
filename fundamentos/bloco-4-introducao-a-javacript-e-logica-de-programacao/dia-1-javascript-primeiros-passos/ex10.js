//10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores,
//calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = -5;
const valorVenda = 300;
const imposto = (custo * 20) / 100;
const valorCustoTotal = custo + imposto;
const lucro = valorVenda - valorCustoTotal;
const lucroTotal = lucro * 1000;

//console.log(imposto);
//console.log(valorCustoTotal);
//console.log(lucro);

if (custo < 0 || valorVenda < 0) {
  console.log("algo deu errado");
} else {
  console.log(lucro);
}
