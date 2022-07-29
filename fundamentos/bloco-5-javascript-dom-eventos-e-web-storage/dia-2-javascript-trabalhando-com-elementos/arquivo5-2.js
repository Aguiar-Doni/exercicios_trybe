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

let sectionTag2 = document.createElement("section");
sectionTag2.className = "left-content";
tagMain.append(sectionTag2);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionTag3 = document.createElement("section");
sectionTag3.className = "right-content";
tagMain.append(sectionTag3);

// 7. Adicione uma imagem com src
// configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let sectionImg = document.createElement("img");
sectionImg.className = "small-image";
sectionImg.src = "https://picsum.photos/200";
sectionTag2.appendChild(sectionImg);

// 8 . Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ...
// como valores da lista. Essa lista deve ser filha do section criado no passo 6;
