---
sidebar_position: 1
---

# Cadastro de Sequências Lógicas

Este guia detalha o funcionamento da tela de **Cadastro de Sequências Lógicas** no Consolidador. Esta funcionalidade é usada para gerenciar os lotes (ou "ranges") de códigos de rastreio (SROs) para seus clientes de contrato. O cadastro de uma sequência aqui permite que o sistema atribua SROs automaticamente durante o processo de venda, agilizando o atendimento e reduzindo erros de digitação.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Cadastro de Sequências Lógicas`.

> [![Tela de Cadastro de Sequências Lógicas](/img/cadastro_sequencia_logica/cadastro-sequencia-logica.png)](/img/cadastro_sequencia_logica/cadastro-sequencia-logica.png)
> *Tela de Cadastro de Sequências Lógicas*

---

## Para que serve esta tela?

O objetivo principal desta tela é **alimentar o sistema com faixas de SROs válidas** para seus clientes de contrato. Uma vez que uma sequência está cadastrada, o Consolidador pode puxar o próximo SRO disponível automaticamente durante uma venda, eliminando a necessidade de o operador digitar o código de rastreio manualmente.

Isso também serve como uma ferramenta de **controle de inventário de SROs**, mostrando quantas etiquetas já foram utilizadas e quantas ainda restam para cada cliente e serviço.

---

## Parte 1: Cadastrando uma Nova Sequência de SROs

O processo de cadastro é realizado no painel esquerdo. Primeiro, siga os passos comuns:

1.  **`CLIENTE:`** Selecione na lista o cliente de contrato para o qual deseja cadastrar a sequência.
2.  **`SERVIÇO:`** Selecione o serviço dos Correios correspondente à faixa de SROs (ex: SEDEX, PAC).

Após selecionar o cliente e o serviço, escolha um dos dois métodos abaixo para cadastrar a faixa.

### Método 1: Inserção Manual de Faixas Físicas

Use este método quando você receber dos Correios um rolo de etiquetas físicas ou uma faixa de SROs pré-definida.

1.  Na seção **"INSERIR MANUALMENTE"**, preencha os campos:
    * **`QUANTIDADE:`** O número total de etiquetas na faixa (ex: 100).
    * **`FAIXA INICIAL:`** O primeiro SRO da sequência (ex: `SS123456789BR`).
    * **`FAIXA FINAL:`** O último SRO da sequência.
2.  Clique no botão **`INSERIR`**.

> **💡 Conhecimento Operacional (Para a Agência):** A inserção manual é muito útil, mas requer atenção máxima para não haver erros de digitação na faixa inicial ou final, o que invalidaria todo o lote cadastrado.

---

## Parte 2: Gerenciando as Sequências Cadastradas

A grade à direita, **"SEQUÊNCIAS LÓGICAS DO CLIENTE"**, exibe um resumo de todas as faixas de SROs ativas para o cliente selecionado.

* **Análise das Colunas:**
    * **`UTILIZADAS`:** Mostra quantos SROs daquela faixa já foram usados.
    * **`RESTANTES`:** Mostra quantos SROs ainda estão disponíveis. Esta é a coluna mais importante para o seu controle.
* **Ação Disponível:**
    * **`CANCELAR SEQUÊNCIA SELECIONADA`:** Se uma faixa foi cadastrada por engano ou não será mais utilizada, selecione-a na grade e clique neste botão. O sistema pedirá uma confirmação para "Suspender a Faixa", tornando-a inativa.

> **💡 Conhecimento Operacional (Para a Agência):** Monitore a coluna **`RESTANTES`** para seus principais clientes. Quando o número estiver baixo, seja proativo e solicite/insira uma nova faixa para evitar que o cliente fique sem SROs disponíveis no meio de uma postagem de alto volume.

> **🗣️ Para Orientar seu Cliente:** (Quando o cliente perguntar sobre as etiquetas) "Para agilizar seu atendimento, nosso sistema gerencia suas faixas de códigos de rastreio. Quando notamos que seus códigos estão acabando, já solicitamos um novo lote aos Correios para garantir que sua operação nunca pare." ou "Se você receber um novo rolo de etiquetas físicas dos Correios, por favor, nos informe a numeração inicial e final para que possamos cadastrá-la em nosso sistema."
