---
sidebar_position: 11
---

# Cadastro de Bloqueios de SROs

Este guia detalha o funcionamento da tela de **Cadastro de Bloqueio de SROs** no Consolidador. Esta funcionalidade serve como uma ferramenta de controle preventivo, permitindo que a agência bloqueie SROs de PPNs específicas antes que elas sejam processadas (vendidas) na tela principal de consolidação.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Cadastro de Bloqueio de SROs`.

> [![Tela de Cadastro de identificação de PPNs](/img/cadastro_bloqueio_sros/cadastro-bloqueio-sros.png)](/img/cadastro_bloqueio_sros/cadastro-bloqueio-sros.png)
> *Tela de cadastro de bloqueio de SROs.*

---

## Para que serve esta tela?

O principal objetivo é **impedir que uma PPN seja processada por engano**. Quando um SRO bloqueado é bipado na tela de venda (`CONSOLIDAR`), o sistema exibe a mensagem de bloqueio para o operador, alertando-o sobre uma ação necessária.

**Casos de uso comuns:**
* O cliente liga pedindo para **cancelar uma venda** cuja etiqueta PPN já foi gerada.
* O cliente identifica um **endereço de destinatário incorreto** e solicita a não postagem do objeto.
* A encomenda precisa ser retida por algum **motivo administrativo ou financeiro**.

> **Regras Importantes para o Bloqueio:**
> Para que um SRO possa ser bloqueado, ele deve atender às seguintes condições:
> * O objeto físico **ainda não pode ter chegado** e sido processado na agência.
> * O objeto deve pertencer a uma carga que **ainda não foi consolidada** no sistema.

---

## Como Utilizar a Tela de Bloqueio

A tela é dividida em uma área de ação (à esquerda) e uma área de visualização (à direita).

### 1. Como Adicionar um Bloqueio

Existem duas formas de adicionar um SRO à lista de bloqueio:

#### A. Bloqueio Individual ou em Pequena Quantidade

1.  No painel esquerdo, certifique-se de que a opção **`ADICIONAR BLOQUEIO`** esteja selecionada.
2.  No campo **MOTIVO**, digite uma mensagem curta e clara que explique por que o objeto está sendo bloqueado. Esta é a mensagem que aparecerá para o operador do caixa. (Ex: "CLIENTE SOLICITOU CANCELAR", "NÃO POSTAR - ENDEREÇO ERRADO").
3.  No campo de texto maior, **digite ou bipe o SRO** do objeto que deseja bloquear. Você pode adicionar vários SROs, um por linha.
4.  O sistema processará o bloqueio, e os SROs adicionados aparecerão imediatamente na grade **"OBJETOS JÁ IDENTIFICADOS"** à direita.

#### B. Bloqueio em Lote (via Arquivo)

Para bloquear uma grande quantidade de SROs de uma só vez:
1.  Crie um arquivo de texto (`.txt`) com um SRO por linha.
2.  Clique no botão **`ESCOLHA O ARQUIVO COM OS SROs`** e selecione o arquivo que você criou.
3.  Clique em **`IMPORTAR ARQUIVO SELECIONADO`**. Todos os SROs do arquivo serão adicionados à lista de bloqueio.

> **💡 Conhecimento Operacional (Para a Agência):** O bloqueio é uma ferramenta proativa. Use-a assim que o cliente solicitar para evitar que o pacote seja processado por engano por outro operador. O motivo deve ser claro para que a ação no balcão seja rápida e correta.

### 2. Como Remover um Bloqueio

Caso o cliente mude de ideia e autorize o envio de um objeto que estava bloqueado:

1.  No painel esquerdo, selecione a opção **`REMOVER BLOQUEIO`**.
2.  No campo de texto maior, **digite ou bipe o SRO** do objeto que deseja desbloquear.
3.  O sistema removerá o SRO da lista de bloqueio, e ele desaparecerá da grade à direita. Este objeto agora está liberado para ser processado normalmente na tela de consolidação.

> **🗣️ Para Orientar seu Cliente:** (Quando ele pedir para bloquear um envio) "Recebemos sua solicitação para não postar a encomenda [SRO]. Já inserimos o bloqueio em nosso sistema. Caso mude de ideia e queira autorizar o envio, por favor, nos avise para que possamos liberar o objeto."

### 3. Consultando e Gerenciando Bloqueios

* **Painel Direito (OBJETOS JÁ IDENTIFICADOS):** Esta grade mostra a lista de todos os SROs que estão atualmente bloqueados no sistema.
    * **SRO:** O código do objeto bloqueado.
    * **MOTIVO:** A mensagem que você cadastrou no momento do bloqueio.
    * **USUÁRIO:** O operador do sistema que realizou o bloqueio.
    * **DATA INCLUSÃO:** O dia e a hora em que o bloqueio foi realizado.
* **Painel Esquerdo (Consultar por Data):** Para auditar bloqueios, você pode selecionar um período no campo **DATA** e clicar em **`PESQUISAR`**. O sistema filtrará a grade da direita para mostrar apenas os SROs bloqueados naquele período.
* **Contador (Rodapé):** O campo **QUANTIDADE OBJETOS IDENTIFICADOS** mostra o número total de SROs bloqueados que correspondem à sua pesquisa.