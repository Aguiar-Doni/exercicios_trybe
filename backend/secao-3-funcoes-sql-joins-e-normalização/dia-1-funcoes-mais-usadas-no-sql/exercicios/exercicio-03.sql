-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
-- Aqui no SELECT queremos selecionar job_id e a media salarial, e nomear a coluna usando AS

SELECT job_id, AVG(salary) AS 'average_salary'
FROM employees 
-- essa informações vem dessa tabela logo depois podemos
-- fazer um group by para agrupar cada job_id para obter a media de cada um
-- sem o GROUP BY a resposta seria a media total dos salarios
-- e pelo que eu entendi o SELECT do job_id acabaria sendo o do valor mais alto
GROUP BY job_id
ORDER BY average_salary DESC
;