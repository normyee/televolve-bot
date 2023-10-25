# Sobre a solução
Este é um projeto de chatbot para o Telegram, que permite a interação em tempo real com os usuários, enviando e recebendo mensagens. O bot utiliza a API do Telegram Bot para sua funcionalidade. Além disso, o projeto inclui testes de integração com o Cypress para garantir a qualidade e confiabilidade das interações do chatbot.

## Requisitos
- Configuração do SDK do Firebase para Autenticações
- Node LTS
- Docker

### Como executar em minha máquina?
- Clone o projeto em sua máquina: `git clone https://github.com/normyee/televolve-bot.git`
- Entre no projeto: `cd televolve-bot`
#### Configuração no Frontend
- Navegue até `src/config/settings.js` e preencha os dados com sua configuração do Firebase
- Entre no Frontend: `cd ./televolve-ui`
- Instale as dependências: `npm install`
- Inicialize a aplicação Web: `npm run dev`
#### Configuração do Bot
- Abra o Telegram e procure pelo BotFather
- Ao encontrá-lo, digite: `/start`
- Crie um novo bot: `/newbot`
- Escolha um nome para o bot
- Guarde o Token gerado pelo BotFather
- Faça com que o bot possa ler mensagens de grupos: `/setprivacy`
- Configure como `Disable`
#### Configuração no Backend
- Entre no Backend: `cd ./televolve-api`
- Crie um arquivo no pasta raiz com nome de `.env`
- Abra o `.env.example` e passe no `.env` as mesmas variáveis
- Passe a variável `PORT`, e em `TOKEN`, passe o token gerado pelo BotFather
- Instale as dependências: `npm install`
- Inicialize o contêiner: `docker-compose up -d`
- Crie as migrations da schema do prisma: `npx prisma migrate dev --name create_table_chatlog_message`
- Inicialize a aplicação: `npm run dev`
  
#### Pronto 🎉
- Para navegar pelas páginas: `/register` e `/login` são as rotas de autenticação. Enquanto `/home` é a rota principal da aplicação Web.

## Documentação
- [Como o Frontend está estruturado?](televolve-ui/UI-STRUCTURE.md/)
- [Como o Backend está estruturado?](televolve-api/API-STRUCTURE.md/)

## Próximos passos
- Autenticação das rotas com JWT
- Criação de um Servidor Flask em Python para criação de uma API que analisa sentimento das mensagens dos usuários que o Bot interage
- Trocar imagem de perfil e descrição do bot pelo Frontend
- Exibir a foto de perfil dos usuários, tal como o nome em grupos de conversação
- Rolagem automática de novas mensagens
- Notificações
- Utilizar a API do Telegram para exibir que um usuário está digitando agora
- Melhorar testes E2E e adicionar testes unitários
- Exibir histórico de conversas
- Ordernar a lista de chats de acordo com as mensagens recebidas, isto é, se chat X recebe uma atualização, ele ficará no topo da lista de chats
- Fazer com que o Bot consiga responder uma mensagem específica pelo id da mensagem
- Exibir lista de chats no Slidebar em tempo real (atualmente é necessário dar refresh para ver novas conversas)

### Endpoints
`POST - /sendMessage`
```
http://localhost:8000/sendMessage -> envia uma mensagem para um chat especificado.
```
#### Exemplo:
```
{
  "chat_id": 1448633266,
  "text": "Olá"
}
```
`GET - /getChats`
```
http://localhost:8000/getChats-> retorna todos os chats da aplicação e suas mensagens.
```










   
