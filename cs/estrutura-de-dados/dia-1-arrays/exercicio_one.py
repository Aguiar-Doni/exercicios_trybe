""" 
Em um software monitor, o qual verifica a resiliência de outro software,
precisamos saber o tempo máximo que um software permaneceu sem instabilidades. 
Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. 
Supondo um array que contenha os estados coletados por nosso software, 
calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.
"""

# 1 - OK
# 0 - Instabilidades
#                     ↓           ↓  ↓
valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3
#                                ↓  ↓
valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

# o tempo maximo sem instabilidades poderia corresponder ao maior intervalo entre a chegada de uma instablidade
# ou seja, um contador que caso não haja instablidade incrementa += 1
# agora como imagine que tivemos um intervalo de 4 iterações sem instabilidade, ainda precisamos checar o resto da interação
# como comparar um segundo intervalo possivelmente maior ?

# vamos começar criando uma função vazia com duas variáveis para o controle da função

def verify_instabilities(collected_values):
    max_value = 0  # vai armazenar a maior quantidade de vezes que o numero 1 apareceu
    current_value = 0 # vai ser o contador que incrementa variavel max_value
    # iremos percorrer a coleção de valores
    for value in collected_values:
        # se meu valor no indice atual for 1(OK) incrementamos +1 
        if value == 1:
            current_value += 1
        # quando essa sequencia for interrompida vamos voltar a contar novamente
        else: 
            current_value = 0
        # dessa forma a variável mas_value vai conter o maior numero contado até a iteração atual
        # se a contagem for zerada e nao alcançar o valor da váriavel max_value retornaremos o valor maximo atual
        # caso aja uma proxima sequencia onde o contador é maior que o valor maximo iremos reatribuir 
        if current_value >= max_value:
            max_value = current_value
    return max_value

print(verify_instabilities(valores_coletados1))