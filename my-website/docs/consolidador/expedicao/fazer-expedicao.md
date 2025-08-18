---
sidebar_position: 1
---

# Fazer Expedição

Este guia detalha o funcionamento da tela de **Fazer Expedição** no Consolidador. Esta é a principal tela de produção da expedição, onde os objetos já processados (aferidos) são fisicamente separados e bipados para dentro de suas respectivas malas (unitizadores) de destino.

**Como Acessar:** No menu superior do Consolidador, acesse `Expedição` e clique em `Fazer Expedição`.

> [![Tela de Fazer Expedição de Objetos](/img/expedicao/fazer-expedicao.png)](/img/expedicao/fazer-expedicao.png)
> *Tela de Fazer Expedição de Objetos*

---

## Para que serve esta tela?

O objetivo desta tela é garantir a **triagem correta** e criar os registros digitais dos malotes que serão enviados aos Correios. Ela funciona como a sua esteira de separação digital.

**Principais Funções:**

* **Criar e Carregar Malas:** Associar um número de unitizador físico a uma mala digital no sistema.
* **Triagem por Destino:** Separar os objetos por destino ("amarração") de forma segura, com validação do sistema.
* **Controle de Inventário:** Visualizar em tempo real a lista de objetos que ainda precisam ser expedidos e o conteúdo de cada mala em aberto.

> **Pré-requisitos:**
>
> * Os objetos a serem expedidos devem ter sido processados previamente na tela `Consolidar Objetos`.
> * Os unitizadores (malas) a serem utilizados, caso numerados, devem ter sido cadastrados na tela `Estoque de Unitizadores`.

---

## O Processo de Expedição Padrão

O fluxo de trabalho é desenhado para criar uma mala de cada vez, garantindo a separação correta por destino.

### Passo 1: Iniciar uma Nova Mala

1. Pegue um unitizador físico (mala) vazio.
2. No campo **`Nº DA MALA`**, digite ou bipe o código de barras do unitizador.

### Passo 2: Bipar o Primeiro Objeto (Definir o Destino da Mala)

Este é o passo mais importante do processo.

1. Pegue **um** objeto físico que será colocado nesta mala.
2. Bipe o código de rastreamento (SRO) dele no campo **`Nº DO OBJETO`**.
3. **Ação do Sistema:** Neste momento, o sistema identifica o destino ("amarração") deste primeiro objeto (ex: SPO - São Paulo) e "trava" esta mala para aceitar **apenas** objetos com este mesmo destino.

> **💡 Conhecimento Operacional (Para a Agência):** A verificação de amarração é sua maior aliada contra erros de expedição. Se um operador tentar bipar um objeto com destino diferente, o sistema emitirá um alerta sonoro e uma mensagem de erro (como a vista no vídeo: "Este objeto se encaixa na seguinte amarração: [SIGLA]"). Treine a equipe para prestar atenção a este alerta.

### Passo 3: Bipar os Demais Objetos

1. Continue bipando no campo **`Nº DO OBJETO`** todos os outros pacotes que pertencem à mesma amarração (destino).
2. A cada bip, o objeto sairá da lista **"NÃO EXPEDIDOS"** (à direita) e entrará na **"LISTA DE OBJETOS DA MALA"** (no centro). Os contadores **`QTD:`** e **`PESO:`** (no canto superior direito) serão atualizados em tempo real.

### Passo 4: Conferir e Fechar a Mala

1. Após bipar todos os objetos daquele destino, confira se a quantidade (`QTD:`) e o peso (`PESO:`) no sistema batem com o esperado.
2. Clique no botão **`FECHAR MALA`** no rodapé.
3. A mala será fechada digitalmente e estará pronta para a próxima etapa (impressão de relatório e exportação). O sistema então zerará os campos para que você inicie a próxima mala (Passo 1).

---

## Outras Funcionalidades e Casos de Uso

* **`MALAS ABERTAS` (Painel Esquerdo):** Mostra uma lista de todas as sessões de malas que estão atualmente em aberto, caso você precise alternar entre elas.
* **`REMOVER OBJETO DA MALA`:** Se bipou um objeto por engano, selecione-o na "LISTA DE OBJETOS DA MALA" e clique neste botão para retirá-lo.
* **`SUSPENDER`:** Pausa a operação de bipagem.
* **Caso Especial: Expedição "A DESCOBERTO"**
  * Use esta opção para objetos que são despachados sem estarem dentro de uma mala específica.
  * Clique no botão **`A DESCOBERTO`**. A mala será identificada como "A DESCOBERTO".
  * O botão **`CARREGAR DESCOBERTOS`** se tornará ativo, permitindo carregar objetos que foram marcados como "a descoberto" na etapa de consolidação.

> **🗣️ Para Orientar seu Cliente:** (Indireto) "Após seu pacote ser processado em nosso balcão, ele passa por uma etapa final de expedição. Aqui, ele é separado por destino e alocado em um malote específico para a sua região, junto com outras encomendas. Este controle rigoroso de triagem garante que seu envio siga pela rota correta e mais rápida possível."

---
