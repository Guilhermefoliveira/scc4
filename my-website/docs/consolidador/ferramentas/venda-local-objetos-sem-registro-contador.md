---
sidebar_position: 8
---

# Venda Local - Objetos Sem Registro por Contador

Este guia detalha o funcionamento da tela de **Venda Local - Objetos sem Registro por Contador**, também conhecida como **Lançamento de Máq. de Franquia**. Ela é utilizada para lançar no Consolidador as vendas de objetos sem registro que são processados através de uma máquina de franquear.

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Venda Local - Objetos Sem Registro por Contador`.

> [![Tela de Venda Local de Objetos Simples por Contador](/img/ferramentas/venda-local-porcontador.png)](/img/ferramentas/venda-local-porcontador.png)
> *Tela de Venda Local de Objetos Simples por Contador*

---

## Para que serve esta tela?

O objetivo desta tela é registrar a produção de uma máquina de franquear, utilizando como base os **números do contador físico** do equipamento, e não a contagem individual de objetos.

Este processo é fundamental para:
* **Conciliar a produção física** da máquina com os registros digitais.
* **Atribuir corretamente os custos** de postagem a um cliente específico.
* **Preparar os dados** para a posterior exportação e conciliação com o sistema SARA.

> **Pré-requisito:** Antes de usar esta tela, certifique-se de que a sua máquina de franquear já foi devidamente cadastrada no sistema através da tela `Configurações > Cadastro de Máquinas de Franquia`.

---

## O Fluxo de Trabalho de Lançamento por Contador

### Passo 1: Selecionar o Contexto do Lançamento
No painel **"VENDA DE OBJETOS SIMPLES POR CONTADOR"**, defina as informações gerais do lote a ser lançado:

1.  **`DATA DO LANÇAMENTO:`** Selecione a data em que a produção foi realizada.
2.  **`MAQ. DE FRANQUIA:`** Escolha na lista a máquina de franquear que foi utilizada.

### Passo 2: Lançar a Produção da Máquina
Agora, preencha os detalhes do lote de objetos que foi processado na máquina:

* **`CLIENTE:`** Selecione o cliente ao qual este lote de postagem pertence.
* **`DEPTO.:`** Se aplicável, selecione o departamento do cliente.
* **`SERVIÇO:`** Escolha o serviço correspondente (ex: CARTA SIMPLES).
* **`INICIAL:`** Digite o número que estava no contador da máquina **antes** de iniciar a postagem deste lote.
* **`FINAL:`** Digite o número que estava no contador da máquina **após** finalizar a postagem do lote.
* **`PORTE:`** Insira o porte (faixa de peso/preço) dos objetos.
* **`QTD.:`** A quantidade de objetos é calculada automaticamente com base nos números `INICIAL` e `FINAL`.
* **`TOTAL:`** Insira o valor total do lote faturado.
* **`ADICIONAR LANÇAMENTO`:** Clique no ícone de `+` para adicionar este lançamento à grade **"LANÇAMENTOS REALIZADOS"**.

> **💡 Conhecimento Operacional (Para a Agência):** É uma excelente prática manter um caderno de controle físico ao lado de cada máquina de franquear. Anote a data, o cliente, o serviço e os números de contador inicial e final de cada lote. Use esses dados para fazer o lançamento no sistema, garantindo máxima precisão.

### Passo 3: Gerenciar os Lançamentos Realizados
A grade central exibe todos os lançamentos que você adicionou na sessão atual. No painel **"AÇÕES"** à esquerda, você pode gerenciar esses lançamentos:

* **`IMPRIMIR RELATÓRIO DA MÁQUINA`**
    * **Função:** Gera um relatório em PDF com todos os lançamentos realizados para a data e a máquina selecionadas.
* **`ALTERAR CLIENTE DOS SELECIONADOS`**
    * **Função:** Permite corrigir o cliente de um lançamento. Selecione a linha na grade, clique neste botão e escolha o cliente correto.
* **`ESTORNAR ÚLTIMO LANÇAMENTO`**
    * **Função:** Botão de "desfazer". Remove o último lançamento que você adicionou à grade. A ação geralmente requer permissão de administrador.

> **🗣️ Para Orientar seu Cliente:** (Indireto, sobre a precisão da fatura) "Para os seus envios que são processados em nossa máquina de franquear, mantemos um controle rigoroso baseado nos contadores do equipamento. Cada lote de produção é lançado em nosso sistema, o que garante que a sua fatatura reflita com exatidão apenas o que foi efetivamente processado para você."

---
