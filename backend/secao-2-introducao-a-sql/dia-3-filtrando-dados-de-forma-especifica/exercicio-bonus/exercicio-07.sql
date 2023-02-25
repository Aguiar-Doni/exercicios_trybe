-- 7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A .
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%';
