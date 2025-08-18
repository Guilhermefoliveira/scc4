---
sidebar_position: 5
---

# Exportaçoes SARA/CA Realizadas

Este guia detalha o funcionamento da tela de **Pesquisar/Alterar Exportações do SARA**, a funcionalidade de auditoria e gerenciamento final para todos os lotes de PPNs que foram exportados do Consolidador.

**Como Acessar:** No menu superior do Consolidador, acesse `Exportações` e clique em `Exportações SARA/CA Realizadas`.

> [![Tela de Pesquisa de Exportações SARA/CA Realizadas](/img/exportacoes/exportacoes-sara-ca-realizadas.png)](/img/exportacoes/exportacoes-sara-ca-realizadas.png)
> *Tela de Pesquisa de Exportações SARA/CA Realizadas*

---

## Para que serve esta tela?

O objetivo desta tela é ser o seu **painel de controle de conciliação**. É aqui que você verifica se os lotes de postagens enviados na tela de "Exportar Objetos" foram de fato recebidos e processados corretamente pelos sistemas dos Correios.

Utilize-a para:
* **Conciliar:** Comparar seus envios com os registros oficiais dos Correios.
* **Diagnosticar:** Identificar rapidamente lotes com problemas através de um sistema de cores.
* **Gerenciar e Corrigir:** Executar uma ampla gama de ações corretivas para lotes que apresentaram falhas.
* **Auditar:** Consultar o histórico de todas as exportações realizadas.

> **Pré-requisito:** Para que um lote apareça aqui, ele deve ter sido gerado e transmitido previamente através da tela `Exportar Objetos para o SARA/CA`.

---

## O Fluxo de Trabalho de Conciliação

### Parte 1: A Rotina de Verificação

A função mais importante desta tela é a verificação online.

1.  **Pesquisa Inicial:** Utilize os filtros de **`DATA`** e **`CLIENTE`** e clique em **`Q PESQUISAR`** para carregar os lotes que foram exportados do Consolidador em um determinado período.
2.  **Conciliação Online:** Após a pesquisa, clique no botão **`CONFERIR EXPORTAÇÕES`**.
    > **💡 Conhecimento Operacional (Para a Agência):** Este é o passo mais importante. Ao clicar neste botão, o Consolidador se conecta aos sistemas dos Correios e faz uma "varredura", comparando o que você enviou com o que eles de fato processaram. A rotina de clicar em `CONFERIR EXPORTAÇÕES` deve fazer parte do seu fechamento diário (em D+1). É a única forma de ter 100% de certeza de que tudo que você enviou foi processado corretamente.

### Parte 2: Interpretando os Resultados (Legenda de Cores)

Após a conferência, os lotes na lista à esquerda serão coloridos de acordo com o seu status.

* **`BRANCO`:** **Lote ainda não conferido.**
    * **Significado:** O lote foi exportado do Consolidador, mas a rotina de "Conferir Exportações Vendidas" ainda não foi executada para ele. Seu status junto aos Correios é desconhecido.
* **`VERDE`:** **PPN/Lote conferido com sucesso.**
    * **Significado:** Perfeito! O lote foi enviado, recebido e processado corretamente pelos Correios sem nenhuma divergência.
* **`AMARELO`:** **Quantidade de Objetos diferente do SARA/CA.**
    * **Significado:** Atenção. A causa mais comum é que **um ou mais objetos do lote ficaram com o status "pendente" na tela de captação automática do Correios Atende**, aguardando alguma correção manual (de CEP, peso, etc.).
    * **Ação Recomendada:** Este lote requer investigação. Acesse o sistema Correios Atende e verifique a tela de captação automática para identificar e tratar os objetos pendentes. Se necessário, abra um Help Desk para os Correios informando sobre o objeto pendente.
* **`VERMELHO`:** **PPN/Lote não encontrado no SARA/CA.**
    * **Significado:** Erro Crítico. Os Correios sequer encontraram o registro deste lote. Pode indicar uma falha grave na transmissão do arquivo.

> **💡 Conhecimento Operacional (Para a Agência):** O status Amarelo é um dos mais comuns no dia a dia da conciliação. Antes de estornar o lote ou contatar o suporte, o primeiro passo é sempre acessar o sistema dos Correios (Correios Atende) e verificar se há objetos pendentes que necessitam de alguma ação manual.

> **🗣️ Para Orientar seu Cliente:** (Se um cliente questionar um atraso no faturamento ou status) "Estamos verificando seu último lote de postagens. Alguns objetos estão com status 'pendente' no sistema de recebimento dos Correios, aguardando uma validação final por parte deles. Já estamos monitorando para garantir que sejam processados corretamente."

### Parte 3: Ações Corretivas e de Gerenciamento

O painel de botões à direita oferece um arsenal de ferramentas para gerenciar os lotes e objetos selecionados nas grades.

* **Ações de Correção de Objetos:**
    * `ALTERAR OBJETO SELECIONADO`: Permite editar dados de um objeto específico.
    * `REMOVER OBJETO SELECIONADO`: Remove um objeto de um lote (antes da conciliação).
    * `ESTORNAR OBJETO SELECIONADO`: Cancela um objeto que já foi processado.

* **Ações de Comunicação e Reenvio:**
    * `VALIDAR OBJETOS NA PPN`: Força uma nova verificação online dos SROs selecionados.
    * `GERAR ARQUIVO XML PARA SARA`: Gera novamente o arquivo de exportação em formato XML.
    * `GERAR ARQUIVO ROBO SARA`: Gera novamente o arquivo para ser enviado via "Robô de Expedição".

* **Ações de Impressão e Exportação:**
    * `REIMPRIMIR RELATÓRIO`: Imprime novamente o relatório do lote.
    * **`IMPRIMIR RELATÓRIO DE VENDA ONLINE`**
        * **Função:** Gera um relatório de contingência com os dados essenciais de cada objeto (SRO, CEP, Peso, Dimensões, Cartão) em formato de **código de barras**.
        * **Quando Usar:** Esta é uma ferramenta **importantíssima** para momentos de instabilidade ou lentidão nas APIs dos Correios (comum em horários de pico, Black Friday, etc.). Se a exportação automática (`EXPORTAR ROBÔ`) estiver falhando, este relatório permite que a venda seja feita de forma **manual no balcão do Correios Atende (C.A.)** de forma muito mais rápida, pois o atendente dos Correios pode bipar os códigos em vez de digitar todas as informações.
         > **💡 Conhecimento Operacional (Para a Agência):** Em dias de alto movimento, se a exportação via robô apresentar falhas, não espere. Gere imediatamente o 'Relatório de Venda Online' para os lotes pendentes e processe-os manualmente no C.A. para não atrasar a expedição. Esta é a sua principal ferramenta de contingência.
    * `IMPRIMIR FAIXA DE ETIQUETAS`: Imprime um relatório com as faixas de SROs utilizadas.
    * `EXPORTAR TABELA`: Exporta os dados da pesquisa para uma planilha.

    ---
