---
title: "Autenticação"
description: ""
lead: "Para um usuário conseguir acessar determinados aplicativos, é necessário realizar um processo de autenticação, ou seja, verificar se você é quem afirma ser. Essa verificação de indentidade pode ser feita a partir de um login, envio de um token, certificado digital, entre outros."
date: 26-02-2022
lastmod: 26-02-2022
draft: false
toc: true
images: []
menu:
  docs:
    parent: "autenticação e autorização"
weight: 1
---

## OpenID Connect (OIDC)

O OpenID Connect é um protocolo de autenticação e gerenciamento de identidade, ou seja, define como os provedores de autenticação e as aplicações irão interagir para estabelecer a autenticação do usuário final de forma segura, centralizada e padronizada.

Portanto, caso uma aplicação utilize o protocolo para a autenticação, a responsabilidade de verificar as a identidade do usuário é passada para um provedor como o Google, Microsoft e Auth0.

![Image](oidc.png "Etapas da autenticação através do OpenID Connect")

### Motivos para utilizar

Os principais motivos para utilizar o OIDC são:

- Liberdade para que os usuários reutilizem contas do Gmail, Facebook, etc

- Evita que desenvolvedores gerenciem as autenticações, trazendo uma maior segurança

- Possibilidade de criar um hub de provedores de autenticação

## ID Token

O ID token é uma prova da autenticação do usuário no qual temos um conjunto de informações pessoais. Ele é gerado, normalmente, no formato [JWT]({{< relref "documentacao/json-web-token" >}}).

Em [jwt.io - id token](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbXktZG9tYWluLmF1dGgwLmNvbSIsInN1YiI6ImF1dGgwfDEyMzQ1NiIsImF1ZCI6IjEyMzRhYmNkZWYiLCJleHAiOjEzMTEyODE5NzAsImlhdCI6MTMxMTI4MDk3MCwibmFtZSI6IkphbmUgRG9lIiwiZ2l2ZW5fbmFtZSI6IkphbmUiLCJmYW1pbHlfbmFtZSI6IkRvZSJ9.bql-jxlG9B_bielkqOnjTY9Di9FillFb6IMQINXoYsw) temos um ID token de exemplo sendo decodificado no debugger e nele é possível ver as informações pessoais do usuário:

![Image](id-token-decoded.png "ID token decodificado")

### Como obter

Para se obter um token de identidade, temos duas opções:

- A aplicação informa ao Servidor OpenID a necessidade da geração e envio do ID token após a autenticação do usuário. Caso seja a primeira vez que o usuário acessa a aplicação, o provedor de autenticação irá solicitar o consentimento do usuário para enviar as informações após e, caso o usuário aceite, o token é enviado à aplicação

- A aplicação solicita o token ao Servidor OpenID utilizando o [token de acesso](https://doks-auth0.netlify.app/documentacao/autorizacao/#token-de-acesso)

### Utilidade

Utilidades do token:

- Demonstra que o usuário foi autenticado por uma entidade confiável (OpenID) e, portanto, pode confiar nas declarações sobre a identidade

- Personalizar a aplicação de acordo com os dados presentes no token. Exemplo: mostrar o nome do usuário na interface, exibir mensagem de feliz aniversário, montar um perfil, etc
