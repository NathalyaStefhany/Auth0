[![Netlify Status](https://api.netlify.com/api/v1/badges/3c95e814-1fe7-4c1c-b433-04618b207b62/deploy-status)](https://app.netlify.com/sites/doks-auth0/deploys)

[Documentação do Auth0](https://doks-auth0.netlify.app/)


# Documentação do Auth0
Repositório destinado ao estudo do Auth0, um provedor de autenticação e autorização.

## Documentação
Em conjunto aos estudos do Auth0, foi escrito uma documentação utilizando o [Doks](https://getdoks.org/). Na documentação é explicado conceitos de autenticação, autorização, tokens, permissões, entre outras coisas. Além disso, temos um tutorial colocando em prática os conceitos no front-end e back-end.

## Aplicação
Para colocar em prática o estudo do Auth0, foi desenvolvido uma aplicação de loja de livros no qual teremos as seguintes abas:

- **Home**
- **Perfil**
- **Editar:** tem as funcionalidades de adicionar e excluir livros
- **Livros:** lista todos os livros presente na loja

Além disso, teremos dois tipos de usuário:

- **Administradores:** poderão adicionar, excluir e visualizar os livros
- **Clientes:** poderão apenas visualizar os livros

Para que os clientes não possam excluir ou adicionar livros, no Auth0 foi definido alguns escopos para que o back-end e front-end saibam que abas e endpoints o usuário logado terá permissão de acessar:

- **Escopos**: `read:book`, `create:book`, `delete:book` e `openid profile email`
- **Roles:** `administrador` e `cliente`
- **App Metadata:** qual tipo de acesso (role) o usuário tem

A partir dessas informações, foi desenvolvido a aplicação front-end utilizando o [React](https://pt-br.reactjs.org/) e o back-end utilizando o [Node.js](https://nodejs.org/en/).

**Obs: na documentação temos o tutorial da aplicação**

