---
sidebar_position: 2
---

# Importação de Arquivo de Postagem

Este guia detalha o funcionamento da tela de **Importação de Arquivo de Postagem** no Consolidador. Esta ferramenta é usada para importar arquivos de postagem em lote (planilhas CSV, TXT, etc.) de seus clientes, transformando-os em PPNs dentro do sistema de forma rápida e eficiente.

**Como Acessar:** No menu superior do Consolidador, acesse `Importações` e clique em `Importação de Arquivo de Postagem`.

> [![Tela de Importação de arquivo de postagem](/img/importacoes/importacao-arquivo.png)](/img/importacoes/importacao-arquivo.png)
> *Tela de importação de arquivo de postagem*

---

## Para que serve esta tela?

Esta é a tela de produção onde você, AGF, utiliza os layouts de importação (sejam os padrão do sistema ou os personalizados que você criou) para processar grandes volumes de envios de um cliente que não utiliza a Web do Cliente, mas que envia os dados em um arquivo.

O objetivo é automatizar a criação de dezenas ou centenas de PPNs, eliminando a digitação manual e reduzindo erros.

> **🗣️ Para Orientar seu Cliente:** (Ao solicitar a planilha) "Por favor, ao nos enviar sua planilha para importação, certifique-se de que ela segue o formato que combinamos. Qualquer coluna fora do lugar ou informação faltando pode causar falha na importação e atrasar seus envios."

---

## O Fluxo de Importação em 2 Passos

O processo é dividido em duas etapas principais dentro da mesma tela.

### Passo 1: Selecionar o Arquivo e Definir as Opções de Importação

Nesta primeira fase, você informa ao sistema qual arquivo importar e como ele deve ser processado.

1.  **Seleção de Cliente e Layout:**
    * **CLIENTE:** Selecione o cliente da sua agência ao qual este lote de postagens pertence.
    * **DEPTO.:** Se o cliente utiliza departamentos, selecione o correto.
    * **LAYOUT:** Este é um campo crucial. Selecione na lista o layout que corresponde exatamente à estrutura do arquivo que você vai importar. A lista conterá tanto os layouts padrão do sistema quanto os personalizados que você criou no "Cadastro de Layout de Importação".
        > **💡 Conhecimento Operacional (Para a Agência):** Se um cliente te enviar um arquivo novo ou modificado, você deve primeiro ir à tela de "Cadastro de Layout de Importação" para criar ou ajustar o layout antes de tentar importá-lo aqui.

2.  **Escolha do Arquivo:**
    * Clique no botão **`ESCOLHER ARQUIVO`**. Uma janela do seu computador se abrirá para que você localize e selecione o arquivo (`.csv`, `.txt`, etc.) enviado pelo cliente.

3.  **Definições Opcionais para Importação:**
    * **Fixar estas definições:** Marca esta opção se você for importar vários arquivos em sequência com as mesmas configurações, para que o sistema memorize suas escolhas.
    * **Definir Valor Declarado para valor maior que:** Uma ferramenta de automação útil. Por exemplo, se você inserir `100,00` aqui, o sistema aplicará automaticamente o serviço de Valor Declarado para todos os itens na planilha cujo valor da mercadoria seja superior a R$ 100,00.

4.  **Ação Pós-Importação (Escolha Crucial):**
    Aqui você decide o que acontecerá com os dados após serem importados.
    * **Opção A: `Consolidar objetos do arquivo`:** O sistema irá importar os dados, criar as PPNs e validá-las, mas elas ficarão com o status "pendente". Elas precisarão ser processadas/vendidas posteriormente na tela de `CONSOLIDAR`. **É a opção mais segura para lotes que precisam de uma revisão manual extra.**
    * **Opção B: `Enviar objetos para o SARA...`:** Este é o fluxo mais automatizado. O sistema importa os dados e já os envia para o SARA, efetivamente "vendendo" os objetos. **Use esta opção para clientes e arquivos de alta confiança, onde os dados estão sempre corretos.**

5.  **Iniciar a Importação:**
    * Após definir todas as opções, clique no botão **`IMPORTAR ARQUIVO`** na parte inferior da tela.

### Passo 2: Confirmar os Dados Importados

Após clicar em `IMPORTAR ARQUIVO`, o sistema processará a planilha e exibirá uma prévia dos dados na aba **"2º PASSO - CONFIRMAR IMPORTAÇÃO"**.

> [![Tela de Importação de arquivo de postagem](/img/importacoes/arquivo-importado.png)](/img/importacoes/arquivo-importado.png)
> *Tela de importação de arquivo com arquivo importado*

1.  **Revise os Dados:** Esta grade é sua chance de fazer uma verificação visual final. Role a tela para a direita e verifique se as informações (nome, endereço, valores, etc.) foram lidas e alocadas nas colunas corretas.
2.  **Confirme a Importação:** Se tudo estiver correto, clique no botão **`CONFIRMAR`** no canto inferior direito. O sistema então executará a ação que você escolheu no Passo 1 (Consolidar ou Enviar para o SARA).
    * Se algum erro for encontrado na validação (ex: CEP inválido), o sistema geralmente alerta nesta etapa, permitindo que você cancele a operação.

> **💡 Conhecimento Operacional (Para a Agência):** Antes mesmo de iniciar a importação, crie o hábito de abrir o arquivo `.csv` ou `.txt` do cliente no Bloco de Notas ou Excel para uma inspeção rápida. Verifique se o delimitador (ponto e vírgula, vírgula) está correto e se a estrutura geral parece intacta. Isso pode prevenir muitos erros de importação.