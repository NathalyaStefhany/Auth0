---
title: "User Metadata e App Metadata"
description: ""
lead: "O Auth0 fornece um sistema abrangente para armazenar metadados no perfil dos usuários."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 9
---

## User Metadata

Armazena informações do usuário que não afetam as funcionalidades principais da aplicação. Esses dados podem ser editados pelos usuários conectados.

Ex: preferência de cor, linguagem, etc

## App Metadata

Armazena informações como permissões e IDs externos que podem afetar o acesso do usuário aos recursos. Esses dados não podem ser editados pelos usuários e há restrições para o que pode ser armazenado neste campo.

Ex: plano de assinatura (1 mês, anual)

## Gerenciamento

É possível criar e atualizar metadados utilizando **Regras**, **API de Autenticação**, **API de Gerenciamento** e **Dashboard do Auth0**.

### Regras

As regras são funções JavaScript executadas como parte do processo de autenticação Auth0 (antes da autorização). Usando regras é possível ler, criar ou atualizar metadados do usuário e fazer com que essas alterações afetem os resultados do processo de autorização.
