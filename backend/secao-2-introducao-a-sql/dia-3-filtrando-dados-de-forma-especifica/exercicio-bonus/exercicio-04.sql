-- 4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
USE Scientists;
SELECT Scientist FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');