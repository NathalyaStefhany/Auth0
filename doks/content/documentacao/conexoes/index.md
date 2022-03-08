---
title: "Conexões"
description: ""
lead: "No Auth0 temos 4 tipos de conexões para o usuário: banco de dados, redes sociais, corporativas e sem senha (login por e-mail ou SMS)."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 5
---

![Image](connections.png "Conexões")

## Banco de dados

As configurações das conexões de bancos de dados podem ser feitas em <span style="color:#5853ed">Authentication -> Database</span>.

Criado um banco de dados, se acessarmos ele, veremos a aba _Applications_. Nessa aba é possível definir quais aplicações irão utilizar o banco de dados para login.

### Adicionar usuário

Para adicionar um novo usuário no banco de dados, é necessário que pelo menos uma aplicação utilize o banco. Tendo uma aplicação, quando for criar um novo usuário é possível selecionar a conexão que deseja:

![Image](database-user.png "Adicionar usuário no banco de dados de conexão")

### Testar conexão

Para testar a conexão do banco, deve-se navegar para <span style="color:#5853ed">Authentication -> Database</span> e clicar em um determinado banco. Feito isso, teremos a aba _Try Connection_ que te redirecionará para uma página de login para realizar o teste.
