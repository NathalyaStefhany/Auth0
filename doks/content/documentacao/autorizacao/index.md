---
title: "Autorização"
description: ""
lead: "A autorização é um processo que ocorre após a validação da autenticação. Ela irá dizer quais são os privilégios concedidos a um determinado usuário ao utilizar a aplicação. Um exemplo disso é uma loja virtual no qual podemos ter dois tipos de usuários, o administrador que tem a autorização de editar, excluir, adicionar um produto e temos o cliente que tem apenas a permissão de visualizar os produtos."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "autenticação e autorização"
weight: 2
---

## OAuth 2.0

O OAuth 2.0 é um protocolo de autorização que permite que os usuários tenham acesso limitado a recursos de uma aplicação **sem precisar expor suas credenciais**.

Em uma aplicação, quando clicamos em um botão do tipo "Logar com sua conta do Facebook" para evitar fazer um novo cadastro, estamos dando autorização para a aplicação utilizar alguns recursos do Facebook.

### Papéis

Para utilizar o protocolo, o OAuth 2.0 descreve alguns papéis envolvidos em uma comunicação:

- **Resource Owner (proprietário do recurso):** entidade capaz de controlar o acesso aos recursos protegidos, ou seja, o usuário.

- **Resource Server (servidor de recursos):** servidor que hospeda os recursos a serem acessados, ou seja, os dados do usuário.

- **Client (cliente):** aplicação que interage com o **resource owner**.

- **Authorization Server (servidor de autorização):** servidor que gera os tokens de acesso (ex: Auth0).

### Fluxo

Geralmente, o fluxo de autorização funciona da seguinte maneira:

![Image](oauth.png "Fluxo de Autorização")

## Token de Acesso

O token de acesso, normalmente gerado no formato [JWT]({{< relref "documentacao/json-web-token" >}}), permite que um aplicativo acesse um recurso específico em nome do usuário e que o usuário realize algumas ações.

No token, teremos duas informações importantes:

- **Escopo:** define as ações específicas que as aplicações podem realizar no nome do usuário, ou seja, se fizer o login pelo Facebook, a aplicação poderá acessar as informações do perfil se o usuário der permissão.

- **Permissão:** define as ações que podem ser executadas em um recurso. Voltando ao exemplo da loja virtual, teriamos um recurso **produto** e nele podemos tomar as ações de editar, ler, deletar e adicionar. Portanto, no token de acesso do administrador teremos todas as permissões, enquanto no lado do usuário teriamos apenas a de ler.

Em [jwt.io - token de acesso](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbXktZG9tYWluLmF1dGgwLmNvbSIsInN1YiI6ImF1dGgwfDEyMzQ1NiIsImF1ZCI6IjEyMzRhYmNkZWYiLCJleHAiOjEzMTEyODE5NzAsImlhdCI6MTMxMTI4MDk3MCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbInJlYWQ6cHJvZHVjdCJdfQ.nyFWF8hPPkJpQoZfim0z73bPJ2119kXH723UEofbDPw) temos um token de acesso sendo decodificado no debugger e nele é possível retirar as seguintes informações:

- **Scope:** a aplicação terá acesso ao perfil e e-mail do usuário.

- **Permissions:** o usuário poderá visualizar os produtos.

![Image](access-token-decoded.png "Token de acesso decodificado")
