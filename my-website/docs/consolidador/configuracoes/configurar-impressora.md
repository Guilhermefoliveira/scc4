---
sidebar_position: 6
---

# Configurar Impressora

Este guia detalha como configurar as impressoras no sistema **Consolidador**. Esta etapa é **essencial** para garantir a correta impressão de etiquetas, tickets e relatórios, sendo um dos primeiros passos a serem realizados em cada estação de trabalho da agência.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Configurar Impressora`.

> [![Tela de Configurações de impressoras](/img/conf_impressora/conf-impressora.png)](/img/conf_impressora/conf-impressora.png)
> *Tela de visão geral de configurações de impressoras.*

---

## Entendendo os Modos de Impressão: Windows vs. EPL 2

Para impressoras térmicas de etiquetas, o sistema oferece dois modos de comunicação. Entender a diferença é crucial para uma configuração correta.

* **1. Imprimir pelo Windows (Modo Padrão):**
    * **Como funciona:** O Consolidador envia o comando de impressão para o Windows, que por sua vez, utiliza o driver da impressora para imprimir a etiqueta. Geralmente, isso abre uma janela de confirmação de impressão.
    * **Vantagem:** Compatível com praticamente qualquer impressora instalada no Windows.
    * **Desvantagem:** Pode ser um pouco mais lento por ter uma etapa intermediária (a janela do Windows).

* **2. Imprimir em EPL 2 (Modo Direto):**
    * **Como funciona:** O Consolidador se comunica diretamente com a impressora usando a linguagem de programação EPL 2, um padrão para muitas impressoras térmicas (como Zebra, Argox, etc.). A impressão é instantânea, sem janelas de confirmação.
    * **Vantagem:** Muito mais rápido, ideal para agências com alto volume de impressão de etiquetas.
    * **Desvantagem:** Requer que a impressora seja compatível com a linguagem EPL 2 e exige um passo extra de configuração (Salvar Chancelas).

---

## Detalhando as Configurações por Tipo de Impressão

A tela é dividida em seções para cada tipo de etiqueta ou documento que o sistema pode imprimir.

> **💡 Conhecimento Operacional (Para a Agência):** Estas configurações são locais, ou seja, precisam ser feitas **em cada computador** da sua agência que estiver conectado a uma impressora.

### 1. Impressora Laser A4

Utilizada para imprimir documentos em formato A4, como relatórios detalhados ou faturas.
* **Ação:** No menu dropdown, selecione a impressora a laser que está instalada no seu computador.
* **Teste:** Clique em `IMPRIMIR PÁGINA TESTE` para garantir que a comunicação está funcionando.

### 2. Impressora Térmica de Tickets

Utilizada para imprimir os comprovantes (tickets) para os clientes no balcão.
* **Ação:** Selecione a impressora térmica de tickets no menu dropdown.
* **Opções Adicionais:**
    * `Impressora com corte`: Marque esta opção se sua impressora possui uma guilhotina para cortar o papel automaticamente após a impressão.
    * `Pular linhas ao final da impressão`: Adiciona linhas em branco ao final do ticket, se necessário.
* **Teste:** Use o botão `IMPRIMIR PÁGINA TESTE` para verificar.

### 3. Impressoras Térmicas de Etiquetas (10x16, 10x10, 10x07)

Estas seções são para configurar as impressoras que imprimirão as etiquetas de postagem dos Correios nos seus respectivos tamanhos.

* **Ação:** Para cada tamanho de etiqueta que sua agência utiliza (ex: 10x16), selecione a impressora térmica correspondente no menu dropdown.

#### Configuração Especial (Etiquetas 10x07 - Windows vs. EPL 2)

Nesta seção, você deve escolher o modo de impressão:

* **Se você usa o driver do Windows:**
    1.  Marque a opção `Imprimir pelo Windows`.
    2.  Clique em `IMPRIMIR PÁGINA TESTE`. Uma janela de impressão do Windows deverá aparecer para você confirmar a impressão.

* **Se sua impressora é compatível e você quer usar o modo direto e rápido (EPL 2):**
    1.  Marque a opção `Imprimir em EPL 2`.
    2.  **Passo Obrigatório:** Clique no botão **`SALVAR CHANCELAS NA IMPRESSORA`**. O sistema enviará os logotipos e fontes padrão dos Correios (chancelas) diretamente para a memória da impressora. Este processo só precisa ser feito uma vez por impressora.
    3.  Após salvar as chancelas, clique em `IMPRIMIR PÁGINA TESTE`. A etiqueta de teste deve ser impressa diretamente, sem nenhuma janela de confirmação.

> **💡 Conhecimento Operacional (Para a Agência):** Se você optar por EPL 2 e a etiqueta de teste sair com caracteres estranhos ou desconfigurada, é um sinal de que a impressora pode não ser 100% compatível com a linguagem EPL 2 ou que as chancelas não foram salvas corretamente. Nesse caso, volte para o modo "Imprimir pelo Windows" e contate o suporte se necessário.

---

Lembre-se de testar cada impressora configurada para garantir que toda a sua operação de impressão esteja funcionando perfeitamente.