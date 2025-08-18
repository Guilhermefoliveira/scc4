---
sidebar_position: 6
---

# Venda Local - Por Chave de Cliente

Este guia detalha o funcionamento da tela de **Venda Local por Chave de Cliente** no Consolidador. Esta ferramenta foi projetada para processar, de forma extremamente rápida, objetos que foram previamente importados para o sistema através de um arquivo (planilha).

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Venda Local por Chave de Cliente`.

> [![Tela de Venda Local Por Chave](/img/ferramentas/venda-local-porchave.png)](/img/ferramentas/venda-local-porchave.png)
> *Tela de Venda Local Por Chave*

---

## Para que serve esta tela?

O objetivo desta tela é a **agilidade no balcão**. Após você ter importado um arquivo de postagens de um cliente (usando a tela de `Importação de Arquivo de Cliente`), esta tela permite que o operador do caixa processe cada pacote daquele lote simplesmente bipando um identificador.

Em vez de digitar todos os dados (CEP, peso, etc.), o operador bipa a "Chave" e o sistema carrega instantaneamente todas as informações que já estavam no arquivo importado.

### O que é a "Chave"?
A "Chave" é um identificador único para cada objeto, definido por você durante a criação do [Layout de Importação](LINK_PARA_GUIA_DE_LAYOUT). Geralmente, utiliza-se o **SRO** do objeto ou um código único do cliente, como o **número do pedido**.

---

## O Fluxo de Trabalho na Tela

### Passo 1: Localizar o Objeto a ser Processado

No painel **"Processar Objetos"**, utilize um dos campos principais para carregar os dados do objeto:

* **`CHAVE:` (Método Principal)**
    * Com o cursor neste campo, bipe ou digite a "Chave" (ex: o número do pedido do cliente) que identifica o pacote.
    * O sistema buscará na base de dados importada e preencherá todos os outros campos (`SERVIÇO`, `SRO`, `PESO`, `MEDIDAS`, etc.) automaticamente.

* **`CLIENTE:` (Método Alternativo)**
    * Você também pode bipar diretamente o **SRO do objeto** neste campo. O sistema identificará o cliente e carregará os dados do objeto correspondente.

### Passo 2: Conferir e Adicionar o Objeto à Venda

1.  Após o sistema preencher os dados, faça uma conferência visual rápida.
2.  Utilize as **`Opções de Impressão`** e **`Opções de Venda`** no painel direito para selecionar como a etiqueta/AR devem ser impressos ou para "travar" campos, se necessário.
    > **💡 Conhecimento Operacional (Para a Agência):** A opção **`Conferir endereço do destinatário`** é muito útil. Ao marcá-la, o sistema pode realizar uma validação extra no endereço, aumentando a segurança do envio.
3.  Clique no botão **`OK (F9)`**. O objeto será adicionado à lista **"ETIQUETAS PROCESSADAS"** na parte inferior.

Repita os Passos 1 e 2 para todos os pacotes do lote.

### Passo 3: Finalizar a Venda do Lote

Após todos os objetos desejados estarem na lista "ETIQUETAS PROCESSADAS":

1.  Clique no botão **`FINALIZAR VENDA`**.
2.  Se desejar imprimir todas as etiquetas em uma única folha A4, utilize o botão **`IMPRIMIR OBJETOS EM A4`**.

> **💡 Conhecimento Operacional (Para a Agência):** Este fluxo de trabalho (Importar Arquivo -> Vender por Chave) é o mais eficiente para clientes de alto volume que não usam a Web do Cliente. Ele divide o trabalho: uma pessoa pode focar na importação dos arquivos (back-office), enquanto a equipe do balcão apenas bipa as chaves para processar os pacotes, tornando o atendimento muito mais rápido.

> **🗣️ Para Orientar seu Cliente:** (Para clientes que enviam planilhas) "Para que possamos usar nosso fluxo de venda rápida, por favor, garanta que sua planilha de importação sempre contenha uma coluna com um identificador único para cada envio, como o número do seu pedido. Ao nos entregar os pacotes, basta nos informar este número e o processo de venda aqui na agência será instantâneo, sem necessidade de digitação."

---
