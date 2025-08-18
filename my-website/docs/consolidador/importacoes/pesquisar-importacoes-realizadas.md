---
sidebar_position: 5
---

# Pesquisar Importações Realizadas

Este guia detalha o funcionamento da tela de **Pesquisar Importações Realizadas** no Consolidador. Esta funcionalidade é a sua principal ferramenta de auditoria e gerenciamento para todos os lotes de postagens que foram importados via arquivo.

Utilize-a para localizar importações passadas, reimprimir etiquetas ou comprovantes, e realizar ações corretivas, como estornar um lote importado por engano.

**Como Acessar:** No menu superior do Consolidador, acesse `Importações` e clique em `Pesquisar Importações Realizadas`.

> [![Tela de Pesquisa de Importações](/img/importacoes/pesquisar-importacoes.png)](/img/importacoes/pesquisar-importacoes.png)
> *Tela de Pesquisa de Importações*

---

## Para que serve esta tela?

Esta tela funciona como um "arquivo vivo" de todas as importações em lote que sua agência realizou. Ela é essencial para:

* **Auditoria:** Verificar quais objetos foram importados em um determinado dia ou para um cliente específico.
* **Reimpressão:** Gerar uma segunda via de etiquetas ou comprovantes de um lote que já foi processado.
* **Correção de Erros:** Estornar (cancelar) objetos ou lotes que foram importados incorretamente.
* **Resolução de Pendências:** Gerar SROs para objetos que, por alguma falha de comunicação, não receberam o código durante a importação.

---

## O Fluxo de Trabalho na Tela

### Parte 1: Como Pesquisar Importações

O primeiro passo é sempre localizar o lote ou os objetos que você deseja gerenciar.

1.  **Filtro por DATA:** No campo **`DATA`**, selecione o dia em que a importação foi realizada.
2.  **Filtro por CLIENTE:** Para refinar a busca, selecione um **`CLIENTE`** específico na lista. Para ver as importações de todos os clientes na data selecionada, mantenha a opção "TODOS".
3.  **Executar a Busca:** Clique no botão **`PESQUISAR IMPORTAÇÕES`**.

O sistema preencherá a grade principal com todos os objetos (PPNs) que correspondem aos seus filtros, exibindo detalhes como Etiqueta (SRO), Cliente, Departamento, Serviço, etc.

> **💡 Conhecimento Operacional (Para a Agência):** Esta tela é sua principal ferramenta de diagnóstico para problemas com importações em lote. Antes de contatar o suporte sobre um arquivo que "não funcionou", utilize esta pesquisa para verificar se a importação foi de fato realizada e se os objetos estão listados aqui.

### Parte 2: Ações Disponíveis para os Objetos Encontrados

Após a pesquisa, você pode selecionar um ou mais objetos na grade (marcando a caixa de seleção na coluna **`SEL`**) e aplicar uma das ações disponíveis nos botões do painel direito.

* **`GERAR SRO PARA OBJETOS SEM SRO`**
    * **Função:** Para casos raros onde um objeto foi importado mas não recebeu um código de rastreio. Esta função tenta gerar um novo SRO para os itens selecionados.

* **`IMPRIMIR ETIQUETAS`**
    * **Função:** Permite reimprimir as etiquetas PPN dos objetos selecionados. É a função mais utilizada para casos de falha na impressora ou para quando uma etiqueta é danificada.
    > **🗣️ Para Orientar seu Cliente:** "Caso você precise de uma segunda via de uma etiqueta de um lote que nos enviou por planilha, não se preocupe. Nós podemos facilmente localizar a sua importação em nosso sistema e reimprimir a etiqueta para você."

* **`IMPRIMIR COMPROVANTE`**
    * **Função:** Gera e imprime um comprovante de postagem para os objetos selecionados.

* **`SELECIONAR IMPRESSORA`**
    * **Função:** Permite escolher em qual impressora (previamente configurada) as etiquetas ou comprovantes serão impressos.

* **`GERAR CONEVB_R`**
    * **Função:** Gera um arquivo/relatório específico dos Correios (CONEVB_R - Comprovante de Entrega de Encomendas VB Rastreável) para os objetos selecionados, que pode ser necessário para alguns processos de comprovação.

* **`ESTORNAR SELECIONADOS`**
    * **Função:** Esta é uma ação crítica que **desfaz/cancela** a importação dos objetos selecionados, removendo-os do sistema como se não tivessem sido importados.
    > **💡 Conhecimento Operacional (Para a Agência):** Use esta função com **extremo cuidado**, apenas se um lote foi importado para o cliente errado ou com informações completamente incorretas. A ação geralmente exige uma senha de administrador e é irreversível.

* **`EXPORTAR TABELA`**
    * **Função:** Exporta todos os dados da sua pesquisa atual para uma planilha (geralmente `.csv` ou `.xls`). É ideal para criar relatórios personalizados ou para análises externas.

---
