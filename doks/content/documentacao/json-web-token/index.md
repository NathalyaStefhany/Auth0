---
title: "JSON Web Token (JWT)"
description: ""
lead: "O JSON Web Token é um código em Base64 que armazena objetos JSON com as informações de autenticação (id token) e autorização (token de acesso)."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "autenticação e autorização"
weight: 3
---

Por utilizar o JSON teremos um token pequeno, mais fácil de assinar e a aplicação conseguirá realizar uma análise com maior facilidade.

É possível decodificar o token atráves do site [jwt.io](https://jwt.io/).

```text
⚠️ Importante

- Não se deve colocar dados sensíveis no JWT pois qualquer um pode decodificar o token;
- O token não pode ser revogado;
- O token deve ter uma vida útil pequena;
```

## Estrutura

O JWT é composto por 3 componentes básicos que são separados por **ponto final**:

[Token de exemplo](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbXktZG9tYWluLmF1dGgwLmNvbSIsInN1YiI6ImF1dGgwfDEyMzQ1NiIsImF1ZCI6IjEyMzRhYmNkZWYiLCJleHAiOjEzMTEyODE5NzAsImlhdCI6MTMxMTI4MDk3MCwibmFtZSI6IkphbmUgRG9lIiwiZ2l2ZW5fbmFtZSI6IkphbmUiLCJmYW1pbHlfbmFtZSI6IkRvZSJ9.bql-jxlG9B_bielkqOnjTY9Di9FillFb6IMQINXoYsw)

### Header

Contém as seguintes informações:

```bash
{
  "typ": "JWT",       # Tipo do token
  "alg": "HS256",     # Algoritmo hash utilizado para criar o token
  "kid": "NUYAMDJ"    # Chave ID
}
```

### Payload

Contém as informações do usuário, podendo ser informações pessoais (id token) ou informações de permissão (token de acesso).

```bash
{
  "sub": "auth0|123456",    # Quem é o dono do token
  "iat": 1311280970,        # Quando foi criado
  "name": "Jane Doe",
  "given_name": "Jane",
  "family_name": "Doe"
}
```

### Signature

Contém a assinatura única do token que é utilizado para verificar o remetente e garantir que o conteúdo é legítimo.

A sua geração é feita a partir de um algoritmo de criptografia e tem seu corpo com base no **header**, no **payload** e no **segredo-chave** definido pela aplicação. Portanto, para verificar se o token é válido precisamos ter em posse o segredo-chave e através dele geramos uma assinatura com o header e payload, e comparamos com a assinatura presente no token.
