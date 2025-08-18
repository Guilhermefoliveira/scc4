---
sidebar_position: 1
---

# Cadastros de Layout de Importação

Este guia detalha o funcionamento da tela de **Cadastro de Layout de Importação** no Consolidador. Esta funcionalidade permite que a agência crie "mapas" personalizados para ler arquivos de importação em lote (nos formatos CSV ou Tabulado) que não seguem o modelo padrão do sistema.

**Como Acessar:** No menu superior do Consolidador, acesse `Importações` e clique em `Cadastro de Layout de Importação`.

> [![Tela de Cadastro de Layout de Importação](/img/importacoes/gerenciamento-layouts-importacao.png)](/img/importacoes/gerenciamento-layouts-importacao.png)
> *Tela de cadastro de de layouts de importação.*

---

## Para que serve esta tela?

O principal objetivo é oferecer **flexibilidade** e um **serviço de alto valor** aos seus clientes. Se um cliente importante possui um sistema (ERP, e-commerce, etc.) que já exporta os dados de envio em um formato de planilha específico, você não precisa pedir para ele mudar o sistema dele. Em vez disso, você usa esta tela para "ensinar" o Consolidador a ler o arquivo do seu cliente.

> **🗣️ Para Orientar seu Cliente:** (Quando o cliente perguntar sobre importar seus próprios arquivos) "Não se preocupe em adaptar sua planilha ao nosso padrão. Apenas nos envie um exemplo do arquivo que seu sistema gera e nos informe o que cada coluna significa (ex: coluna 1 é o nome, coluna 2 é o CEP, etc.). Nós configuraremos nosso sistema para ler seu arquivo perfeitamente."

---

## Parte 1: Criando um Novo Layout de Importação

Este processo consiste em mapear as colunas do arquivo do seu cliente para os campos correspondentes no Portal Postal.

**Pré-requisito:** Antes de começar, tenha em mãos um arquivo de exemplo do seu cliente e, se possível, um "mapa" das colunas (ex: Coluna 1 = Nome do Destinatário, Coluna 2 = CEP, etc.).

**Passo a Passo:**

1.  No painel esquerdo, clique no botão **`CRIAR NOVO LAYOUT`**.
2.  Selecione o formato do arquivo do seu cliente na aba correspondente: **`LAYOUT DE ARQUIVO CSV`** ou **`LAYOUT DE ARQUIVO TABULADO`**.
3.  Preencha os campos iniciais:
    * **NOME DO LAYOUT:** Dê um nome claro e descritivo. Ex: `CSV_CLIENTE_XPTO_V2`.
    * **PULAR LINHAS:** Se o arquivo do seu cliente tem uma ou mais linhas de cabeçalho que devem ser ignoradas, insira o número de linhas a serem puladas aqui (geralmente `1`). Se não houver cabeçalho, deixe como `0`.
4.  **Realize o Mapeamento de Colunas:** Este é o passo mais importante. Para cada campo na tela (ex: `Nome do Destinatário`), você deve digitar o **número da coluna** correspondente no arquivo do seu cliente.
    * **Exemplo:** Se no arquivo do seu cliente o CEP do destinatário está na **coluna 4**, você deve inserir o número `4` no campo `CEP do Destinatário`.
5.  Preencha o mapeamento para todos os campos necessários, organizados por seções:
    * `Nº DO OBJETO / IDENTIFICADOR`
    * `DADOS DO DESTINATÁRIO`
    * `SERVIÇO E ADICIONAIS`
    * `PESO E DIMENSÕES`
    * `OUTROS DADOS`
6.  Após mapear todas as colunas, clique no botão **`SALVAR LAYOUT`** no final da tela.

> **💡 Conhecimento Operacional (Para a Agência):** Após criar e salvar um novo layout, **sempre realize um teste prático**. Vá para a tela de `Importações > Importação de Arquivo de Postagem`, selecione o novo layout que você criou na lista e tente importar um arquivo de teste real do cliente para garantir que o mapeamento foi feito corretamente antes de colocá-lo em produção.

---

## Parte 2: Gerenciando Layouts Existentes

O painel esquerdo da tela lista todos os **Layouts Cadastrados** e oferece ferramentas para gerenciá-los.

### Duplicar um Layout

Esta função é um grande acelerador de trabalho.
1.  Na lista de "Layouts Cadastrados", selecione um layout que seja parecido com o novo que você precisa criar.
2.  Clique no botão **`DUPLICAR LAYOUT SELECIONADO`**.
3.  O sistema criará uma cópia. Basta renomeá-la e ajustar apenas as colunas que são diferentes, em vez de começar do zero.

### Excluir um Layout

Para remover um layout que não é mais utilizado:
1.  Selecione o layout desejado na lista.
2.  Clique em **`EXCLUIR LAYOUT SELECIONADO`**.
3.  O sistema pedirá a confirmação de um usuário com permissão de administrador para concluir a exclusão.

> **💡 Conhecimento Operacional (Para a Agência):** É uma boa prática revisar seus layouts cadastrados a cada 6 meses para excluir os que pertencem a clientes antigos ou que foram substituídos por versões mais novas. Manter a lista limpa facilita a operação no dia a dia.

---
