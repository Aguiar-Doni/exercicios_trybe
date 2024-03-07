""" 
Em um jogo de baralho, as cartas estão representadas por um array numérico. 
Para iniciar o jogo, devemos embaralhar as cartas. 
Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. 
Por exemplo:
"""

def shuffle(cards):
    # criando um array vazio para armazenar as cartas embaralhadas
    # e dividindo a porção de cartas por 2
    shuffled_cards = []
    split_index = len(cards) // 2 # calcula o indice da divisão
    # precisamos intervalar para que : 
    # a primeira carta da primeira parte seja seguida pela primeira carta da segunda parte 
    # [2, 6] [4, 5] - > [2, 4]  e assim por diante

    part_one = cards[:split_index] # do incio pro fim 
    part_two = cards[split_index:] # do fim pro incio

    # embaralhar as cartas
    # http://devfuria.com.br/python/built-in-zip/
    # o método zip() retorna pares de tuplas da forma que precisamos e usamos essas tuplas para adicionar a nossa lista
    # cada elemento da forma que precisamos
    for card1, card2 in zip(part_one, part_two):
        shuffled_cards.append(card1)
        shuffled_cards.append(card2)

    return shuffled_cards

# Exemplo 1:
cartas = [2, 6, 4, 5]
print(shuffle(cartas))
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas2 = [1, 4, 4, 7, 6, 6]
print(shuffle(cartas2))
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]