-- 5. Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
USE sakila;
SELECT
    c.first_name 'nome',
    c.last_name 'sobrenome',
    COUNT(r.rental_id) AS `quantidade de filmes alugados`
FROM
    customer AS c
INNER JOIN
    rental AS r 
ON 
    r.customer_id = c.customer_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    c.first_name DESC,
    c.last_name DESC;