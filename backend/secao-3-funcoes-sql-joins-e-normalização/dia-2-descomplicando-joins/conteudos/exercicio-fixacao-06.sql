-- 6 Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
USE sakila;
SELECT 
	sta.first_name 'nome',
    sta.last_name 'sobrenome',
    AVG(pay.amout) 'media de pagamento'
FROM staff AS sta
JOIN 
	payment AS pay ON sta.staff_id = pay.staff_id
WHERE YEAR(pay.payment_Date) = 2006
GROUP BY sta.staff_id;