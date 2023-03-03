-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
USE hr;
-- Informações a serem exibidas SELECIONAR job_id, MEDIA(salario) DE employees
SELECT job_id, AVG(salary) AS 'average_salary' FROM employees
-- Condição - ONDE job_id  < seja diferente de > 'it_prog'
WHERE job_id <> 'it_prog'
-- AGRUPA POR job_id
GROUP BY job_id
-- ORDENA POR average_salary de forma DECRESCENTE
ORDER BY average_salary DESC;
