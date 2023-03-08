-- 2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
USE sakila;
-- antes veerificar as tabelas que serão usadas
SELECT * FROM staff; -- se possivel deixar aberta em outro ambiente caso precise consultar as colunas
SELECT * FROM address; -- identifique qual coluna é referenciada dentro da tabela(foreign key)

-- passo 1 - defina o que vai ser exibido
-- nome(first_name), sobrenome(last_name) e endereço(addrees)
SELECT first_name 'nome', last_name 'sobrenome', address 'endereço' 
FROM 
	staff AS sta -- diga de qual tabela vc quer as informações base e de um apelido AS
INNER JOIN -- traga com o INNER JOIN qual tabela que se relaciona com a tabela base e também de um apelido ps: usando apenas a sintaxe JOIN já funciona
	address AS ad 
ON -- abstraia o ON como 'onde', então estou fazendo o join de uma tabela 'onde' existe essa referencia
	sta.address_id = ad.address_id;
    
-- Se quiser pode dar nome as colunas para entender melhor seu join

