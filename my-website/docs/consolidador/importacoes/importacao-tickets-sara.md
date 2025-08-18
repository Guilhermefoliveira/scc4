---
sidebar_position: 3
---

# Importação de Tickets do Sara

Este guia detalha o funcionamento da tela de **Importação de Ticket do SARA** no Consolidador. Esta ferramenta serve como uma ponte para trazer para dentro do Portal Postal as vendas que foram realizadas diretamente no sistema SARA dos Correios, garantindo a centralização das informações para faturamento e relatórios.

**Como Acessar:** No menu superior do Consolidador, acesse `Importações` e clique em `Importação de Ticket do SARA`.

> [![Tela de Importação de Ticket do SARA](/img/importacoes/importacao-ticket-sara.png)](/img/importacoes/importacao-ticket-sara.png)
> *Tela de Importação de Ticket do SARA*

---

## Para que serve esta tela?

O objetivo desta tela é a **conciliação**. Se por algum motivo uma venda foi finalizada diretamente no sistema SARA (e não no fluxo de PPN do Portal Postal), esta ferramenta permite que você importe os dados daquela venda para o Consolidador.

Isso é fundamental para:
* Garantir que a postagem entre no **faturamento do cliente de contrato** no Consolidador.
* Manter um **histórico centralizado** de todas as operações da agência.
* Gerar **relatórios completos** que incluam todas as vendas, independentemente do sistema de origem.

---

## O Fluxo de Trabalho Completo

O processo é dividido em duas partes: primeiro, gerar o arquivo de ticket no SARA; segundo, importá-lo no Consolidador.

### Parte 1: Pré-requisito - Gerando o Arquivo de Ticket no SARA

Antes de usar a tela no Consolidador, você precisa extrair o "ticket" do sistema SARA. O "ticket" nada mais é do que a página de detalhes da postagem salva em formato HTML.

1.  Acesse o sistema **SARA** dos Correios.
2.  Navegue até o menu `Operações > Imprimir 2ª via da Lista de Postagem`.
3.  Localize a lista de postagem ou o atendimento que deseja importar e clique no botão **`Detalhar`**.
4.  O SARA abrirá uma nova janela (semelhante a uma página de internet) com o "Comprovante do Cliente".
5.  Nesta janela, vá ao menu do navegador (geralmente `Arquivo > Salvar como...` ou clicando com o botão direito e selecionando `Salvar como...`).
6.  Salve o arquivo no formato **`Página da Web, completa`** ou **`.html`**. Este arquivo é o seu "Ticket do SARA".

> **💡 Conhecimento Operacional (Para a Agência):** Crie uma pasta padrão no seu computador ou na rede (ex: `C:\Tickets_SARA_Para_Importar`) para salvar todos os tickets gerados. Isso mantém a organização e facilita a localização dos arquivos na hora de importar no Consolidador.

### Parte 2: Importando o Ticket no Consolidador

Com os arquivos `.html` salvos, agora você pode importá-los no Consolidador.

1.  **Selecionar a Pasta:**
    * Na tela de "Importação de Ticket do SARA", clique no botão **`ESCOLHA A PASTA ONDE ESTÃO OS TICKETS A SEREM IMPORTADOS`**.
    * Navegue até a pasta onde você salvou os arquivos `.html` do SARA e confirme. O sistema carregará o primeiro ticket encontrado.

2.  **Associar o Ticket ao Cliente:**
    * O sistema exibirá os dados lidos do ticket na grade **"VENDAS EXISTENTES NO TICKET"**.
    * Sua principal tarefa é informar ao sistema a qual cliente da sua agência aquela venda pertence. Preencha o campo **`CLIENTE REFERENTE`** selecionando o cliente correto da sua base.
    * Se necessário, selecione também o **`DEPARTAMENTO`**.

3.  **Conferir e Editar (Opcional):**
    * Você pode conferir os dados na grade. Se notar alguma informação que precisa ser corrigida (como o nome do destinatário), dê um **clique duplo** sobre o campo na grade para editá-lo.

4.  **Salvar ou Ignorar:**
    * **`SALVAR E PRÓXIMO`:** Clique neste botão para salvar a associação do ticket atual ao cliente selecionado e carregar automaticamente o próximo arquivo de ticket da pasta.
    * **`IGNORAR ESTE TICKET`:** Clique aqui para pular o ticket atual sem importá-lo, passando para o próximo da fila.

5.  **Finalização:**
    * Repita o passo 3 e 4 para todos os tickets na pasta. Ao finalizar o último, o sistema exibirá a mensagem "Importação Finalizada!".

> **💡 Conhecimento Operacional (Para a Agência):** Esta rotina é crucial para clientes de contrato que, por algum motivo, foram atendidos via SARA. Se o ticket não for importado e associado ao cliente correto, **a venda não entrará na fatura dele** gerada pelo Consolidador, causando perda de receita e problemas de conciliação.

> **🗣️ Para Orientar seu Cliente:** (Em caso de dúvidas sobre a fatura) "Para garantir total transparência em seu faturamento, nosso sistema importa e concilia até mesmo as postagens que, porventura, precisem ser feitas em outros sistemas dos Correios. Isso assegura que sua fatura reflita com 100% de precisão todos os serviços que você utilizou conosco no período."

---
