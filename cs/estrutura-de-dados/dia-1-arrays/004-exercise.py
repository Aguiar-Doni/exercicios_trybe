""" 
Você têm dois arrays de números inteiros que representam:

I - instantes de entrada e saídas em uma biblioteca 
II -um número que represente um instante a ser buscado.

Retorne quantas pessoas estudantes estão na biblioteca naquele instante. 
Considere que todo estudante entrou e saiu da biblioteca.

entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
resultado: 1

O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
e saiu no 2 e o último foi único a estar presente no instante 4.
"""

# Vamos definir uma função com (entrada, saida e instante a ser verificado)

def students_in_library(entrances, exits, target_instant):
    # esses parametros representam listas com horarios de entrada, saida e instante alvo
    # uma variável de inicialização para capturar um estudante presente no instante alvo
    students_present = 0

    # ireração sobre a lista
    for i in range(len(entrances)):
        entrance_time = entrances[i] # momento de entrada
        exit_time = exits[i] # dessa forma podemos acessar o mesmo indice de outra lista sem fazer um novo loop

        # verifica se o instante target_instante for maior ou igual ao momento de entrada entrance_time e e for menor ou igual ao momento de saida exit_time
        # isso significa que o estudante esta na biblioteca enão adicionamos +=1 a variavel que conta a presença
        if entrance_time <= target_instant <= exit_time:
            students_present += 1

    return students_present


entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
# resultado: 1
print(students_in_library(entrances=entradas, exits=saidas, target_instant=instante_buscado))
