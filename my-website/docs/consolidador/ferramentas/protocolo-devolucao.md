---
sidebar_position: 12
---

# Protocolo de Devolução

Este guia detalha o funcionamento da tela de **Protocolo de Devolução** no Consolidador. Esta funcionalidade é uma ferramenta de controle essencial para registrar e formalizar a devolução de objetos ao remetente **antes que eles sejam postados** e expedidos.

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Protocolo de Devolução`.

> [![Tela de Protocolo de Devolução](/img/ferramentas/protocolo-devolucao.png)](/img/ferramentas/protocolo-devolucao.png)
> *Tela de Protocolo de Devolução*

---

## Para que serve esta tela?

O objetivo principal é criar um **registro oficial (um protocolo)** que justifique por que uma encomenda que chegou fisicamente à agência não pôde seguir para a expedição e precisou ser devolvida ao cliente remetente.

**Utilize esta tela quando:**
* Uma PPN não pode ser processada por uma falha de dados (ex: CEP inválido, PPN vencida, serviço não abrange a localidade).
* O próprio cliente solicita o cancelamento e a devolução de um objeto que já está na agência, mas ainda não foi postado.

> **💡 Conhecimento Operacional (Para a Agência):** Sempre que um objeto não puder ser postado por um erro do cliente, **gere um protocolo de devolução antes de devolver o pacote**. Este documento é a sua prova formal de que a falha não foi da agência e justifica por que o item não foi enviado, protegendo a AGF contra futuras reclamações de "objeto perdido".

---

## O Fluxo de Trabalho na Tela

### Parte 1: Gerando um Novo Protocolo de Devolução

O processo é realizado no painel esquerdo, **"Novo Protocolo de Devolução"**.

1.  **Localizar o Objeto:**
    * No campo **`Número do SRO:`**, digite ou bipe o código de rastreamento do objeto que será devolvido.
    * O sistema buscará os dados da PPN e preencherá automaticamente as informações do `Cliente`, `Departamento`, `Nome Destinatário`, `Endereço`, etc.

2.  **Definir o Motivo:**
    * No menu dropdown **`Motivo da Devolução:`**, selecione a razão pela qual o objeto está sendo devolvido (ex: `Contrato Suspenso`, `CEP Inválido`, `A pedido do cliente`).
    * Se o motivo não estiver na lista, utilize o campo **`Outro Motivo`** para descrevê-lo.

3.  **Gerar o Protocolo:**
    * Clique no botão **`Inserir Protocolo`**. O sistema registrará a devolução e uma mensagem de sucesso será exibida.

O novo protocolo aparecerá imediatamente na grade **"Protocolos Gerados"** à direita.

### Parte 2: Gerenciando e Imprimindo Protocolos

A grade **"Protocolos Gerados"** exibe todos os protocolos criados. Você pode usar os filtros de data e o botão `Pesquisar` para localizar registros antigos.

Após selecionar um ou mais protocolos na grade, você pode utilizar as ações no rodapé:

* **`Imprimir Protocolos` / `Imprimir por Cliente`:** Gera o documento oficial do protocolo de devolução para ser impresso.
    > **💡 Conhecimento Operacional (Para a Agência):** É uma excelente prática imprimir este protocolo e entregá-lo ao cliente (ou ao motorista que fará a devolução) junto com o objeto físico. Ele serve como um recibo formal.

* **`Marcar como Entregue` / `Marcar como Entregue Manual`:** Após o objeto ser fisicamente devolvido ao cliente, use esta função para registrar que o ciclo de devolução foi concluído.

* **`Exportar Protocolos`:** Exporta a lista de protocolos pesquisados para uma planilha.

* **`Excluir Protocolos`:** Remove um registro de protocolo. Use com cautela, pois isso apaga o registro da devolução.

> **🗣️ Para Orientar seu Cliente:** (Ao informar sobre a necessidade de uma devolução) "Olá, [Nome do Cliente]. Infelizmente não foi possível postar sua encomenda com o código [SRO], pois identificamos um problema: [Motivo da Devolução, ex: 'o CEP do destinatário está inválido']. Para seu controle e segurança, estamos gerando um protocolo oficial de devolução e o objeto está sendo retornado para que o senhor(a) possa corrigir a informação. O documento com os detalhes seguirá junto com o pacote."

---
