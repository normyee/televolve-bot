# Decisões arquiteturais e a estrutura do projeto
Este projeto adota os princípios de Domain-Driven Design (DDD) e Clean Architecture, incorporando o padrão de Repositories para a estruturação e organização da lógica de negócios e dos dados.

## Requisitos para rodar este projeto

#### Setup de ambiente
- Node LTS
- Docker

#### Como executar em minha máquina?
- Instale as dependências: `npm install`
- Inicialize o contêiner: `docker-compose up -d`
- Crie as migrations da schema do prisma: `npx prisma migrate dev --name create_table_chatlog_message`
- Rode: `npm run dev`
- Pronto 🎉

## Estrutura do projeto
- `./src/domain`: É o coração da aplicação.

- `./src/config`: É a configuração da classe App, onde os websockets são inicializados para comunicação com o Frontend. No construtor da classe, um processo de polling é implementado para escutar novas mensagens e atualizar o banco de dados com novos chats e log de interações com o bot.

- `./src/infra`: É o coração da aplicação.
  - `data`: Camada que lida com a lógica de banco de dados.
    - `prisma`: Pasta que se encontra o schema do prisma para modelagem das entidades.
  - `http`: Camada que lida com a lógica de requisições HTTP, nela temos a pasta.
    - `controller`: 

#### Rotas








   
