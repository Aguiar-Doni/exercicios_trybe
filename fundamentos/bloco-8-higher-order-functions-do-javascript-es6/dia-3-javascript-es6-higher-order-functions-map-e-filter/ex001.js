const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

/* const formatedBookNames = () => {
  return books.map( (book) => {
  return `${book.name} - ${book.genre} - ${book.author.name}`
})
}
console.log(formatedBookNames()); */

//refatorando 


const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames());

/* 2 - Construa um array de objetos a partir do array de livros. 
Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro,
e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. */

/* const nameAndAge = () => {
  return books.map( (book) =>({
  age:book.releaseYear - book.author.birthYear,
  author: book.author.name,
}))
  .sort( (object1, object2) => {
  object1.age - object2.age;
})
}
console.log(nameAndAge()); */

//refatorando

const nameAndAge = () => books.map((book) =>({age:book.releaseYear - book.author.birthYear, author: book.author.name,}))
.sort((object1, object2) => object1.age - object2.age)

console.log(nameAndAge());

/* 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. */

/* const fantasyOrScienceFiction = () => {
  return books.filter( (book) => {
  return book.genre === 'Ficção Científica' || book.genre === 'Fantasia';
})
}
console.log(fantasyOrScienceFiction()); */

//refatorando

const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')

console.log(fantasyOrScienceFiction());

/* 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. 
Esse array deve ser ordenado do livro mais velho ao mais novo. */

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear,
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/* const oldBooksOrdered = () => {
 const currentYear = new Date().getFullYear(); //currentYear vai receber a data atual 
 return books.filter((book) => (
 book.releaseYear < currentYear - 60 // todos que forem menor que a data atual - 60, tem mais que 60 anos
))
 .sort((book1, book2) => {
  book1.releaseYear -book2.releaseYear
})
}
console.log(oldBooksOrdered()); */

//refatorando 

const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (book.releaseYear < currentYear - 60)).sort((book1, book2) => book1.releaseYear -book2.releaseYear)
 }
 console.log(oldBooksOrdered());
 
/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

/* const fantasyOrScienceFictionAuthors = () => {
  const genere =  ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => genere.includes(book.genre))
  .map((book) => book.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors()); */

// refatorando 

const fantasyOrScienceFictionAuthors = () => books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort();

console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

/* const oldBooks = () => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => {
  return book.releaseYear < currentYear - 60
})
  .map((book) => {
    return book.name
})
}
console.log(oldBooks()); */

//refatorando 

const oldBooks = () => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => book.releaseYear < currentYear - 60).map((book) => book.name);
}
console.log(oldBooks());

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

/* const authorWith3DotsOnName = () => {
  return books.find((book) => {
  return book.author.name.split(' ').filter((word) =>{
  return word.endsWith('.')
}).length === 3
}).name
}
console.log(authorWith3DotsOnName()); */

//refatorando 

const authorWith3DotsOnName = () => books.find((book) => book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name

console.log(authorWith3DotsOnName());