""" 
Exercício 2: Implemente uma classe Estatistica
Implemente uma classe chamada Estatistica. Ela deve possuir um atributo numbers (uma lista de números) três métodos: um que calcula a média, um que calcula a mediana mediana e outro que calcula a moda de uma lista de números.

🐦 Dica: Você pode utilizar sorted para te auxiliar no método mediana. 🐦 Dica: Você pode utilizar collections.Counter para te auxiliar no método da moda.

 """

from collections import Counter

class Estatistica:
    def __init__(self, numbers):
        # Inicializa a classe com uma lista de números.
        self.numbers = numbers

    def media(self):
        # Calcula a média dos números na lista.
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        # Ordena a lista de números.
        numbers = sorted(self.numbers)
        
        # Calcula a mediana, considerando se o número de elementos é par ou ímpar.
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2
        return numbers[index]

    def moda(self):
        # Usa a classe Counter para contar a ocorrência de cada número.
        # Retorna o número mais frequente (moda).
        number, _ = Counter(self.numbers).most_common()[0]
        return number
