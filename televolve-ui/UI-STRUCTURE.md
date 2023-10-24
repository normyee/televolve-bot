# Decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar este projeto

#### Setup de ambiente
- Node LTS

#### Como executar em minha máquina?
- Instale as dependências `npm install`
- Rode `npm run dev`
- Pronto 🎉

## Estrutura do projeto
- `./src/views`: É onde se encontra as páginas/views da aplicação Vue.js
   - A princípio, o projeto possuí três views: `HomeView`, `LoginView` e `RegisterView`.

- `./components`: São onde se encontram todos os componentes da aplicação, como componente que lida com a Header da página, que lida com formulário de login, que lida com Slidebar. Cada um com sua própria responsabilidade.
  - `<HeaderComponent>`: É Header da aplicação com um título, uma imagem de perfil e um ícone de logout, e permite que o usuário faça logout ao clicar no ícone. 
  - `<LoginForm>`: É a parte de um formulário de login na aplicação web, responsável por capturar o e-mail e a senha dos usuários e acionar o método "login" para autenticá-los no Vuex store.
   - `<MessageContainer>`: É o Contêiner onde fica os componentes possuem responbalidades de exibir Header e conteúdo das mensagens.
   - `<MessageContent>`: É a parte que lida com o conteúdo das mensagens.
   - `<MessageFooter>`: A parte de uma interface de chat com um seletor de emojis que permite aos usuários escolher e enviar emojis em mensagens.
   - `<RegisterForm>`: É a parte de um formulário de cadastro na aplicação web, responsável por capturar o e-mail e a senha dos usuários e acionar o método "register" para autenticá-los no Vuex store.
   - `<SectionDivider>`: Esse componente Vue.js gera uma linha horizontal `<hr>`, seguida por um texto e um link dinâmicos, com mensagens personalizáveis e um destino determinado por props fornecidas.
   - `<SlideBar>`: É uma barra lateral de chat que exibe conversas de usuários e permite a seleção de um chat específico ao clicar nele, destacando-o com uma cor de fundo.

- `./src/cypress`: É a camada que encontramos os testes E2E da aplicação.
  - `./e2e`:
     - `login.cy.js`: Teste de integração para view `LoginView`
     - `register.cy.js`: Teste de integração para view `RegisterView`

- `./src/assets`: Onde se encontra os assets da aplicação, tais como: `img`, onde se encontra os arquivos estáticos e o `global.css`, CSS do arquivo `App.vue`.

- `./src/config`: Parte do arquivo de configuração para o projeto rodar.

- `./src/router`: Configura as rotas para uma aplicação Vue.js, incluindo as páginas de Registro, Login e Página Inicial. Além disso, ele verifica a autenticação do usuário e redireciona, se necessário.

- `./src/services`: Camada de serviços da aplicação web. Encontramos o serviço de firebase que lida com autenticação de usuários.

- `./src/store`: Camada onde cria e exporta uma instância do Vuex Store para gerenciar o estado de uma aplicação Vue.js, incluindo a lógica de autenticação do usuário.

- `./src/utils`: É a parte que possuí classes de utilitárias para o projeto. Como: `auth.handler.js` que lida com erros de autenticação, `auth-perfom ` que lida com a parte de autenticação com firebase e `notification-popup `que possui Toastify para exibir erros de autenticação.






   

