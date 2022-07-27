// Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementsByTagName("p")[1].innerText =
  "wiris wiris baraquiris as vezes as vezes";

// Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.getElementsByClassName("main-content")[0].style.backgroundColor =
  "green";

// Crie e execute uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByClassName("center-content")[0].style.backgroundColor =
  "white";

// Crie e execute uma função que corrija o texto da tag <h1>.
getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";

// Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
document.getElementsByTagName("p")[0].innerText = "TEXTO PADRÃO DO NOSSO SITE";

// Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
document.querySelectorAll("p");
