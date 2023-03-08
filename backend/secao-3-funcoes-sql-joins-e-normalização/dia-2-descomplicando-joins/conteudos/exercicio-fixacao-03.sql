-- 3 Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT -- oque o select faz ?
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id, -- oque é e de onde vem isso ?
    a.address -- oque é e de onde vem isso ?
FROM -- pra que serve o from ?
    sakila.customer AS c -- oque o AS faz ?
INNER JOIN -- qual a função do inner jooin ?
    sakila.address AS a ON c.address_id = a.address_id -- oque essa linha garante ?
ORDER BY c.first_name DESC -- oque faz o order by desc ?
LIMIT 100;

-- PRATIQUE FAZER COMENTARIOS SOBRE OQUE VOCÊ ENTENDEU DE CADA FUNÇÃO DESSE QUERY
