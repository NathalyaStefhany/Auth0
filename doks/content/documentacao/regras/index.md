---
title: "Regras"
description: ""
lead: "As regras são funções JavaScript que são executadas depois que um usuário se autentica em sua aplicação. Elas podem ser utilizadas para personalizar e estender os recursos do Auth0."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 8
---

## Fluxo

1. A aplicação solicita a autenticação para o Auth0
2. O Auth0 envia a solicitação para um provedor de identidade que é configurado por meio de uma [conexão]({{< relref "documentacao/conexoes" >}})
3. O usuário autentica com sucesso
4. O ID token e/ou token de acesso é passado pelo pipeline de regras e, em seguida, enviado para a aplicação.

{{<alert icon="⚠️" text="A ordem das regras no Auth0 é importante!" />}}
