""" 
Imagine que você esteja trabalhando em um e-commerce, 
e foi lhe dado a demanda de analisar um array de números inteiros 
que representam os produtos dessa empresa. 
Verifique quantos produtos formam boas combinações, ou seja, 
quando um produto é igual ao outro e seu índice é maior que o anterior. 
Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

"""

def combinations(products):
# criar uma variavel para conter o maximo de boas combinações
    total_good_combinations = 0
    products_len = len(products)
# usar dois loops aninhados para percorrer todas as combinações possiveis
    for i in range(products_len):
        for j in range(i + 1, products_len):
            # se o produto é igual a algum subsequente e tambem se o indice do produto atual
            # é menor que o do produto subsequente temos uma boa combinação
            if products[i] == products[j] and i < j:
                total_good_combinations += 1
    return total_good_combinations



# Exemplo 1:
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.
produtos = [1, 3, 1, 1, 2, 3]

# Exemplo 2:
# resultado = 1
# Os índices (0, 1) formam a única combinação.
produtos2 = [1, 1, 2, 3]
print(combinations(produtos2))