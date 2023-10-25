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
- `./common/types.ts`: Camada onde fica todos os tipos da aplicação.

- `./src/domain`: É o coração da aplicação.
   - `chatlog.entity.ts`: É a entidade do Chatlog.
   - `message.entity.ts`: É a entidade de mensagem.

- `./src/config`: É a configuração da classe App, onde os websockets são inicializados para comunicação com o Frontend. No construtor da classe, um processo de polling é implementado para escutar novas mensagens e atualizar o banco de dados com novos chats e log de interações com o bot.

- `./src/infra`: É o coração da aplicação.
  - `data`: Camada que lida com a lógica de banco de dados.
    - `prisma`: Pasta que se encontra o schema do prisma para modelagem das entidades.
  - `http`: Camada que lida com a lógica de requisições HTTP, nela temos a pasta.
    - `controller`:
      - `telegram-bot.controller.ts`: Controller da lógica da aplicação.
  - `provider`: É a camada que lida com os serviços da API.
      - `telegram-bot.ts`: Arquivo de integração com o serviço da API do Telegram Bot.
- `Presentation/routers/route.ts`: Camada onde lida com inicialização das rotas do Express. 

- `service/telegram-bot.service`: É a camada que lida com os casos de uso da aplicação, em específico, os casos de uso com a API, como envio de mensagens ou retornar os logs.







   
