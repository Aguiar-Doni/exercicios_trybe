import os
import csv
from datetime import datetime

path_file = 'infos.csv'

def generate_job():
    # Recebe o nome da vaga com no máximo 50 caracteres
    name_job = input('Digite o nome da vaga (até 50 caracteres): ')[:50]

    # Recebe a data da candidatura no formato dd/mm/aaaa
    while True:
        date_str = input('Digite o dia da candidatura (dd/mm/aaaa): ')
        try:
            date_job = datetime.strptime(date_str, '%d/%m/%Y').strftime('%d/%m/%Y')
            break
        except ValueError:
            print('Formato de data inválido. Tente novamente.')

    # Recebe se houve retorno da vaga (sim ou não)
    while True:
        return_job = input('Houve retorno da vaga (sim ou não): ').lower()
        if return_job in ['sim', 'não']:
            break
        else:
            print('Resposta inválida. Por favor, digite "sim" ou "não".')

    # Cria uma tupla com as informações
    info_tuple = {'Nome da Vaga': name_job, 'Dia da Candidatura': date_job, 'Retorno da Vaga': return_job}

    # Verifica se o arquivo já existe
    file_exists = os.path.exists(path_file)

    # Abre o arquivo em modo de escrita (modo 'a' para adicionar ao final do arquivo)
    with open(path_file, 'a', newline='') as file:
        # Cria um objeto de escrita CSV
        writer = csv.writer(file)

        # Se o arquivo não existir, escreve o cabeçalho
        if not file_exists:
            writer.writerow(['Nome da Vaga', 'Dia da Candidatura', 'Retorno da Vaga'])

        # Escreve as informações da vaga no arquivo
        writer.writerow(info_tuple.values())

    # Imprime a mensagem formatada após fechar o arquivo
    print(f'Informações da vaga foram salvas no arquivo {path_file}: {info_tuple}')

# Chama a função para gerar informações da vaga
generate_job()
