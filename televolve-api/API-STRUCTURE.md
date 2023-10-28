# Decisões arquiteturais e a estrutura do projeto
Este projeto adota os princípios de Domain-Driven Design (DDD) e Clean Architecture, incorporando o padrão de Repositories para a estruturação e organização da lógica de negócios e dos dados.

## Requisitos para rodar este projeto

#### Setup de ambiente
- Node LTS
- Docker
- Python 3 (OPCIONAL)

#### Como executar em minha máquina?
- Instale as dependências: `npm install`
- Inicialize o contêiner: `docker-compose up -d`
- Crie as migrations da schema do prisma: `npx prisma migrate dev --name create_table_chatlog_message`
- Rode: `npm run dev`
- OPCIONAL: Caso deseje utilizar a inteligência artificial para analisar sentimentos, inicialize a API em Flask que se encontra na camada `src/external/api-flask/app.py`
- Pronto 🎉

## Estrutura do projeto
- `./common/types.ts`: Camada onde fica todos os tipos da aplicação.

- `./errors`: Camada de erros customizados.
   - `./errors/invalid-id-error.ts`: Erro customizado de quando um chatId é inválido

- `./src/domain`: É o coração da aplicação.
   - `chatlog.entity.ts`: É a entidade do Chatlog.
   - `message.entity.ts`: É a entidade de mensagem.

- `./external`: Camada de serviços externos.
   - `./external/api-flask`: Servidor de Python em Flask.
     - `./external/api-flask/app.py`: Ponto de inicialização da API.
     - `./external/api-flask/service/sentiment_analysis.py`: Função em Python que utiliza a API da OPENAI com o intuito de analisar sentimento dos usuários pelos comentários.

- `./src/config`: É a configuração da classe App, onde os websockets são inicializados para comunicação com o Frontend. No construtor da classe, um processo de polling é implementado para escutar novas mensagens e atualizar o banco de dados com novos chats e log de interações com o bot.

- `./src/infra`: Camada de infraestrutura da aplicação.
  - `data`: Camada que lida com a lógica de banco de dados.
    - `prisma`: Pasta que se encontra o schema do prisma para modelagem das entidades.
  - `http`: Camada que lida com a lógica de requisições HTTP, nela temos a pasta.
    - `controller`:
      - `telegram-bot.controller.ts`: Controller da lógica da aplicação.
  - `provider`: É a camada que lida com os serviços da API.
      - `chat-service.ts`: Provider de integração com o serviço do PrismaClient.
        - - `chat-service.repository.ts`: Repository da integração do serviço do PrismaClient.
      - `telegram-bot.ts`: Provider de Integração com o serviço da API do Telegram Bot.
        - `telegram-bot.repository.ts`: Repository da integração com o serviço da API do Telegram Bot.
      - `sentiment-analysis.provider.ts`: Integração com a API do servidor em Flask.
- `Presentation/routers/route.ts`: Camada onde lida com inicialização das rotas do Express. 

- `service/telegram-bot.service.ts`: É a camada que lida com os casos de uso da aplicação, em específico, os casos de uso com a API, como envio de mensagens ou retornar os logs.
- `service/sentiment-analysis.service.ts`: Caso de uso que analisa sentimentos dos usuários pelas suas mensagens.







   
