---
sidebar_position: 8
---

# Cadastro de Identificação de PPNs

Este guia detalha o funcionamento da tela de **Cadastro de Identificação Automática de PPNs**, uma ferramenta poderosa para otimizar o processo de aferição no Consolidador.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Cadastro de Identificação de PPNs`.

> [![Tela de Cadastro de identificação de PPNs](/img/cadastro_identificacao_ppns/cadastro-identificacao-ppns.png)](/img/cadastro_identificacao_ppns/cadastro-identificacao-ppns.png)
> *Tela de cadastro de identificação de PPNs.*

---

## Para que serve esta tela?

O objetivo desta funcionalidade é **automatizar a associação de uma encomenda a um cliente específico da sua AGF**, especialmente quando este cliente utiliza um **contrato de terceiros** (por exemplo, de um hub de e-commerce, de uma franqueadora ou de um parceiro logístico).

Ao criar uma regra aqui, quando um operador da sua agência bipar uma etiqueta de PPN no Consolidador, o sistema lerá os dados do remetente e, se corresponderem a uma regra cadastrada, associará automaticamente a venda àquele cliente, sem a necessidade de seleção manual.

### Quando Usar (e Quando NÃO Usar) esta Função

> **ATENÇÃO: A REGRA DE OURO**
> Esta funcionalidade só funciona corretamente se o conjunto de informações do remetente for **único para cada cliente**.
>
> **NÃO CRIE UMA REGRA** se clientes diferentes utilizam o mesmo contrato de terceiro e possuem **exatamente as mesmas informações de remetente** (mesmo nome e mesmo CEP). Se o fizer, o sistema associará **todas** as vendas que corresponderem àquela regra a um único cliente, causando erros de faturamento.

---

## Como Criar uma Nova Regra de Identificação

O processo é realizado no painel esquerdo da tela, chamado **"IDENTIFIQUE OS DADOS DA PPN DO CLIENTE"**.

### Método 1 (Recomendado): Via Pesquisa de SRO

Este é o método mais seguro, pois utiliza dados reais de uma etiqueta e minimiza erros de digitação.

1.  Tenha em mãos uma etiqueta real de um pacote do cliente que você deseja cadastrar.
2.  No campo **SRO**, digite ou bipe o código de rastreamento da etiqueta.
3.  Clique no botão **PESQUISAR DADOS DA PPN**. O sistema buscará as informações daquela pré-postagem e preencherá os campos abaixo (ID Correios, Cartão de Postagem, Nome do Remetente, etc.).

### Método 2: Preenchimento Manual

Você também pode digitar manualmente as informações que servirão de base para a regra.

### Passos para a Criação da Regra

1.  **Preencha os Dados:** Utilize um dos métodos acima para preencher os dados de identificação.
2.  **Selecione os Campos-Chave:** Marque as caixas de seleção ao lado dos campos que o sistema usará para identificar o cliente.
    > **💡 Conhecimento Operacional (Para a Agência):** Os campos mais eficazes e comumente usados para criar uma regra única e segura são **"Nome do Remetente"** e **"CEP do Remetente"**. Você também pode usar "Observação da PPN" se o cliente utiliza essa informação para diferenciar departamentos, por exemplo.
3.  **Associe ao Cliente da AGF:**
    * No campo **CLIENTE**, digite o nome ou código do cliente (da sua base de dados da AGF) ao qual a venda será associada.
    * Se aplicável, selecione um **DEPTO.** (Departamento) específico daquele cliente.
4.  **Salve a Regra:** Clique no botão **`SALVAR IDENTIFICAÇÃO DE PPN PARA ESTE CLIENTE`**.

A nova regra aparecerá imediatamente na tabela do painel direito.

> **🗣️ Para Orientar seu Cliente:** (Quando precisar dos dados para criar a regra) "Para que nosso sistema identifique seus pacotes automaticamente, preciso que me confirme exatamente qual **Nome de Remetente** e **CEP de Remetente** aparecem nas suas etiquetas quando você usa o contrato do [Nome do Terceiro]. Com essas informações, o processo no nosso balcão será muito mais rápido para você."

---

## Gerenciando Regras Existentes

O painel direito da tela, **"IDENTIFICAÇÕES AUTOMÁTICAS DE PPNs CADASTRADAS"**, lista todas as regras que você já criou.

* **Visualização:** Aqui você pode conferir todas as regras ativas, vendo qual cliente está associado a quais informações de remetente.
* **Exclusão de uma Regra:**
    1.  Clique na regra que deseja remover. A linha ficará selecionada.
    2.  Clique no botão **`EXCLUIR IDENTIFICAÇÃO SELECIONADA`**.
    3.  A regra será removida e o sistema não fará mais aquela associação automática.

> **💡 Conhecimento Operacional (Para a Agência):** É uma boa prática revisar esta lista de regras periodicamente (a cada 3 ou 6 meses) para remover identificações de clientes que não operam mais com você ou que mudaram suas informações de remetente. Manter esta lista limpa e atualizada evita erros operacionais.