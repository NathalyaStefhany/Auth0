---
title: "APIs"
description: ""
lead: ""
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 4
---

Para criar uma API, precisamos definir um identificador exclusivo. O Auth0 recomenda que utilize uma URL (não precisa estar disponível publicamente), porém atualmente seguimos o padrão de **api-nome-projeto**.

![Image](apis.png "Criar APIs")

Quando clicado em uma API, somos redirecionados para as configurações e teremos algumas abas como:

| **Aba**                           | **Descrição**                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configurações                     | Configura algumas informações em relação a API como o tempo de expiração do token e permitir o acesso offline                                                                                                                                                                                                                                             |
| Permissões                        | Define todas as permissões que são utilizadas pela API                                                                                                                                                                                                                                                                                                    |
| Aplicações Máquinas para Máquinas | Lista todas as aplicações que poderão solicitar o [token de acesso](https://doks-auth0.netlify.app/documentacao/autorizacao/#token-de-acesso) para a API. As aplicações devem ser do tipo **Machine to Machine Application** ou **Regular Web Application**. Além disso, é possível adicionar escopos/permissões nas aplicações para limitar o seu acesso |
| Teste                             | Faz uma requisição para gerar o token de acesso utilizando um dos aplicativos autorizados na aba **Machine to Machine Applications**                                                                                                                                                                                                                      |
