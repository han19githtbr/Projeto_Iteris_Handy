# Projeto_Iteris

Desafio SomoS             

Linguagem: JavaScript

Frameworks: Express.js, Node.js

Biblioteca para a interface de usuário: React.js



# Descrição

Jogo de cartas de Pokemon

Neste projeto, é desenvolvido um jogo de comparação entre duas cartas de Pokemon, comparando as habilidades ou atributos de cada Pokemon fazendo parte do Banco de Dados da aplicação. Cada carta tem um identificador e esses identificadores possibilitam acessar as cartas e realizar operações com essas cartas de Pokemons. Neste projeto, para comparar duas cartas, foi desenvolvida uma interface usando a biblioteca React.js, onde as cartas a serem comparadas são geradas aleatoriamente. No final da comparação, a aplicação retorna o nome vencedor, o nome do perdedor e o resultado acumulado de todas as vitórias a cada comparação.



# Pré-requisitos

Antes de iniciar, se assegure que possui os requisitos abaixo:

. Esta aplicação utiliza o MySQL como Sistema Gerenciador de Banco de Dados 

. Ter o Visual Code e o Node.JS instalado. Eu usei a versão v 16.15.0

. Ter o XAMPP instalado para executar o banco de dados



# Compilação / Configuração

Para compilar / configurar este projeto, siga as seguintes etapas:

1) Executar o XAMPP(xampp-control), e em Module / MySQL, clicar em Admin para poder importar o Banco de Dados(bd_pokemon.zip)

2 Ter o Postman instalado ou outra ferramenta similar para executar as requisições(GET, PUT, PATCH, DELETE).



# Instalação / Execução

1) Na pasta "client", executar o comando "npm install" no terminal do Visual Code para instalar todas as dependências.
    a) Depois para acessar a interface, executar o comando "npm start" no terminal do Visual Code
    b) No navegador, executar o comando: localhost:3000/add para cadastrar uma carta
    c) Para comparar duas cartas, executar no navegador o comando: localhost:3000/cart 

2) Na pasta "server", executar o comando "npm install" para instalar todas as dependências.
    a) Para executar, digitar no terminal do Visual Code o comando: "npm start" para rodar o Banco de Dados  
