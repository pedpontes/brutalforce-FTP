
# Força Bruta FTP

Este é um script simples em Node.js que realiza uma tentativa de força bruta em um servidor FTP usando uma lista de credenciais fornecida em um arquivo.

## Pré-requisitos

- Node.js instalado no seu sistema
- Acesso a um servidor FTP para teste
- Um arquivo contendo uma lista de credenciais no formato "usuário senha", onde cada linha representa um conjunto de credenciais

## Como Usar

1. Clone o repositório ou baixe o arquivo `forceftp.js`.
2. Instale as dependências necessárias usando npm:

    ```
    npm install
    ```

3. Execute o script passando como argumentos o endereço do host FTP e o caminho para o arquivo contendo as credenciais:

    ```
    node ./build/forceftp.js [host] [caminho_para_arquivo]
    ```

    Substitua `[host]` pelo endereço do servidor FTP e `[caminho_para_arquivo]` pelo caminho para o arquivo contendo as credenciais.

O script iniciará uma tentativa de força bruta em cada conjunto de credenciais fornecido no arquivo. Ele tentará se conectar ao servidor FTP usando cada par de usuário/senha, e exibirá uma mensagem indicando se a conexão foi bem-sucedida ou não.

**Observação:** Este script foi criado apenas para fins educacionais e de demonstração. O uso de técnicas de força bruta em sistemas sem permissão é ilegal e antiético.

