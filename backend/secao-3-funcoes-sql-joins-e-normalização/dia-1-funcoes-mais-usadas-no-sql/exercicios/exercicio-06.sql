-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
USE hr;

SELECT job_id, COUNT(*) AS 'total'
FROM employees
WHERE job_id = 'it_prog';
