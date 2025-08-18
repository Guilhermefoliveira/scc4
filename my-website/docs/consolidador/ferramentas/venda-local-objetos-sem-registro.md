---
sidebar_position: 7
---

# Venda Local - Objetos Sem Registro

Este guia detalha o funcionamento da tela de **Venda Local - Objetos Sem Registro** no Consolidador. Esta funcionalidade foi projetada para o lançamento rápido de vendas em lote de itens que **não possuem código de rastreamento individual (SRO)**, como Carta Simples ou Impresso Normal.

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Venda Local - Objetos Sem Registro`.

> [![Tela de Venda Local de Objetos sem Registro](/img/ferramentas/venda-local-semregistro.png)](/img/ferramentas/venda-local-semregistro.png)
> *Tela de Venda Local de Objetos sem Registro*

---

## Para que serve esta tela?

O objetivo desta tela é registrar a **quantidade total** de itens idênticos de um mesmo serviço de uma só vez, em vez de processar um por um. Os dados lançados aqui são posteriormente exportados para o sistema SARA para a devida conciliação financeira.

**Casos de uso:**
* Um cliente chega com um lote de 50 Cartas Simples para postar.
* Uma empresa envia um grande volume de Impressos (malas diretas não registradas).

> **💡 Conhecimento Operacional (Para a Agência):** Esta é a tela correta para qualquer serviço "simples" ou "impresso" que não gera SRO. Utilizá-la em vez das telas de Venda Sintética/Completa para esses itens garante que o processo de exportação para o SARA seja feito corretamente e agiliza muito o atendimento.

---

## O Fluxo de Trabalho de uma Venda em Lote

O processo é focado em registrar a totalidade dos objetos de uma só vez.

### Passo 1: Iniciar a Venda
1.  Nos campos **`CLIENTE`** e **`DEPARTAMENTO`** (ou `OS`), selecione para quem a venda está sendo realizada.
2.  Clique no botão **`INICIAR VENDA`** para habilitar os campos de lançamento.

### Passo 2: Lançar o Lote de Objetos
Agora, preencha os dados que representam o lote inteiro:

* **`SERVIÇO:`** Selecione o serviço sem registro correspondente (ex: CARTA SIMPLES).
* **`QUANTIDADE:`** Insira o número **total** de objetos idênticos naquele lote (ex: 50).
* **`PESO(g):`** Insira o peso de **uma única unidade** do lote. O sistema usará este valor para multiplicar pela quantidade e calcular o valor total do frete.
* **`OBS:`** Adicione observações, se necessário.
* **Opções Adicionais:** Marque `Posta Restante` ou `Carta Selada / Pré Franqueada` se aplicável ao lote.

### Passo 3: Adicionar o Lote à Venda
* Após preencher os dados do lote, clique no botão **`OK (F9)`**.
* O lote será adicionado como uma **única linha** na lista **"OBJETOS DA VENDA"**, já com o valor total calculado.

### Passo 4: Finalizar a Venda
* Após adicionar todos os lotes à lista, clique no botão **`FINALIZAR VENDA (ESC)`**. A transação será concluída e registrada.

> **🗣️ Para Orientar seu Cliente:** (Para agilizar o atendimento) "Para facilitar o lançamento do seu lote de [Cartas Simples], por favor, traga-as já contadas e separadas por tipo de serviço. Assim, conseguimos registrar a quantidade total de uma só vez em nosso sistema, e o seu atendimento será muito mais rápido."

---

## Opções e Gerenciamento

* **`Imprimir Comprovante ao Finalizar`**
    * Marque esta caixa de seleção **antes** de finalizar a venda se desejar que o sistema imprima um comprovante da transação.
* **`ÚLTIMAS VENDAS`**
    * Este painel à direita exibe um histórico das últimas vendas realizadas, permitindo uma consulta rápida. A opção `Ver venda de todos os usuários` permite ao administrador visualizar as vendas de toda a equipe.
* **`REMOVER OBJETO` e `CANCELAR VENDA`**
    * Antes de finalizar a venda, você pode selecionar uma linha de lote na lista "OBJETOS DA VENDA" e clicar em `REMOVER OBJETO` para excluí-la, ou clicar em `CANCELAR VENDA` para limpar todos os lotes da venda atual.

> **💡 Conhecimento Operacional (Para a Agência):** Muita atenção ao campo `Peso(g)`. O sistema sempre espera o **peso unitário** e o multiplica pela quantidade. Inserir o peso total do lote neste campo resultará em um cálculo de frete incorreto e prejuízo para a agência ou para o cliente.

---

