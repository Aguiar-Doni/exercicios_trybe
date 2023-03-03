-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
-- Precisamos exibir o job_id pra conseguir visualizar melhor e soma do salario
-- goup by vai separar cada profissão
USE hr;
SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id; 