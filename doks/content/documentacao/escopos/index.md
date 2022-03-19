---
title: "Escopos"
description: ""
lead: "Os escopos (permissões) definem as ações específicas que os aplicativos podem realizar em nome de um usuário."
draft: false
toc: true
images: []
menu:
  docs:
    parent: "auth0"
weight: 7
---

## Boas Práticas

Ao solicitar os escopos para o usuário, é necessário se certificar de que está solicitando apenas o que é necessário para que a aplicação funcione e que seja claramente especificado, caso contrário, o usuário pode não consentir.

Além disso, ao criar escopos personalizados para uma API, considere quais níveis de acesso a aplicação terá e projete os escopos de acordo.

## Escopos Solicitados x Escopos Concedidos

É necessário estar ciente que o usuário pode negar o acesso solicitado ou editar os escopos que foram concedidos fazendo com que a aplicação tenha menos acesso do que o solicitado. Caso algum desses cenários ocorra, a aplicação deve ser capaz de lidar com isso.

## Exemplo de caso de uso (api e aplicação própria)

Digamos que você esteja construindo uma API que fornece dados para um aplicativo de loja virtual que você também desenvolveu. Você define dois tipos de acesso: cliente e administrador. Os usuários do tipo administrador necessitam criar, editar, deletar e visualizar os produtos da sua loja, enquanto usuários do tipo cliente necessitam apenas visualizar os produtos.

Para fazer isso, você cria 4 escopos para a sua API:

- `create: product` -> autoriza a criação dos produtos
- `edit: product` -> autoriza a edição dos produtos
- `delete: product` -> autoriza a deleção dos produtos
- `read: product` -> autoriza a visualização dos produtos

Para o usuário administrador, foi atribuido os escopos `create: product`, `edit: product`, `delete: product` e `read: product`. Para o usuário cliente, foi atribuido o escopo `read: product`.

Definido os escopos de cada tipo de usuário, temos as seguintes etapas da aplicação até a chamada da API:

1. O cliente se autentica na aplicação
2. A aplicação solicita os escopos necessários
   {{<alert text="Por ser um aplicativo próprio, o consetimento do usuário será solicitado apenas se desabilitar a opção 'Allow Skipping User Consent' na API" />}}
3. A aplicação recebe o token de acesso com o escopo `read: product`
4. A aplicação chama um endpoint enviando o token junto
5. A API verifica se o usuário tem autorização para fazer a requisição

## OpenID Connect

Os escopos OpenID Connect (OIDC) são usados ​​pela aplicação durante a autenticação para autorizar o acesso aos detalhes de um usuário, como nome e data de nascimento. Depois que o usuário autoriza os escopos solicitados, as informações são retornadas em um ID Token e também ficam disponíveis por meio do endpoint [/userinfo](https://auth0.com/docs/api/authentication#user-profile) do Auth0.

Exemplo:

`scope: openid profile email`

O _openid_ no escopo é obrigatório pois indica que a aplicação pretende usar o OIDC para verificar a identidade do usuário. O _profile_ retorna informações básicas de perfil como nome, apelido e foto. O _email_ retorna o email.
