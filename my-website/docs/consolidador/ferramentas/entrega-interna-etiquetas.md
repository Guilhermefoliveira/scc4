---
sidebar_position: 11
---

# Entrega Interna de Etiquetas

Este guia detalha o funcionamento da tela de **Controle Interno de Etiquetas** no Consolidador. Esta funcionalidade foi projetada para que a gestão da agência possa controlar a distribuição de faixas de etiquetas físicas (SROs) para os seus operadores, registrando quem é o responsável por cada sequência.

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Entrega Interna de Etiquetas`.

> [![Tela de Controle Interno de Etiquetas](/img/ferramentas/controle-interno-etiquetas.png)](/img/ferramentas/controle-interno-etiquetas.png)
> *Tela de Controle Interno de Etiquetas*

---

## Para que serve esta tela?

O objetivo principal desta tela é a **rastreabilidade e a responsabilidade interna**. Ela cria um registro de qual operador recebeu qual faixa de etiquetas físicas, permitindo um controle rigoroso sobre o inventário de SROs e ajudando a identificar a origem de qualquer postagem em caso de necessidade.

**Principais Funções:**
* **Distribuir:** Entregar formalmente um lote de etiquetas para um membro da equipe.
* **Monitorar:** Visualizar quais faixas de etiquetas estão atualmente em posse de cada operador.
* **Receber Devoluções:** Registrar o retorno de etiquetas não utilizadas.
* **Consultar:** Pesquisar rapidamente por um SRO específico para saber a quem ele foi designado.

---

## O Fluxo de Trabalho na Tela

A tela é dividida em quatro painéis funcionais que representam o ciclo de vida de um lote de etiquetas.

### 1. Entrega de Etiquetas

Utilize este painel no canto superior esquerdo para registrar a entrega de uma nova faixa de SROs para um operador.

1.  **`ETIQUETA INICIAL:`** Insira o primeiro número da sequência de etiquetas que está sendo entregue (ex: `SS100000001BR`).
2.  **`ETIQUETA FINAL:`** Insira o último número da sequência (ex: `SS100000500BR`).
3.  **`ENTREGUE A:`** Digite o nome do colaborador que está recebendo esta faixa de etiquetas.
4.  Clique em **`SALVAR`**. O registro será criado e aparecerá na lista "LISTA DE ETIQUETAS ENTREGUES AGUARDANDO DEVOLUÇÃO".

### 2. Devolução de Etiquetas

Quando um operador devolve as etiquetas que não foram utilizadas de uma faixa, utilize este painel no canto superior direito.

1.  Primeiro, selecione a sequência correspondente na lista "LISTA DE ETIQUETAS ENTREGUES...".
2.  No painel **"RECEBER ETIQUETAS DESTA SEQUÊNCIA"**, preencha os campos:
    * **`ETIQUETA INICIAL:`** O primeiro número da sequência que está sendo devolvida.
    * **`ETIQUETA FINAL:`** O último número da sequência devolvida.
3.  Clique em **`SALVAR`**. O sistema registrará a devolução, dando baixa na pendência do operador.

> **💡 Conhecimento Operacional (Para a Agência):** Este processo é fundamental para o fechamento de turno ou ao final de um rolo de etiquetas. Ele garante que o inventário de etiquetas físicas da agência esteja sempre correto e que a responsabilidade do operador sobre aquela faixa seja encerrada.

### 3. Lista de Etiquetas Entregues Aguardando Devolução

Este painel no canto inferior esquerdo funciona como seu **controle de pendências**. Ele exibe todas as faixas de etiquetas que foram entregues aos operadores e que ainda não tiveram sua devolução registrada no sistema.

### 4. Pesquisar Etiqueta

Este painel à direita é uma ferramenta de **consulta rápida**.

* **Como usar:** No campo **`PESQUISAR ETIQUETA:`**, digite ou bipe um SRO específico. O sistema exibirá no campo abaixo os detalhes da faixa à qual aquele SRO pertence, incluindo o nome do operador responsável por ela.

> **💡 Conhecimento Operacional (Para a Agência):** A função "Pesquisar Etiqueta" é extremamente útil para auditorias rápidas. Se houver qualquer dúvida sobre uma postagem específica, você pode inserir o SRO aqui e saber imediatamente qual membro da equipe a processou.

> **🗣️ Para Orientar seu Cliente:** (Indireto) Este é um controle puramente interno, mas que beneficia o cliente. "Para garantir a máxima segurança e rastreabilidade dos seus envios, mantemos um controle rigoroso de todas as nossas etiquetas de rastreamento. Cada etiqueta é atribuída a um operador responsável em nosso sistema, assegurando a integridade do processo desde o momento em que seu objeto é postado."

---
