---
sidebar_position: 2
---

# Exportar Lotes para Venda em Máquina de Franquia

Este guia detalha o funcionamento da tela de **Exportação de Máquina de Franquia** no Consolidador. Esta funcionalidade é a central de controle para exportar e conciliar as vendas de **objetos sem registro** (como Carta Simples ou itens franqueados) que foram lançadas previamente no sistema.

**Como Acessar:** No menu superior do Consolidador, acesse `Exportações` e clique em `Exportar Lotes para Venda em Máq. de Franquia`.

> [![Tela de Exportação de Máquina de Franquia](/img/exportacoes/exportacoes-maq-franquia.png)](/img/exportacoes/exportacoes-maq-franquia.png)
> *Tela de Exportação de Máquina de Franquia*

---

## Para que serve esta tela?

O objetivo desta tela é servir como uma **área de preparação e conciliação** para todas as vendas sem registro. Como esses objetos não são exportados individualmente como as PPNs, esta tela agrupa-os em um relatório consolidado que você usará para fazer a venda em lote no sistema SARA.

Após a venda no SARA, você retorna a esta tela para registrar os dados da transação, "fechando o ciclo" e garantindo que seus registros no Portal Postal estejam conciliados com os dos Correios.

> **Pré-requisito:** Para que os objetos apareçam aqui, eles devem ter sido lançados previamente através das telas `Venda Local - Objetos Sem Registro` ou `Venda Local - Objetos sem Registro por Contador`.

---

## O Fluxo de Trabalho em Duas Partes

O processo nesta tela é dividido em duas etapas principais e sequenciais.

### Parte 1: Gerar o Relatório para Venda no SARA

Primeiro, você precisa preparar um relatório que servirá de guia para a venda no sistema SARA.

1.  **Filtre os Lançamentos:**
    * No painel **"USUÁRIO"** à esquerda, selecione o operador cujas vendas deseja exportar, ou deixe como "Todos".
    * Utilize os botões de rádio para filtrar entre **`MOSTRAR TODAS AS VENDAS - SEM REGISTRO`**, `CONTRATO DE FRANQUIA` ou `FATURADO AGF`.
2.  **Selecione os Objetos:** Na grade principal, **"OBJETOS DE MÁQUINA DE FRANQUIA"**, marque a caixa de seleção na primeira coluna para todos os lotes que você deseja incluir na sua venda no SARA.
3.  **Gere o Relatório:**
    * No painel **"COMANDOS"**, clique no botão **`GERAR RELATÓRIO EM LOTE PARA VENDA`**.
    * O sistema irá gerar um relatório em PDF, consolidando todos os itens selecionados e agrupando-os por tipo de serviço e porte. Este PDF é o seu guia para o próximo passo.

> **💡 Conhecimento Operacional (Para a Agência):** Após gerar o relatório, os objetos na grade ficarão marcados em **vermelho**, indicando que eles estão "AGUARDANDO DEFINIR ATENDIMENTO" (conforme a legenda no rodapé). Isso significa que o sistema espera que você realize a venda no SARA.

### Parte 2: Definir o Atendimento do SARA (Pós-Venda)

Este passo deve ser executado **APÓS** você ter usado o relatório em PDF para realizar a venda em lote no sistema SARA.

1.  **Selecione os Objetos Já Vendidos:** Na grade, selecione os mesmos objetos (que agora estão em vermelho) para os quais você acabou de realizar a venda no SARA.
2.  **Defina os Dados do Atendimento:**
    * Clique no botão **`DEFINIR ATEND. SARA DOS SELECIONADOS`**.
    * Uma pequena janela se abrirá, solicitando a **`Data do Atendimento`** e o **`Nº do Sub-Caixa SARA`** onde a venda foi registrada.
    * Preencha com os dados da transação que você acabou de fazer no SARA e clique em **`CONFIRMAR`**.
3.  **Finalização:** Ao confirmar, o ciclo se fecha. Os objetos são marcados como processados e conciliados, e sairão do estado de pendência.

> **💡 Conhecimento Operacional (Para a Agência):** O processo de duas partes é fundamental. A **Parte 1** (Gerar Relatório) prepara o trabalho. A **Parte 2** (Definir Atendimento) confirma que o trabalho foi executado no SARA. **Nunca se esqueça de executar a Parte 2**, ou seus registros no Consolidador ficarão permanentemente pendentes, causando divergências na conciliação financeira.

### Outras Ações
* **`ESTORNAR SELECIONADOS`:** Permite cancelar o lançamento dos objetos selecionados, removendo-os desta tela.
* **`ALTERAR SELECIONADOS`:** Permite fazer ajustes em um lançamento selecionado.

> **🗣️ Para Orientar seu Cliente:** (Indireto) Este é um processo interno, mas que garante a precisão do faturamento. "Para assegurar a exatidão na cobrança dos seus envios de carta simples, nosso sistema possui um processo de exportação e conciliação em duas etapas com os sistemas dos Correios. Isso garante que cada item que você nos confia seja corretamente registrado e faturado."

---
