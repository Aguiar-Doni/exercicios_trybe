//1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let elementH1 = document.createElement("h1");
elementH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementH1);

//2. Adicione a tag main com a classe main-content como filho da tag body;

let tagMain = document.createElement("main");
tagMain.className = "main-content";
document.body.appendChild(tagMain);

//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionTag = document.createElement("section");
sectionTag.className = "center-content";
tagMain.appendChild(sectionTag);

//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let myTagP = document.createElement("p");
myTagP.innerText = "De tudo que sei, só sei que nada sei";
sectionTag.appendChild(myTagP);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement("section");
sectionLeft.className = "left-content";
tagMain.append(sectionLeft);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRight = document.createElement("section");
sectionRight.className = "right-content";
tagMain.append(sectionRight);

// 7. Adicione uma imagem com src
// configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let sectionImg = document.createElement("img");
sectionImg.className = "small-image";
sectionImg.src = "https://picsum.photos/200";
sectionLeft.appendChild(sectionImg);

// 8 . Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ...
// como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaUl = document.createElement("ul");
sectionRight.appendChild(listaUl);
let arrayNumbers = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];
for (let index in arrayNumbers) {
  let elementLi = document.createElement("li");
  elementLi.innerHTML = arrayNumbers[index];
  listaUl.appendChild(elementLi);
}

// 9. Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (index = 1; index <= 3; index += 1) {
  let elementH3 = document.createElement("h3");
  elementH3.innerHTML = "qualquer coisa";
  tagMain.appendChild(elementH3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 1. Adicione a classe title na tag h1 criada;
document.querySelector("title").className = " title";

// 2. Adicione a classe description nas 3 tags h3 criadas;
let elementsH3 = document.getElementsByTagName("h3");
console.log("h3");
for (let index = 0; index < elementsH3.length; index += 1) {
  elementsH3[index].className = "description";
}

// 3.  Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;

let selectorLeft = document.getElementsByClassName("left-content")[0];
tagMain.removeChild(selectorLeft);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar,
//basta configurar o margin-right: auto da section;

let selectorRight = document.getElementsByClassName("rigth-content")[0];
sectionRight.style.margin = "auto";

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let sectionTagMod = document.getElementsByClassName("center-content")[0];
sectionTagMod.parentNode.style.backgroundColor = "green";

// 6.  Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let remove = document.getElementsByTagName("ul")[0];
remove.lastChild.remove();
remove.lastChild.remove();
