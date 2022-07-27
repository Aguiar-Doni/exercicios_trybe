let descontoInss;
let salarioBase;
let salarioIR;
let iR;

//DEDUZINDO INSS

if (salarioBruto <= 1556.94) {
  descontoInss = (salarioBruto / 100) * 8;
  salarioBase = salarioBruto - descontoInss;
} else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94) {
  descontoInss = (salarioBruto / 100) * 9;
  salarioBase = salarioBruto - descontoInss;
} else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92) {
  descontoInss = (salarioBruto / 100) * 11;
  salarioBase = salarioBruto - descontoInss;
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88;
}

// DEDUZINDO IMPOSTO DE RENDA

if (salarioBase < 1903.98) {
  console.log("insento de imposto de renda");
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  iR = (salarioBase / 100) * 7.5 - 142.8;
  salarioIR = salarioBase - iR;
  console.log("seu salario deduzido do imposto de renda é R$:", salarioIR);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  iR = (salarioBase / 100) * 15 - 354.8;
  salarioIR = salarioBase - iR;
  console.log("seu salario deduzido do imposto de renda é R$:", salarioIR);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  iR = (salarioBase / 100) * 22.5 - 636.13;
  salarioIR = salarioBase - iR;
  console.log("seu salario deduzido do imposto de renda é R$:", salarioIR);
} else if (salarioBase > 4664.68) {
  iR = (salarioBase / 100) * 27.5 - 869.36;
  salarioIR = salarioBase - iR;
  console.log("seu salario deduzido do imposto de renda é R$:", salarioIR);
}
