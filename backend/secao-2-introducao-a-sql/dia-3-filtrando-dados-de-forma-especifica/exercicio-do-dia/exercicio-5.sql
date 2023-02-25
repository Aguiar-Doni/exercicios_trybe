-- 5. Agora, faça uma consulta para exibir o número de empresas
-- (supplier) que contém a letra F no código.
USE store;
SELECT COUNT(*) FROM suppliers
WHERE id LIKE '%F%';