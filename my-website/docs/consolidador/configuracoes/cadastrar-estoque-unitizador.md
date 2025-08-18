---
sidebar_position: 13
---

# Cadastrar Estoque de Unitizador

Este guia detalha o funcionamento da tela de **Cadastro de Estoque de Unitizadores** no Consolidador. Esta funcionalidade é uma etapa preparatória essencial para o processo de expedição, permitindo que a agência registre e controle os unitizadores (malotes, caixetas, etc.) que estão fisicamente disponíveis para uso.

**Como Acessar:** No menu superior do Consolidador, acesse `Expedição` e clique em `Estoque de Unitizadores` (ou o caminho correspondente no seu sistema).

> [![Tela de Cadastro de Estoque de Unitizador](/img/cadastro_estoque_unitizador/cadastro-estoque-unitizador.png)](/img/cadastro_estoque_unitizador/cadastro-estoque-unitizador.png)
> *Tela de Cadastro de Estoque de Unitizador*
---

## Para que serve esta tela?

O objetivo principal desta tela é criar um **inventário digital dos unitizadores físicos** que a sua agência possui. Ao cadastrar um unitizador aqui, ele se torna disponível para ser utilizado na tela de **Expedição**, onde os objetos são bipados para dentro dele.

Manter este estoque atualizado é fundamental para:
* **Agilizar o processo de expedição:** O operador não precisa digitar o número do malote a cada vez, apenas selecioná-lo.
* **Prevenir erros:** Garante que apenas unitizadores válidos e fisicamente presentes na agência sejam utilizados.
* **Controle e Rastreabilidade:** Mantém um registro dos unitizadores que foram recebidos e dos que já foram despachados.

> **💡 Conhecimento Operacional (Para a Agência):** É uma excelente prática cadastrar todos os unitizadores vazios assim que eles chegam à agência, antes mesmo de iniciar o processo de expedição do dia. Isso garante que o estoque no sistema reflita a realidade física, evitando paradas na operação por falta de um unitizador cadastrado.

---

## O Fluxo de Trabalho na Tela

A tela é dividida em uma área para adicionar novos unitizadores (à esquerda) e uma para visualizar o estoque atual (à direita).

### Parte 1: Adicionar um Novo Unitizador ao Estoque

Utilize o painel esquerdo, **"ADICIONAR UNITIZADOR AO ESTOQUE"**, para registrar um novo malote/contêiner.

1. **`Amarração:`** Selecione no menu dropdown a amarração, ou seja, o destino principal para o qual este unitizador será provavelmente usado (ex: `PSC`, `BPR`, `CID`).
2. **`Unitizador:`** Neste campo, digite ou, de preferência, **bipe o código de barras** do unitizador físico.
3. **`SALVAR`:** Após preencher os campos, clique em **SALVAR**. O novo unitizador será adicionado à lista "ESTOQUE DE UNITIZADORES" no painel direito.

### Parte 2: Gerenciando o Estoque de Unitizadores

O painel direito, **"ESTOQUE DE UNITIZADORES"**, exibe uma grade com todos os unitizadores que foram cadastrados e estão prontos para uso.

* **Visualização das Colunas:**
    * **`ID AMARRAÇÃO` / `DIREÇÃO`:** Mostra o destino que foi pré-definido para aquele unitizador.
    * **`UNITIZADOR`:** O código único do malote/contêiner.
    * **`UTILIZADO`:** Indica o status. `NÃO` significa que está disponível. `SIM` significa que ele já foi usado em uma expedição e fechado.
        > **💡 Conhecimento Operacional (Para a Agência):** A coluna `UTILIZADO` geralmente é atualizada automaticamente pelo sistema. Quando um operador fecha uma mala na tela de `Expedição`, o status do unitizador correspondente muda para `SIM` aqui.

* **Ações de Gerenciamento (Botões no Rodapé):**
    * **`EXCLUIR JÁ UTILIZADOS`:** Clicar neste botão fará uma limpeza na lista, removendo todos os unitizadores que já foram marcados como `UTILIZADO: SIM`. É uma função útil para organizar a visualização ao final do dia.
    * **`EXCLUIR SELECIONADOS`:** Permite remover manualmente um ou mais unitizadores da lista, independentemente do seu status. Para usar, marque a(s) caixa(s) de seleção na primeira coluna da grade e, em seguida, clique neste botão.

> **🗣️ Para Orientar seu Cliente:** (Indireto) Este é um processo interno da agência, mas reflete na qualidade do serviço. "Para garantir a segurança e a correta triagem dos seus envios, mantemos um controle rigoroso de todos os nossos contêineres de expedição. Cada malote é registrado em nosso sistema antes do uso, o que assegura a integridade da sua carga desde o momento em que ela sai da nossa agência."

---
