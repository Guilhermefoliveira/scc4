---
sidebar_position: 4
---

# Exportaçoes de Máquina de Franquia Realizadas

Este guia detalha o funcionamento da tela de **Pesquisa de Exportação de Máquina de Franquia** no Consolidador. Esta funcionalidade é a sua ferramenta de **auditoria e gerenciamento** para os lotes de objetos sem registro que já foram exportados e conciliados com o SARA.

**Como Acessar:** No menu superior do Consolidador, acesse `Exportações` e clique em `Exportações de Máq. de Franquia Realizadas`.

> [![Tela de Pesquisa de Exportações de Máquina de Franquia](/img/exportacoes/pesquisa-exportacoes-maq-franquia.png)](/img/exportacoes/pesquisa-exportacoes-maq-franquia.png)
> *Tela de Pesquisa de Exportações de Máquina de Franquia*

---

## Para que serve esta tela?

O objetivo desta tela é permitir a consulta e a gestão dos lotes de objetos sem registro **após eles terem sido vendidos no SARA e conciliados no sistema**. Enquanto a tela anterior (`Exportar Lotes...`) é para *preparar* a venda, esta é para *consultar o que já foi feito*.

Utilize-a para:

* **Auditar:** Consultar o histórico de exportações realizadas.
* **Reimprimir:** Gerar uma segunda via do relatório de lote para conferência.
* **Corrigir:** Alterar os dados de atendimento do SARA associados a um lote.
* **Estornar:** Cancelar/reverter uma exportação que foi conciliada incorretamente.

> **Pré-requisito:** Para que um lote de objetos apareça nesta tela, ele deve ter completado todo o ciclo na tela de `Exportar Lotes para Venda em Máq. de Franquia`, incluindo a etapa crucial de **"Definir Atendimento SARA"**.

---

## O Fluxo de Trabalho na Tela

### Parte 1: Como Pesquisar as Exportações Realizadas

O painel **"PESQUISAR LOTES"** no canto superior esquerdo é onde você define seus critérios de busca.

1. **`DATA DA VENDA:`** Selecione a data ou o período em que a venda foi realizada no SARA.
2. **`USUÁRIO:`** Filtre por um operador específico ou deixe "Todos os usuários" para uma visão geral.
3. **`MOSTRAR TODAS AS VENDAS - SEM REGISTRO`:** Refine ainda mais a busca com as opções disponíveis neste menu.
4. **`COM Máq. de Franquia` / `SEM Máq. de Franquia`:** Filtre entre os lançamentos feitos pela tela de "Contador" ou pela tela de "Quantidade".
5. Clique no botão **`Q PESQUISAR`**.

A grade **"RESULTADO DA PESQUISA"** será preenchida com todos os lotes que correspondem à sua busca, exibindo detalhes como cliente, data, serviço e valores.

### Parte 2: Ações Disponíveis para os Lotes Encontrados

Após a pesquisa, você pode selecionar um ou mais lotes na grade e aplicar uma das ações disponíveis no painel **"AÇÕES"** à esquerda.

* **`REIMPRIMIR RELATÓRIO DAS VENDAS SELECIONADAS`**
  * **Função:** Permite que você imprima novamente o relatório consolidado em PDF que foi originalmente gerado para realizar a venda no SARA. Útil para conferências e arquivo.

* **`ALTERAR ATENDIMENTO SARA DOS SELECIONADOS`**
  * **Função:** Ferramenta de correção. Se, ao conciliar o lote, o operador inseriu a data ou o sub-caixa do SARA incorretamente, esta opção permite corrigir essa informação sem ter que estornar todo o processo.
    > **💡 Conhecimento Operacional (Para a Agência):** Esta função é a solução para o erro de digitação mais comum na conciliação. Em vez de estornar um lote inteiro, use esta ferramenta para corrigir rapidamente a referência do atendimento SARA.

* **`ESTORNAR SELECIONADOS`**
  * **Função:** Esta é uma ação crítica para **cancelar/reverter** a exportação e a conciliação dos lotes selecionados. Ao ser usada, os objetos retornam ao status de "pendentes de exportação" na tela anterior.
    > **💡 Conhecimento Operacional (Para a Agência):** Use esta função com extremo cuidado, por exemplo, se um lote inteiro foi conciliado com os dados errados de forma irreparável. A ação geralmente exige uma senha de administrador.

> **🗣️ Para Orientar seu Cliente:** (Indireto) Este é um processo interno, mas que demonstra o nível de controle da sua agência. "Mantemos um histórico detalhado e auditável de todas as exportações e conciliações dos seus envios sem registro. Isso nos permite consultar qualquer lote a qualquer momento e corrigir prontamente qualquer inconsistência, garantindo que seu faturamento seja sempre preciso e transparente."

---
