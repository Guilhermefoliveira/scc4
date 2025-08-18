---
sidebar_position: 4
---

# Venda Local - Sintética

Este guia detalha o funcionamento da tela de **Venda Local - Sintética** no Consolidador. Esta é uma das principais telas de produção para o atendimento de balcão, projetada para registrar vendas de forma rápida, seja para clientes avulsos ou para clientes de contrato que chegam à agência sem uma etiqueta PPN pré-existente.

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Venda Local - Sintética`.

> [![Tela de Venda Local Sintética](/img/ferramentas/venda-local-sintetica.png)](/img/ferramentas/venda-local-sintetica.png)
> *Tela de Venda Local Sintética*

---

## Para que serve esta tela?

Esta tela é o seu ponto de partida para registrar uma postagem **do zero**. Ela é ideal para:

* **Clientes de Balcão (Avulsos):** Processar o envio de um cliente que não possui contrato e chegou com um pacote para despachar.
* **Clientes de Contrato sem PPN:** Atender um cliente de contrato que, por algum motivo, não gerou a etiqueta PPN na Web do Cliente.
* **Flexibilidade:** A tela também permite "puxar" os dados de uma PPN existente, caso o operador digite um SRO já pré-postado.

---

## O Fluxo de Trabalho de uma Venda Sintética

O processo segue uma sequência lógica para construir a postagem passo a passo.

### Passo 1: Iniciar a Venda

Antes de inserir os dados do pacote, você precisa iniciar uma "sessão de venda" para um cliente.

1.  No campo **`CLIENTE`**, selecione o cliente que está realizando a postagem (pode ser um cliente genérico como "BALCÃO A VISTA").
2.  Se aplicável, selecione o **`DEPARTAMENTO`**.
3.  Clique no botão **`INICIAR VENDA`**. O sistema agora está pronto para receber os dados dos objetos.

### Passo 2: Preencher os Dados do Objeto

Para cada pacote que o cliente deseja enviar, preencha os campos da esquerda:

* **`SERVIÇO:`** Selecione o serviço dos Correios (ex: PAC, SEDEX).
* **`SRO:`** Digite ou bipe o código da etiqueta física que será usada no pacote. Se você tiver uma Sequência Lógica cadastrada para o cliente, o sistema pode preencher isso automaticamente.
* **`CEP:`** Digite o CEP do destinatário e clique na lupa (`🔍`) para que o sistema busque o endereço.
* **`PESO(g)` e `MEDIDAS(cm):`** Preencha com os dados aferidos na sua balança e com a régua.
* **`DESTINATÁRIO:`** Campo opcional para o nome do destinatário.
* **`RM, AE, AR, MP, PR, VD:`** Marque os serviços adicionais necessários.
* Clique em **`OK (F9)`** para adicionar este objeto à venda. O item aparecerá na lista **"ETIQUETAS PROCESSADAS"**.

Repita o Passo 2 para todos os pacotes daquele cliente.

### Passo 3: Finalizar a Venda

Após adicionar todos os objetos à lista "ETIQUETAS PROCESSADAS":

1.  Confira a lista para garantir que todos os itens estão corretos.
2.  Clique no botão **`FINALIZAR VENDA (ESC)`**. O sistema processará a venda, e os objetos estarão prontos para a etapa de expedição.

---

## Funcionalidades Adicionais e Dicas de Eficiência

### O Botão "Utilizar Pré-Postagem"
Esta função conecta a Venda Sintética com o fluxo de PPN, oferecendo grande flexibilidade.

* **Como funciona:** Se, no campo `SRO`, você bipar uma etiqueta que já foi gerada pelo cliente na Web do Cliente (uma PPN), o botão **`UTILIZAR PRÉ-POSTAGEM`** ficará ativo. Ao clicar nele, o sistema preencherá automaticamente todos os campos (CEP, peso, medidas, etc.) com os dados que o cliente já informou online.
* **Vantagem:** Transforma uma tela de digitação manual em uma tela de aferição rápida de PPN.

> **🗣️ Para Orientar seu Cliente:** (Quando ele trouxer uma PPN) "Ótimo, vi que você já preparou seu envio online! Nosso sistema já puxou todas as informações que você digitou, agora só precisamos confirmar o peso na balança. Viu como é mais rápido?"

### Gerenciando a Lista de Venda
Antes de finalizar, você pode gerenciar os itens na lista "ETIQUETAS PROCESSADAS":

* **`ALTERAR OBJETO`:** Selecione um item na lista e clique aqui para editar seus dados (ex: corrigir o peso).
* **`REMOVER OBJETO`:** Selecione um item e clique aqui para removê-lo da venda atual.
* **`CANCELAR VENDA`:** Cancela toda a sessão de venda, limpando todos os itens da lista.

### Checkboxes de Agilidade (Painel Direito)
Utilize as caixas de seleção à direita para "travar" informações e agilizar a digitação de vários pacotes parecidos:

* **`Manter Destinatário e CEP (F3)`**, **`Manter Peso (F6)`**, **`Manter Dimensões (F7)`**, etc. Ao marcar uma dessas opções, o dado correspondente não será apagado após você clicar em `OK`, facilitando o preenchimento do próximo item.

> **💡 Conhecimento Operacional (Para a Agência):** Treine sua equipe para usar massivamente os checkboxes de "Manter". Se um cliente está enviando 10 pacotes com o mesmo peso e dimensões para destinatários diferentes, marcar `Manter Peso` e `Manter Dimensões` economiza dezenas de cliques e muito tempo.

---
