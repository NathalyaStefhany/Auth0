---
title: "Tenant"
description: ""
lead: "Quando desenvolvemos uma aplicação, normalmente utilizamos diferentes ambientes para diferentes estágios do ciclo de vida (desenvolvimento, homologação e produção) e no Auth0 não é diferente. É interessante termos um tenant para cada ambiente pois, por exemplo, os usuários finais não devem conseguir acessar a aplicação que está em fase de teste. Portanto, tendo um tenant para cada ambiente, conseguimos separar quais pessoas irão ter acesso a aplicação para cada fase de desenvolvimento."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 2
---

{{<alert text="Tenant é como se fosse uma configuração de autenticação e autorização para cada ambiente da aplicação"/>}}

## Criação

Para criar um novo tenant, é necessário clicar no canto superior esquerdo que mostra em qual tenant está e lá teremos a opção de criar um novo.

Quando for definir o nome do tenant, é necessário ter certeza do nome pois ele será utilizado para criar o domínio e não pode ser alterado (só é possível personalizar o domínio se tiver uma assinatura).

![Image](create.png "Criar um novo tenant")

## Configurações

Caso queira editar, adicionar novos membros ou visualizar informações do tenant, basta ir em **Settings** pelo painel esquerdo ou pelo canto superior esquerdo no mesmo local que cria um novo tenant.

É importante preencher os dados básicos como o nome que será exibido para o usuário em **Friendly Name**, adicionar a logo da empresa em **Logo URL** e adicionar o e-mail e/ou url de suporte para o usuário conseguir entrar em contato (**Support Email** e **Support URL**). Esses dados serão utilizados na tela de login da nossa aplicação.

Além disso, nas configurações avançadas, podemos definir se as sessões serão persistentes, ou seja, o usuário não precisará fazer o login novamente quando fechar e abrir o navegador. Também temos as informações do tempo máximo de inatividade e de depois de quanto tempo deverá exigir o login novamente.

![Image](settings.png "Configurações do tenant")
