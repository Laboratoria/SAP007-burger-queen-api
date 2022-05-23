# Burger Queen - API com Node.js

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Hacker Edition](#6-hacker-edition)
* [7. Pistas, tips e leituras complementares](#7-pistas-tips-e-leituras-complementares)
* [8. HTTP API Checklist](#8-http-api-checklist)

## 1. Prefácio

![Node.js logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg)

Um pequeno restaurante de hamburgueres, que está crescendo, necessita de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação Burger Queen já foi criado. Agora
precisamos criar o back-end para manejar os dados. Neste caso, isso será
feito através de uma API rest que será compatível com as requisições
vindas do front.

## 2. Resumo do projeto

Como API, nesse caso nos referimos a um _servidor web_, que é basicamente
um programa que _ouve_ o que acontece na aplicação através de uma porta de rede,
pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

Um servidor web deve _lidar_ com as requisições que chegam e devolver respostas,
que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_,
isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa
que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc)
e o servidor é o programa que recebe essas requisições e as responde.

O [Node.js](https://nodejs.org/) nos permite criar servidores web super eficientes
de maneira relativamente simples, tudo isso usando JavaScript!

Neste projeto partimos de um _boilerplate_ que já contém uma série de
_endpoints_ (pontos de conexão ou URLs) e nos pedem para completar a aplicação.
Isto implica que teremos que começar a ler a implementação existente, e
familiarizar-nos com a _stack_ escolhida ([Node.js](https://nodejs.org/),
[Express](https://expressjs.com/)), [Sequelize](https://sequelize.org),
e [PostgreSQL](https://www.postgresql.org/).

O cliente nos deu um [link para a documentação](https://lab-api-bq.herokuapp.com/api-docs/)
que especifica o comportamento esperado da API que iremos expor por
HTTP. Lá podemos encontrar todos os detalhes que os _endpoints_ deve
implementar na aplicação, que parâmetros esperam, o que devem responder, etc.

O objetivo de aprendizagem principal é adquirir experiência com o **Node.js**
como ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série
de outras ferramentas comumente utilizadas nesse contexto (Express como framework,
PostgreSQL como base de dados, containers de docker (Hacker Edition), etc).

Neste projeto, você desenvolverá um servidor web que deverá _servir_ `JSON`
através de uma conexão `HTTP`, e implantá-lo em um servidor na nuvem.

Ao final do projeto, você deverá estar familiarizada com conceitos como **rotas**
(_routes_), **URLs**, **HTTP** (verbos, request, response, headers, body, status
codes, etc), **JSON**, **conexão com uma base de dados** (`PostgreSQL`), **deployment**...

## 3. Objetivos de aprendizagem

### Node.js

- [ ] **Instalar e usar módulos (npm)**

  <details><summary>Links</summary><p>

  * [Sitio oficial de npm (em inglês)](https://www.npmjs.com/)
</p></details>

- [ ] **Configuração do package.json**

  <details><summary>Links</summary><p>

  * [package.json - Documentação oficial (em inglês)](https://docs.npmjs.com/files/package.json)
</p></details>

- [ ] **Configuração do npm-scripts**

  <details><summary>Links</summary><p>

  * [scripts - Documentação oficial (em inglês)](https://docs.npmjs.com/misc/scripts)
</p></details>

### JavaScript

- [ ] **Testes unitários** (Hacker Edition)

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Testes assíncronos** (Hacker Edition)

  <details><summary>Links</summary><p>

  * [Testando Código Assíncrono - Documentação oficial](https://jestjs.io/docs/pt-BR/asynchronous)
</p></details>

- [ ] **Mocking** (Hacker Edition)

  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

- [ ] **Testes de integração (end-to-end)** (Hacker Edition)

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Módulos de CommonJS**

  <details><summary>Links</summary><p>

  * [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### Express.js

- [ ] **Rotas**

- [ ] **Uso e criação de middleware** (Hacker Edition)

### HTTP

- [ ] **Solicitações ou requisições (request) e respostas (response).**

  <details><summary>Links</summary><p>

  * [Uma visão geral do HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
  * [Mensagens HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Cabeçalhos (headers)**

  <details><summary>Links</summary><p>

  * [Cabeçalhos HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Corpo (body)**

  <details><summary>Links</summary><p>

  * [Mensagens HTTP / Corpo - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages#corpo)
</p></details>

- [ ] **Verbos HTTP**

  <details><summary>Links</summary><p>

  * [Métodos de requisição HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de status de respostas HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

- [ ] **Encodings e JSON**

  <details><summary>Links</summary><p>

  * [Introdução ao JSON - Documentação oficial](https://www.json.org/json-pt.html)
</p></details>

- [ ] **CORS (Cross-Origin Resource Sharing)**

  <details><summary>Links</summary><p>

  * [Cross-Origin Resource Sharing (CORS) - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
</p></details>

### Autenticação (Hacker Edition)

- [ ] **JWT (JSON Web Token)**

- [ ] **Armazenamento e acesso de senhas**

### Bases de dados (PostgreSQL)

- [ ] **Instalação**

- [ ] **Conexão**

- [ ] **Queries e comandos (criação, leitura, atualização, eliminação)**

## 4. Considerações gerais

Este projeto poderá ser realizado individualmente ou em duplas. Posteriormente,
poderá estar integrado com o projeto Burger Queen API client já realizado.

A lógica do projeto deve estar implementada totalmente em JavaScript (ES6).
Neste projeto está permitido usar bibliotecas ou frameworks.

## 5. Critérios de aceitação mínimos do projeto

### 5.1 API

Conforme estabelecido pela [documentação](https://lab-api-bq.herokuapp.com/api-docs/)
entregue pelo nosso cliente, a API deve expor os seguintes endpoints:

#### 5.1.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 5.1.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 5.1.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

#### 5.1.4 `/auth` (Hacker Edition)

* `POST /auth`

### 5.2 Implantação (Deployment)

O código do projeto deverá estar em um repositório no GitHub.
O _deploy_ para produção deverá ser feito utilizando um serviço de hospedagem como
o [Heroku](https://www.heroku.com/home), que tem integração com o
[PostgreSQL](https://www.heroku.com/postgres)

Cuidado para não subir as chaves de autenticação para o GitHub do projeto ;).

## 6. Hacker Edition

As seções chamadas Hacker Edition são opcionais. Se você terminou tudo e
ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar mais
sobre os objetivos de aprendizagem do projeto.

* Criptografar senha do usuário
* Endpoint de autenticação: `POST /auth`
* Middleware de autenticação - verificação do token
* Middleware de erros
* Criar a documentação da API
* Testes unitários para cada função
* Testes _"end to end"_ ou _e2e_ (de uma ponta a outra)
* Docker

#### Criptografar senha do usuário

É uma boa prática **NÃO** armazenar a senha do seu usuário no seu banco de dados, pois
colocaria a segurança de seu usuário em risco. Assim, ao invés de armazená-la como
um simples string, a ideia é armazenar uma `hash` criptografada. Por exemplo,
pode-se usar o [bcryptjs](https://www.npmjs.com/package/bcryptjs).

Assim, na autenticação (`POST /auth`), se a senha do usuário está certa ou não, poderá ser feita
comparando essa `hash`.

#### Criar a documentação da API

Sugerimos o uso do [Swagger](https://swagger.io/docs/specification/about/) ou [JSDoc](https://jsdoc.app/about-getting-started.html)
para escrever a sua própria documentação

#### Docker

Se quiser, também poderá se aventurar no Docker e dar os primeiros passos com containers.

Um container (que pode ser criado com Docker) serve para garantir que os ambientes
de desenvolvimento e produção sejam exatamente os mesmos, não importa em que
sistemas operacional/versão funciona o computador da desenvolvedora.
Terminando com o famoso (e temido) "na minha máquina funciona".

O Docker cria uma container de um sistema operacional onde podemos definir configurações
e versões de softwares, e é dentro de um desses containers que podemos testar e executar
nossos projetos independente do sistema operacional
que rodamos em nossa máquina física :)

Para este projeto te recomendamos a usar `docker-compose` localmente (em seu
computador) para executar a aplicação junto com a base de dados.

## 7. Pistas, tips e leituras complementares

### Primeiros passos

#### Dependências

1. Faça o _fork_ e `git clone` do projeto;
2. Instale o projeto localmente com `npm install`;
3. Rode o comando `npm start` para subir o _boilerplate_ do projeto na porta 3000.

Aqui o seu servidor já está funcionando! Teste e explore o código para entender o
exemplo que já vem no boilerplate! E lembre-se, nesse projeto não há interface, e
estaremos utilizando o console e ferramentas como o Postman para visualizar
nosso projeto.

Até o momento, ainda não temos um banco de dados. Nosso banco de dados estará
no Heroku, então precisaremos configurar e conectá-lo ao nosso projeto,
e **antes de fazer** isso, sugerimos explorar o boilerplate, 
buscando entender as rotas e divisão de arquivos. 

### Conteúdos importantes

* [Como funciona uma requisição HTTP, header e body](https://medium.com/clebertech/como-funciona-uma-requisi%C3%A7%C3%A3o-http-cf76f66fe36e)
para relembrarmos, pois vai ser super importante
* [Outro artigo sobre requisição HTTP, header e body](http://gabsferreira.com/o-que-e-o-http-como-funciona-request-respose/)
* [Artigo sobre MVC com exemplo](https://medium.com/@ipenywis/what-is-the-mvc-creating-a-node-js-express-mvc-application-da10625a4eda)
* [O que é CORS](https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros)
* [CORS](https://www.youtube.com/watch?v=GZV-FUdeVwE)

### Tutoriais

Seguem alguns tutoriais que você pode fazer para praticar, para ganhar uma maior familiaridade
com algumas das ferramentas utilizadas... mas não se prenda a eles. Existem diversas formas de fazer,
entenda o uso das ferramentas e os tutoriais podem de dar uma base de prática.

**Muito importante:** Os tutoriais são bons para praticar, mas nenhum deles vai ser
exatamente igual ao seu projeto, nem na estrutura, nem no código, nem no banco utilizado.
O objetivo é que você pratique algumas partes principais do que sua aplicação
deve fazer (requisições do tipo get, post, etc, rotas com Express
e por aí vai) e procure aplicar o que aprendeu em seu projeto. Além disso eles podem
ter bugs ou desatualizações. Caso aconteça, aproveite para praticar
suas habilidades de _debug_!

* [PT-BR: Express](https://ezdevs.com.br/comecando-uma-api-rest-com-node-js/)
* [Ingles: Express - Part 1](https://medium.com/@haybams/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb)
* [Ingles: Express com Postgres e Sequelize - Part 2](https://medium.com/@haybams/using-postgresql-and-sequelize-to-persist-our-data-c86854a3c6ac)

* [PT-BR: Avançado](https://github.com/andresjesse/api-nodejs-sample)

### Ferramentas, materiais e documentações

* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org)
* [PostgreSQL](https://www.postgresql.org/)
* [PostgreSQL - documentação em português para a versão 8](http://pgdocptbr.sourceforge.net/pg80/index.html)
* [Postman](https://www.getpostman.com)
* [Documentação do Postman](https://learning.getpostman.com/docs/postman/launching-postman/introduction/)

#### Material relacionado ao banco de dados
Sugerimos a leitura e o estudo desses materiais **após** entendimento do boilerplate e das rotas.

* [DB - Entendendo o `index.js` do models](https://youtu.be/uptgTto9jKg)
* [DB - Criando o DB no heroku e conectando ](https://youtu.be/fHDKLccRncE)

### Materiais para Hacker Edition

* [JSON web Token](https://jwt.io/)
* [jsonwebtoken library](https://www.npmjs.com/package/jsonwebtoken)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [JSDoc](https://jsdoc.app/about-getting-started.html)
* [Swagger](https://swagger.io/docs/specification/about/)
* [docker](https://docs.docker.com/)
* [docker compose](https://docs.docker.com/compose/)
* [Docker para desenvolvedores](https://github.com/gomex/docker-para-desenvolvedores)
(livro completo)
* [Tutorial com Docker](https://github.com/rfukui/do-excel-ao-sistema-complexo)
* [Exemplo com Docker](https://github.com/danielbdias/rest-api-with-db-in-nodejs)

***

## 8 HTTP API Checklist

### 8.1 `/users`

* [ ] `GET /users`
* [ ] `GET /users/:uid`
* [ ] `POST /users`
* [ ] `PUT /users/:uid`
* [ ] `DELETE /users/:uid`

### 8.2 `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

### 8.3 `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`

### 8.4 Hacker Edition

* [ ] Criptografar senha do usuário
* [ ] `POST /auth`
* [ ] Middleware de autenticação
* [ ] Middleware de erros
* [ ] Documentação da API
* [ ] Testes unitários
* [ ] Testes _e2e_
* [ ] Docker
