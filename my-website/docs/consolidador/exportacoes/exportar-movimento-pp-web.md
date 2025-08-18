---
sidebar_position: 3
---

# Exportar Movimento para o Portal Postal Web

Este guia detalha o funcionamento da tela de **Exportação de Movimento para Portal Postal**, uma ferramenta de comunicação que envia os dados das operações realizadas no **Consolidador (local)** para as plataformas **Portal Postal Web (online)**.

**Como Acessar:** No menu superior do Consolidador, acesse `Exportações` e clique em `Exportar Movimento para Portal Postal WEB`.

> [![Tela de Exportação de Movimento para o Portal Postal](/img/exportacoes/exportar-movimento-web.png)](/img/exportacoes/exportar-movimento-web.png)
> *Tela de Exportação de Movimento para o Portal Postal*

---

## Para que serve esta tela?

O objetivo desta tela é **atualizar as plataformas online** com as informações das vendas e postagens que foram processadas localmente na sua agência. Este processo garante que seus clientes possam visualizar suas postagens na Web do Cliente e que os relatórios na Web da Agência estejam sempre atualizados.

A tela possui duas funcionalidades distintas.

---

## Parte 1: Enviar Movimento para o Portal Postal Web

Esta é a função principal e mais utilizada da tela.

### O que ela faz?
Ela pega todas as informações de vendas de cada cliente, realizadas no Consolidador em uma data específica, e as envia para o servidor online do Portal Postal.

### Como usar:
1.  No campo **`DATA`**, selecione o dia do movimento que você deseja exportar.
2.  Clique no botão **`ATUALIZAR PORTAL POSTAL WEB`**.
3.  Aguarde a barra de progresso ser concluída. Uma mensagem de sucesso confirmará o envio.

> **💡 Conhecimento Operacional (Para a Agência):** A exportação do movimento é um passo importante na sua rotina de fechamento diário. Após finalizar todas as vendas e exportações para o SARA, execute esta função para garantir que a Web da Agência e a Web do Cliente reflitam o trabalho do dia.

> **🗣️ Para Orientar seu Cliente:** "Após processarmos suas encomendas ao final do dia, nós realizamos uma exportação de movimento para o seu portal online. Isso significa que, logo em seguida, você já conseguirá acessar sua conta na Web do Cliente e visualizar todas as postagens do dia, com os respectivos códigos de rastreio e valores."

---

## Parte 2: Receber Movimento de Posto Avançado

Esta funcionalidade é específica para agências que possuem uma estrutura com postos de atendimento remotos ou avançados.

### O que ela faz?
Ela permite que a agência principal (matriz) **baixe e consolide** em seu banco de dados as vendas que foram realizadas em um posto avançado, garantindo que a base de dados da matriz contenha 100% das operações.

### Como usar: O Fluxo de Trabalho Correto (AGF Matriz)
A ordem dos processos é fundamental para evitar erros de conciliação.

1.  **Comunicação:** Confirme com a equipe do Posto Avançado que eles finalizaram todas as vendas do dia e já realizaram o procedimento de "Enviar Vendas Remotas" no sistema deles.
2.  **Recebimento:** Nesta tela, na sua agência, clique no botão **`RECEBER VENDAS REMOTAS`**. O Consolidador se conectará ao servidor e baixará todas as vendas pendentes enviadas pelo posto, integrando-as à sua base de dados central.
3.  **Verificação:** Após o recebimento, verifique rapidamente se as vendas do posto avançado constam corretamente nos seus relatórios locais para garantir que o processo foi concluído com sucesso.
4.  **Proceder com a Rotina D+1:** **Somente após ter certeza de que recebeu todas as vendas remotas**, você deve prosseguir com a sua rotina normal de início de dia, que inclui a **importação do BDF e dos dados do C.A.**

> **💡 Conhecimento Operacional (Para a Agência): ATENÇÃO - Ordem Crítica dos Processos!**
> A ordem das operações é **fundamental** para evitar falhas. O recebimento das vendas remotas deve **SEMPRE** acontecer **ANTES** da importação do BDF do dia seguinte. Se você importar o BDF antes de receber as vendas do posto avançado, o BDF conterá registros de vendas (do posto remoto) que ainda não existem no seu banco de dados local, causando erros e divergências na conciliação financeira. A falta de comunicação entre a matriz e o posto remoto é a principal causa de falhas neste fluxo.

---
