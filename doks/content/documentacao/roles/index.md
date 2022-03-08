---
title: "Roles"
description: ""
lead: ""
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 7
---

A ideia é atribuir permissões a usuários com base em sua função dentro de uma organização. Ele oferece uma abordagem simples e gerenciável para o gerenciamento de acesso que é menos suscetível a erros do que atribuir permissões aos usuários individualmente.

Portanto, é feito uma análise das necessidades dos usuários e os agrupa em funções com base nas responsabilidades em comum. Em seguida, é atribuido as funções para cada um dos usuários podendo ser uma ou mais e em cada função teremos as permissões/escopos.

## Vantagens

Para mostrar as vantagens de utilizar as _roles_, temos o seguinte exemplo:

Digamos que você está construindo uma aplicação de loja virtual e define dois tipos de acesso: cliente e administrador. Os usuários do tipo administrador necessitam criar, editar, deletar e visualizar os produtos da sua loja, enquanto usuários do tipo cliente necessitam apenas visualizar os produtos.

Para fazer isso, você cria 4 escopos para a sua API:

- `create: product` -> autoriza a criação dos produtos
- `edit: product` -> autoriza a editação dos produtos
- `delete: product` -> autoriza a deletação dos produtos
- `read: product` -> autoriza a visualização dos produtos

Para o usuário administrador, foi atribuido os escopos `create: product`, `edit: product`, `delete: product` e `read: product`. Para o usuário cliente, foi atribuido o escopo `read: product`.

Nesse exemplo, os usuários administrador e cliente são as _roles_ e para cada _role_ foi definido as permissões que teriam.

Se não tivessemos as _roles_, algumas coisas poderiam acontecer:

- Para cada usuário que criasse, seria necessário gerenciar cada um deles individualmente adicionando todos os _scopes_ necessários. No exemplo, temos uma quantidade pequena de escopo e funções, porém, se aumentasse, quando fosse definir as permissões do usuário, poderia esquecer de adicionar algum ou adicionar um que não era para ter. Portanto, os papéis/funções do usuário facilitam a atribuição das permissões para cada usuário pois só iremos dizer que o usuário é um administrador, por exemplo, e no administrador já terá todas as permissões necessárias.

- Todos os _scopes_ são enviados pelo token de acesso, portanto, se tivermos muitos _scopes_ por usuário, o JWT vai ficar grande e lento. Com uma simples _role_ isso não vai acontecer, pois a _role_ pode encapsular uma longa lista de permissões.

- Se precisar remover uma permissão de todos os usuários do tipo **cliente** sem ter definido as funções de cada usuário vai ser demorado pois vai ter que fazer esse processo de um em um. Com as _roles_, você altera a permissão em um lugar só.
