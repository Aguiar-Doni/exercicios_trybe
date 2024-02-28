# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def find_biggest(list_of_names):
    biggest_name = list_of_names[0]
    for index_name in list_of_names:
        if len(index_name) > len(biggest_name):
            biggest_name = index_name
    return biggest_name


result = find_biggest(list)
print(result)
