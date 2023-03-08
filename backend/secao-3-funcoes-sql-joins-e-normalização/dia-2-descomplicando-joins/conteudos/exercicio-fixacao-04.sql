-- 4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
USE sakila;
SELECT 
	c.first_name 'nome', 
    c.address_id,
    a.address 'endereço',
    a.district 'distrito'
FROM
	customer AS c
JOIN 
	address AS a ON c.address_id = a.address_id
WHERE 
	a.district = 'California' 
     AND c.first_name LIKE '%rene%';