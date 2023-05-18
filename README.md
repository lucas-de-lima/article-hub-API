
# Article Hub API

A Article Hub API é uma API desenvolvida para gerenciar artigos de um blog. Ela permite a criação e autenticação de usuários, adição e recuperação de categorias, criação e edição de posts de blog, além de realizar buscas por posts baseadas em termos fornecidos.

A API foi desenvolvida utilizando o framework Node.js com Express.js e o ORM Sequelize, e se integra a um banco de dados relacional para armazenar as informações dos usuários, categorias e posts.


## Endpoints

A seguir, são apresentados os endpoints disponíveis na API, juntamente com as informações sobre os corpos das requisições e as respostas retornadas, quando aplicável.

Esses são os principais endpoints disponíveis na API do Article Hub para gerenciar usuários, categorias e posts de blog. Utilizando esses endpoints, é possível realizar operações como autenticação de usuários, adição de novos usuários, obtenção de informações de usuários, adição de categorias, obtenção de categorias, adição de novos posts de blog, obtenção de posts de blog e suas informações, atualização de posts de blog e exclusão de posts de blog e usuários.


### POST /login

Este endpoint é utilizado para autenticar um usuário na API. Ele permite que o usuário faça login fornecendo seu email e senha.

Corpo da Requisição:
```
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
Resposta:

Em caso de sucesso, a resposta será um objeto contendo o token de autenticação:
```
{
  "token": "9Pwh6UNBp4S7ovj3Cq7APi..."
}
```

### POST /user

Este endpoint é utilizado para adicionar um novo usuário à base de dados.

Corpo da Requisição:
```
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```
Resposta:

Em caso de sucesso, a resposta será o objeto do usuário recém-criado, incluindo seu ID, nome de exibição, email e imagem (opcional).

### GET /user

Este endpoint é utilizado para obter todos os usuários cadastrados na API.

Resposta:

Em caso de sucesso, a resposta será um array contendo todos os usuários cadastrados, incluindo seus IDs, nomes de exibição, emails e imagens (quando disponíveis).

### GET /user/:id
Este endpoint é utilizado para obter as informações de um usuário específico com base no seu ID.

Resposta:

Em caso de sucesso e se o usuário existir, a resposta será o objeto do usuário correspondente, incluindo seu ID, nome de exibição, email e imagem (quando disponível).
Se o usuário não for encontrado, será retornada uma resposta com status 404 indicando que o usuário não existe.

### POST /categories
Este endpoint é utilizado para adicionar uma nova categoria à base de dados.

Corpo da Requisição:
```
{
"name": "Typescript"
}
```
Resposta:

Em caso de sucesso, a resposta será o objeto da categoria recém-criada, incluindo seu ID e nome.

### GET /categories
Este endpoint é utilizado para obter todas as categorias cadastradas na API.

Resposta:

Em caso de sucesso, a resposta será um array contendo todas as categorias cadastradas, incluindo seus IDs e nomes.
```
[
  {
    "id": 1,
    "name": "Inovação"
  },
  {
    "id": 2,
    "name": "Escola"
  }
]
```
### POST /post
Este endpoint é utilizado para adicionar um novo post de blog à base de dados. O post será vinculado às categorias especificadas.

Corpo da Requisição:
```
{
"title": "Latest updates, August 1st",
"content": "The whole text for the blog post goes here in this key",
"categoryIds": [1, 2]
}
```
Resposta:

Em caso de sucesso, a resposta será o objeto do post de blog recém-criado, incluindo seu ID, título, conteúdo e categorias associadas.

### GET /post
Este endpoint é utilizado para obter todos os posts de blog cadastrados na API, juntamente com as informações do usuário proprietário e as categorias associadas a cada post.

Resposta:

Em caso de sucesso, a resposta será um array contendo todos os posts de blog cadastrados, incluindo seus IDs, títulos, conteúdos, informações do usuário proprietário e categorias associadas.
```
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  },
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```
### GET /post/:id
Este endpoint é utilizado para obter as informações de um post de blog específico com base no seu ID, juntamente com as informações do usuário proprietário e as categorias associadas.

Resposta:

Em caso de sucesso e se o post de blog existir, a resposta será o objeto do post correspondente, incluindo seu ID, título, conteúdo, informações do usuário proprietário e categorias associadas.
Se o post de blog não for encontrado, será retornada uma resposta com status 404 indicando que o post não existe.

### PUT /post/:id
Este endpoint é utilizado para alterar as informações de um post de blog específico com base no seu ID. Somente o usuário proprietário do post pode realizar essa alteração. É possível alterar apenas o título e o conteúdo do post.

Corpo da Requisição:
```
{
"title": "Latest updates, August 1st",
"content": "The whole text for the blog post goes here in this key"
}
```
Resposta:

Em caso de sucesso e se o post de blog existir e o usuário for o proprietário, a resposta será o objeto do post atualizado, incluindo seu ID, título, conteúdo, informações do usuário proprietário e categorias associadas.
Se o post de blog não for encontrado, será retornada uma resposta com status 404 indicando que o post não existe.

### DELETE /post/:id
Este endpoint é utilizado para excluir um post de blog específico com base no seu ID. Somente o usuário proprietário do post pode realizar essa exclusão.

Resposta:

Em caso de sucesso e se o post de blog existir e o usuário for o proprietário, a resposta será um objeto com a mensagem ``"Post deletado com sucesso!"``.
Se o post de blog não for encontrado, será retornada uma resposta com status 404 indicando que o post não existe.

### DELETE /user/me
Este endpoint é utilizado para excluir o usuário logado da base de dados. O ID do usuário é obtido a partir do token de autenticação fornecido nos headers da requisição.

Resposta:
Em caso de sucesso, a resposta será um objeto com a mensagem ``"Usuário excluído com sucesso!"``.

Se o usuário não for encontrado, será retornada uma resposta com status 404 indicando que o usuário não existe.

###
## Considerações finais

O projeto Article Hub API é uma poderosa API desenvolvida para gerenciar artigos de um blog, oferecendo recursos de autenticação de usuários, gerenciamento de categorias e criação/edição de posts. Com o uso do framework Node.js com Express.js e o ORM Sequelize, a API se integra facilmente a um banco de dados relacional, proporcionando uma base sólida para armazenar todas as informações relevantes.

Com uma ampla gama de endpoints disponíveis, a Article Hub API oferece uma maneira eficiente de criar, atualizar, buscar e recuperar dados de artigos de blog. Além disso, a API também inclui recursos de autenticação, permitindo que os usuários façam login e interajam com a plataforma de maneira segura.

Para os desenvolvedores interessados em contribuir para o projeto, adicionamos a seção "Contribuindo" que fornece orientações claras sobre como configurar o ambiente de desenvolvimento, executar o projeto localmente e enviar contribuições por meio de Pull Requests. Estamos ansiosos para receber suas contribuições e melhorar ainda mais a Article Hub API.

Agradecemos a todos os envolvidos no desenvolvimento e na manutenção deste projeto, bem como a todos aqueles que utilizam a API em seus blogs. Se você tiver alguma dúvida, feedback ou sugestão, não hesite em entrar em contato conosco. Estamos comprometidos em continuar aprimorando e expandindo a funcionalidade da Article Hub API para atender às necessidades em constante evolução dos usuários.

Obrigado por escolher a Article Hub API! Desejamos a você muito sucesso em seus projetos de blog e esperamos que nossa API seja uma ferramenta valiosa para alcançar seus objetivos.