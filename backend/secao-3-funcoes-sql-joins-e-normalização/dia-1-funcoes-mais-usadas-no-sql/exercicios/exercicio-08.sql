-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
-- SELECIONA pra mim job_id, SOMA(o salario) tras essas informações da tabela employees
-- AGRUPA POR job_id
-- Exiba somente os jobs TENDO  job_id = especifico.

SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
;