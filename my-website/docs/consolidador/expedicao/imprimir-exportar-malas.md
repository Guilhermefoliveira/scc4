---
sidebar_position: 3
---

# Imprimir/Exportar Malas

Este guia detalha o funcionamento da tela de **Relatório de Malas**, a funcionalidade utilizada para imprimir os manifestos de carga e gerar os arquivos de exportação para as malas que já foram fechadas no processo de expedição.

**Como Acessar:** No menu superior do Consolidador, acesse `Expedição` e clique em `Imprimir/Exportar Malas`.

> [![Tela Imprimir e Exportar Malas](/img/expedicao/relatorio-malas.png)](/img/expedicao/relatorio-malas.png)
> *Tela de Imprimir e Exportar Malas.*

---

## Para que serve esta tela?

O objetivo desta tela é ser o **ponto de finalização da expedição física e digital**. Depois de separar e bipar os objetos para dentro das malas na tela "Fazer Expedição", é aqui que você:

* **Imprime o Manifesto da Mala:** Gera a lista de objetos (relatório) que deve acompanhar fisicamente cada mala.
* **Gera o Arquivo de Expedição:** Cria o arquivo eletrônico (normalmente em formato `.csv`) que será transmitido aos sistemas dos Correios, informando-os sobre o conteúdo de cada mala despachada.

---

## O Fluxo de Trabalho na Tela

### Parte 1: Pesquisar e Visualizar as Malas

1.  **`MALAS DO DIA:`** No campo de data, selecione o dia em que as malas foram fechadas.
2.  **`Q PESQUISAR`:** Clique neste botão para carregar todas as malas do dia selecionado na grade à esquerda.
3.  **Análise da Grade de Malas:** A grade da esquerda exibe um resumo de cada mala, incluindo seu **`Nº DA MALA`**, **`STATUS`** (ex: PENDENTE DE..., EM ABERTO, LISTA IMPRESSA), a **`AMARRAÇÃO`** (destino) e a quantidade de objetos.
4.  **Visualizar Conteúdo:** Ao clicar em uma mala na grade da esquerda, a lista de objetos contidos nela aparecerá no painel **"OBJETOS DA MALA SELECIONADA"**. Clicando em um objeto específico, seus detalhes completos são exibidos no painel **"DADOS DO OBJETO SELECIONADO"**.

### Parte 2: Ações de Finalização

Os botões no rodapé da tela permitem executar as ações finais sobre as malas.

* **`IMPRIMIR/EXPORTAR MALAS PENDENTES`**
    * **Função:** Esta é a ação principal para finalizar a expedição do dia. [cite_start]Ela processa **todas as malas com status "PENDENTE"** de uma só vez, executando duas tarefas: imprime o manifesto físico de cada uma e gera os respectivos arquivos de exportação. [cite: 1]
* **`REIMPRIMIR`**
    * **Função:** Permite imprimir novamente o manifesto de uma mala que já foi processada. [cite_start]Para usar, selecione a mala desejada na grade e clique neste botão. [cite: 1]
* **`GERAR ARQUIVO`**
    * **Função:** Gera apenas o arquivo de exportação (`.csv`) para uma mala selecionada, sem imprimir o manifesto. [cite_start]Útil caso você precise apenas do arquivo digital. [cite: 1]
* **`EXCLUIR`**
    * **Função:** Permite excluir uma mala que ainda está pendente.
    > **💡 Conhecimento Operacional (Para a Agência):** Use a função `EXCLUIR` com extremo cuidado. [cite_start]Excluir uma mala é uma ação irreversível e fará com que todos os objetos contidos nela voltem ao status de "não expedidos", exigindo que todo o processo de bipagem para aquela mala seja refeito. [cite: 1]

> **💡 Conhecimento Operacional (Para a Agência):** Ao final do processo de expedição, a prática recomendada é clicar em `IMPRIMIR/EXPORTAR MALAS PENDENTES` uma única vez para processar todas as malas do dia. Após a impressão, clique em `Q PESQUISAR` novamente para confirmar que o status de todas as malas foi atualizado para "LISTA IMPRESSA".

> **🗣️ Para Orientar seu Cliente:** (Indireto) "Após seus pacotes serem triados em nossos malotes de expedição, geramos um manifesto de carga detalhado e um arquivo eletrônico para cada um. Este processo formaliza o envio e garante que os Correios recebam a informação de todos os objetos que estão a caminho, assegurando a continuidade e a precisão do rastreamento."