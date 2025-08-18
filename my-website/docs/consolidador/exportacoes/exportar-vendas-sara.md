---
sidebar_position: 1
---

# Exportar Vendas para o SARA

Este guia detalha o funcionamento da tela de **Exportar Objetos para o SARA**, a funcionalidade final do ciclo de vendas diário no Consolidador. É aqui que você agrupa todos os objetos processados e gera os arquivos oficiais de postagem para transmitir aos sistemas dos Correios (SARA/Correios Atende).

**Como Acessar:**
Existem duas maneiras de acessar esta tela:
1.  **Pelo Menu Principal:** No menu superior, acesse `Exportações > Exportar Vendas para o SARA`.
2.  **Pelo Botão de Atalho:** Clique no botão **`EXPORTAR`** na barra de acesso rápido principal do Consolidador.

> [![Tela de Exportação de Objetos para SARA/CA](/img/exportacoes/exportar-vendas-sara-ca.png)](/img/exportacoes/exportar-vendas-sara-ca.png)
> *Tela de Exportação de Objetos para SARA/CA*

---

## Para que serve esta tela?

O objetivo desta tela é consolidar todas as vendas realizadas no Consolidador (PPNs, vendas de balcão, etc.) e formatá-las no arquivo correto para a transmissão oficial aos Correios. É a etapa que transforma suas vendas internas em postagens válidas no sistema dos Correios.

---

## O Fluxo de Trabalho de Exportação

O processo é dividido em duas fases: primeiro, preparar a seleção de objetos, e segundo, gerar o arquivo final.

### Passo 1: Filtrar e Preparar os Arquivos

No painel **"PREPARAR ARQUIVOS PARA EXPORTAÇÃO SARA"**, você define quais tipos de objetos deseja exportar.

1.  **Selecione o Tipo de Exportação:** Escolha o formato do arquivo de acordo com a origem das vendas.
    * **`PPN [portal]`:** Para exportar as Pré-Postagens Nacionais que foram geradas pelos seus clientes na Web do Cliente ou processadas via PPN no balcão. **Este é o fluxo principal para clientes de contrato.**
    * **`XML [portal]`:** Formato alternativo para clientes de contrato que, por alguma razão, necessitam de um arquivo XML.
    * **`MÉDIAS POSTAGENS`:** Para exportar as vendas de clientes de balcão (avulsos) que foram registradas nas telas de Venda Local.

2.  **Selecione as Famílias de Serviços:** Marque as caixas de seleção (`SEDEX`, `PAC`, `CARTAS`, etc.) para incluir apenas os serviços desejados no arquivo. Para exportar tudo, marque todas.

3.  **Valide os Dados (Recomendado):** Marque a caixa de seleção **`VALIDAR DADOS NO SVP`**.
    > **💡 Conhecimento Operacional (Para a Agência):** Embora o nome na tela possa mencionar "SVP" (um sistema antigo), esta função realiza uma **validação online com os sistemas atuais dos Correios**. Marcar esta opção é uma **excelente prática**, pois ela verifica as PPNs antes de gerar o arquivo, identificando objetos com problemas (ex: PPN vencida) e evitando a rejeição do seu lote inteiro no SARA.

4.  **Prepare os Arquivos:** Clique no botão **`PREPARAR ARQUIVOS`**. O sistema buscará todos os objetos que correspondem aos seus filtros e os exibirá na grade inferior, agrupados por cliente.

### Passo 2: Selecionar Clientes e Exportar

Após preparar os arquivos, a grade **"SELECIONE QUAIS CLIENTES VOCÊ DESEJA EXPORTAR"** será preenchida.

1.  **Selecione os Lotes:** Marque a caixa de seleção ao lado do(s) cliente(s) ou lote(s) que você deseja incluir no arquivo de exportação final.
2.  **Execute a Exportação:** Utilize um dos botões no rodapé da tela.
    * **`EXPORTAR PLP PARA O SARA`**:
        > **(Nota:** O nome do botão é legado).
    * **Função:** Gera o arquivo de postagem final (geralmente em formato **`.csv`**) e o salva em seu computador. Você deverá então fazer o upload deste arquivo manualmente no portal correspondente dos Correios.
    * **`EXPORTAR ROBÔ`:**
    * **Função:** Inicia o processo de **transmissão automática** dos dados para os sistemas dos Correios, utilizando o "Robô de Expedição". Esta é a opção mais rápida, moderna e recomendada, pois elimina a necessidade de upload manual.

> **💡 Conhecimento Operacional (Para a Agência):** É uma boa prática exportar as vendas de "Médias Postagens" (clientes de balcão) separadamente das vendas de "PPN" (clientes de contrato). Isso mantém a organização dos seus arquivos de postagem e facilita a conciliação financeira posterior.

> **🗣️ Para Orientar seu Cliente:** (Quando o cliente perguntar sobre o rastreamento) "Após processarmos todos os seus pacotes aqui na agência, nós utilizamos esta tela para gerar um arquivo final de postagem e transmiti-lo oficialmente para os Correios. É a partir deste momento que o rastreamento dos seus objetos é iniciado no sistema deles e a cobrança é consolidada em sua fatura."

---
