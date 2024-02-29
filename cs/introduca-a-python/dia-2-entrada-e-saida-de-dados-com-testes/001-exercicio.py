ENTRADA = input('Digite um nome: ')
tamanho = len(ENTRADA)

for index in range(tamanho, 0, -1): 
    """ 
    para fazer a função range funcionar de forma decrescente 
    definimos o tamanho da entrada com o len()
    usamos como incio, o segundo parametro (condição de parada) no 0
    com o tereceiro parametro (opciional) espaçamento -1 que vai retirando -1 a cada iteração
    """ 
    print(ENTRADA[:index]) 
    # para imprimir o resultado deseja usamos notação de slicing
    # para poder imprimir a cada iretação o indice atual da fatia que esta mudando a cada iteração