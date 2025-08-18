---
sidebar_position: 5
---

# Venda Local - Completa

Este guia detalha o funcionamento da tela de **Venda Local - Completa** no Consolidador. Esta é a tela de venda de balcão detalhada, projetada para situações que exigem o preenchimento completo dos dados do destinatário.

**Seu uso é obrigatório para qualquer envio que necessite da impressão de um Aviso de Recebimento (AR).**

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Venda Local - Completa`.

> [![Tela de Venda Local Completa](/img/ferramentas/venda-local-completa.png)](/img/ferramentas/venda-local-completa.png)
> *Tela de Venda Local Completa*

---

## Para que serve esta tela?

Esta tela é utilizada para registrar postagens de balcão que requerem um nível maior de detalhamento cadastral.

**Quando usar esta tela:**
* **Obrigatoriamente** para qualquer objeto que tenha o serviço adicional de **Aviso de Recebimento (AR)**.
* Para vendas que necessitem do preenchimento completo do endereço e dos dados do destinatário por questões de controle da agência ou do cliente.
* Para vendas de balcão em geral, como uma alternativa mais detalhada à tela "Sintética".

> **💡 Conhecimento Operacional (Para a Agência):** A regra principal é simples: **precisa imprimir AR? Use a Venda Completa.** A tela "Sintética" não possui todos os campos necessários para o preenchimento e a impressão correta do formulário de AR.

---

## O Fluxo de Trabalho de uma Venda Completa

O processo é similar ao da Venda Sintética, mas com mais campos a serem preenchidos.

### Passo 1: Iniciar a Venda
1.  Nos campos **`CLIENTE`** e **`DEPARTAMENTO`** (ou `OS`), selecione para quem a venda está sendo realizada.
2.  Clique no ícone da bandeira (ou ação correspondente) para iniciar a sessão de venda.

### Passo 2: Preencher os Dados do Objeto
Para cada pacote, preencha os **"DADOS DA VENDA"**:

* **`SERVIÇO:`** Selecione o serviço dos Correios (PAC, SEDEX, etc.).
* **`SRO:`** Digite ou bipe o código da etiqueta. Utilize as opções `Bipar Etiqueta Física` ou `Gerar Sequência Lógica` conforme a necessidade.
* **Dados do Destinatário (Essencial para AR):**
    * **`DESTINATÁRIO:`** Nome completo.
    * **`DOC.:`** CPF ou CNPJ.
    * **`CEP:`** CEP do destino.
    * **`Logradouro`, `Nº`, `Complemento`, `Bairro`, `Cidade`, `UF:`** Endereço completo.
* **`PESO(g)` e `DIMENSÕES(cm):`** Preencha com os dados aferidos.
* **`ADICIONAIS:`** Marque os serviços necessários, **especialmente o `AR`**.

### Passo 3: Adicionar o Objeto à Venda
1.  Após preencher os dados, configure as **`OPÇÕES DE IMPRESSÃO`** no painel direito, escolhendo o formato da etiqueta e, se aplicável, o formato do AR (A4, 16x10, etc.).
2.  Clique no botão **`OK (F9)`**. O objeto será adicionado à lista **"OBJETOS DA VENDA EM ANDAMENTO"** na parte inferior.

Repita os Passos 2 e 3 para todos os pacotes da venda.

### Passo 4: Finalizar a Venda
1.  Após todos os objetos serem adicionados à lista, clique em **`FINALIZAR VENDA (ESC)`**.
2.  Para imprimir as etiquetas em folha A4, utilize o botão **`IMPRIMIR ETIQUETAS A4`**.

> **🗣️ Para Orientar seu Cliente:** (Quando o cliente solicita um AR) "Perfeitamente. Para o envio com Aviso de Recebimento, preciso apenas que me confirme os dados completos do destinatário, incluindo o endereço detalhado, para garantir que o comprovante de entrega seja preenchido corretamente."

---

## Dicas de Eficiência e Outras Opções

### Opções para Venda (Painel Direito)
Assim como na tela Sintética, você pode usar as caixas de seleção "Manter..." (`Manter CEP e Destinatário (F3)`, `Manter Peso (F6)`, etc.) para "travar" campos e agilizar a digitação de vários pacotes com informações repetidas.

### Gerenciando a Lista da Venda
Antes de finalizar a venda, você pode usar os botões abaixo da lista para fazer ajustes:
* **`ALTERAR OBJETO`:** Selecione um item na lista para editar suas informações.
* **`REMOVER OBJETO`:** Selecione um item para excluí-lo da venda.

> **💡 Conhecimento Operacional (Para a Agência):** Treine a equipe para preencher todos os campos de endereço com máxima atenção, pois eles serão impressos diretamente no formulário do AR. Erros de digitação aqui podem invalidar o comprovante ou dificultar a entrega pelo carteiro.