// 6.  Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos,
// e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
let livroDaJulia = leitor.livrosFavoritos[0].titulo;

console.log(
  "O livro favorito de " +
    leitor.nome +
    leitor.sobrenome +
    "se chama '" +
    livroDaJulia +
    "'"
);

// 7. Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos[1] = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};

// console.log(leitor);

// 8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(
  "'" + leitor.nome + " tem " + leitor.livrosFavoritos.length + " favoritos '"
);
