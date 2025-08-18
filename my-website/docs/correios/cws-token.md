---
sidebar_position: 2
---

# Guia de Configuração: Correios Web Service (CWS) e Portal Postal

Este documento detalha o processo de cadastro e configuração do token do Correios Web Service (CWS) no Portal Postal para habilitar a Pré-Postagem de Objetos (PPN).

## Parte 1: CWS - Correios Web Service

O primeiro passo é obter o token de acesso na plataforma dos Correios.

**Pré-requisitos:**

* Login e senha do seu **ID Correios**.

### Obtendo o Token de Acesso

1. Acesse o site do **Correios Web Service** pelo link indicado e faça login.
   Link do site dos [Correios Web Service](https://cws.correios.com.br/).
    > [![Tela de login do Correios Web Service](../../static/img/cws_imagens/login.png)](https://docs-scc4.web.app/assets/images/login-5025f691070e4554b15a5a7579966742.png)

2. Após o login, navegue no menu até a opção **"Gestão de Acesso à API"**.
    > [![Menu principal do CWS destacando 'Gestão de Acesso à API'](../../static/img/cws_imagens/menu-gestao.png)](https://docs-scc4.web.app/assets/images/menu-gestao-100036a3554b18f9472ff64c2632757a.png)

3. Na tela de "Gestão de Acesso", copie o **login** informado. Você precisará dele mais tarde para configurar o Portal Postal.
    > [![Tela de 'Gestão de Acesso à API' com o campo de login destacado](../../static/img/cws_imagens/gestao-usuario.png)](https://docs-scc4.web.app/assets/images/gestao-usuario-e2dd948c0b90270b2bb6926774afa1c7.png)

4. Insira novamente a sua senha do ID Correios no campo correspondente e clique em **"Regerar código"**.
    > [![Campo de senha para regerar o código/token](../../static/img/cws_imagens/gestao-senha.png)](https://docs-scc4.web.app/assets/images/gestao-senha-0ec118bab8ab96d28b8f82d3c8e2c38e.png)

5. Um novo token será gerado. Copie este código e salve-o em um local seguro.
    > [![Token de acesso gerado na tela](../../static/img/cws_imagens/token-gerado.png)](https://docs-scc4.web.app/assets/images/token-gerado-c5dcbab4c079fb4ffc0428b300a8bde2.png)

> **Observação Importante:**
> Antes de gerar um novo token, verifique com a sua equipe se um token já não foi gerado anteriormente. Dependendo da empresa, o mesmo token pode ser utilizado em múltiplos sistemas. Caso não haja nenhum token em uso, pode seguir com o tutorial.
> [![Menu 'Início' com a opção 'Credenciais' destacada](../../static/img/cws_imagens/ja-possui-token-cuidado.png)](https://docs-scc4.web.app/assets/images/ja-possui-token-cuidado-ed6acc9711ba68d43e523a27f2ae3399.png)

### Validando as Credenciais

1. Ainda no ambiente do Correios Web Service, retorne ao menu **"Início"** e clique em **"Credenciais"**.
    > [![Menu 'Início' com a opção 'Credenciais' destacada](../../static/img/cws_imagens/credenciais-inicio.png)](https://docs-scc4.web.app/assets/images/credenciais-inicio-ee1b7463511e80ae40f5c307762d7e9e.png)

2. Na tela de credenciais, preencha os seguintes campos:
    * **Código de acesso API:** Cole o token que você copiou e salvou no passo anterior.
    * **Contrato:** Este campo pode ser deixado em branco.
    * **Cartão de postagem:** Digite o número do cartão exatamente como está cadastrado no Portal Postal, **incluindo os dois zeros ("00") no início**.
    > [![Tela de 'Credenciais' com os campos preenchidos](../../static/img/cws_imagens/informe-credenciais.png)](https://docs-scc4.web.app/assets/images/informe-credenciais-88285ce82a05934d055b7db3fb6de7d1.png)

3. Clique em **"Gerar Token"**. Este segundo token serve apenas para validar as informações.

4. Assim que o cartão de postagem for validado com sucesso, você pode fechar a janela. Não é necessário salvar este segundo token.

Com o login e o primeiro token em mãos, o próximo passo é configurar o Portal Postal.

---

## Parte 2: Portal Postal - Web da Agência

Agora, vamos inserir as informações do CWS no cadastro do cliente dentro do Portal Postal.

### Configurando o Cliente

1. No menu lateral do Portal Postal, acesse **"Cadastros"** e clique em **"Clientes"**.
    > [![Menu lateral do Portal Postal com 'Cadastros' e 'Clientes' destacados](../../static/img/cws_imagens/cadastro-clientes.png)](https://docs-scc4.web.app/assets/images/cadastro-clientes-2266a14729f5f2c1a9f779455b18ddff.png)

2. Localize e selecione o cliente que deseja configurar. Abra a seção **"Contrato ECT"**.
    > [![Tela de cadastro do cliente com a aba ou seção 'Contrato ECT' em destaque](../../static/img/cws_imagens/contrato-ect.png)](https://docs-scc4.web.app/assets/images/contrato-ect-88b8df9f43c69b4cc7610b18cc93b651.png)

3. Verifique se os dados do contrato estão atualizados conforme a nova política dos Correios e se os campos obrigatórios (como cartão de postagem e logística reversa) estão preenchidos.

4. Localize a seção de integração com o Correios Web Service e preencha os campos:
    * **Login:** Insira o login que você copiou do site CWS.
    * **Senha de acesso à API:** Cole o primeiro token que você gerou e salvou.
    > [![Campos de integração 'Login' e 'Senha de acesso à API' preenchidos](../../static/img/cws_imagens/login-senha-api.png)](https://docs-scc4.web.app/assets/images/login-senha-api-86ddfdac2fe93f1dad8521366e030901.png)

5. Marque a opção **"PPN"** como ativada e clique em **"Salvar"** para registrar as alterações.
    > [![Checkbox 'PPN' ativado e botão 'Salvar' em destaque](../../static/img/cws_imagens/ppn-salvar.png)](https://docs-scc4.web.app/assets/images/ppn-salvar-f02f79ec9a96194560ec73f05a84e56c.png)

### Testando a Configuração

1. Para garantir que a integração foi bem-sucedida, clique no botão **"Testar funcionamento da API"**.
    > [![Botão 'Testar funcionamento da API' em destaque no cadastro do cliente](../../static/img/cws_imagens/testar-api.png)](https://docs-scc4.web.app/assets/images/testar-api-8772cccd5382d29a2e72850aea62fc94.png)

2. Se a configuração estiver correta, uma mensagem de sucesso será exibida.
    > [![Pop-up ou mensagem de sucesso confirmando a conexão com a API](../../static/img/cws_imagens/sucesso.png)](https://docs-scc4.web.app/assets/images/sucesso-ed7b50dda0a712b6d7659a58764d89bf.png)

3. Logo abaixo, o portal exibirá a lista de APIs liberadas para este cliente. Verifique se a **API "Pré-postagem" (código 36)** está na lista, pois ela é essencial para a emissão das etiquetas.
    > [![Lista de APIs liberadas, com destaque para a 'Pré-postagem - 36'](../../static/img/cws_imagens/principais-apis.png)](https://docs-scc4.web.app/assets/images/principais-apis-04e743816968ddec2fa788d994b70fb9.png)

4. Por fim, realize um teste prático: gere uma nova etiqueta de postagem diretamente pela web do cliente.

5. Se a etiqueta for emitida corretamente e contiver o **código de rastreamento (SRO)**, o processo foi finalizado com sucesso!
    > [![Exemplo de uma etiqueta gerada com sucesso, mostrando o código SRO](../../static/img/cws_imagens/etiqueta-gerada.png)](https://docs-scc4.web.app/assets/images/etiqueta-gerada-107b59bfa59f777ea2a8c83718addcec.png)

---
