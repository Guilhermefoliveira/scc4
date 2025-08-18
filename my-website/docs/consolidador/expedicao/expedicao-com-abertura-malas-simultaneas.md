---
sidebar_position: 5
---

# Expedição com Abertura de Malas Simultaneas (6, 9 e 12 Malas)

Este guia detalha o funcionamento da tela de **Expedição Várias Direções Simultâneas**, uma ferramenta de expedição avançada que permite ao operador trabalhar com várias malas (destinos) abertas ao mesmo tempo, otimizando o processo de triagem.

**Como Acessar:** No menu superior do Consolidador, acesse `Expedição > Expedição com Abertura de [6, 9 ou 12] Malas Simultâneas`.

> [![Tela de Expedição com Malas Simultâneas](/img/expedicao/separacao-malas-simultaneas.png)](/img/expedicao/separacao-malas-simultaneas.png)
> *Visão geral da tela de expedição com 6,9 e 12 malas simultâneas.*

---

## Para que serve esta tela?

Diferente da tela "Fazer Expedição" (que processa uma mala por vez), esta funcionalidade permite que você mantenha várias malas, cada uma para um destino ("amarração") diferente, abertas simultaneamente.

O objetivo é a **máxima eficiência na triagem**. O operador não precisa separar os pacotes em pilhas físicas por destino antes de começar. Ele pode simplesmente pegar o próximo pacote da bancada, bipar, e o sistema automaticamente o alocará na mala correta.

---

## O Processo de Expedição Simultânea

O fluxo de trabalho é dinâmico e guiado pelo sistema.

### Passo 1: Iniciar o Processo (Bipar o Primeiro Objeto)

O processo começa com o primeiro pacote.

1.  No campo **`SRO:`** (canto superior esquerdo), bipe o código de rastreamento de **qualquer** objeto que precise ser expedido.
2.  **Ação do Sistema:** O sistema identificará o destino ("amarração") deste SRO. Como ainda não há nenhuma mala aberta para este destino, ele exibirá um alerta: **"Ainda não existe uma mala para este objeto! Bipe um lacre de mala para abrir uma nova mala!"**
3.  No campo **`MALA:`**, bipe o código de barras do unitizador físico (mala) que você usará para este destino.
4.  O sistema criará a primeira mala em um dos painéis da tela, associando-a ao destino do objeto e adicionando este primeiro item a ela. O painel exibirá o `Nº DA MALA`, a `AMARRAÇÃO`, `QUANTIDADE` e `PESO`.

### Passo 2: Continuar a Bipagem

Continue bipando os SROs dos próximos objetos no campo principal `SRO:`:

* **Se o objeto pertencer a um destino que já tem uma mala aberta** em um dos painéis, o sistema o adicionará automaticamente àquela mala, atualizando os contadores de `QUANTIDADE` e `PESO`.
* **Se o objeto pertencer a um novo destino**, o sistema repetirá o Passo 1, solicitando um novo número de `MALA:` para criar um novo painel para este novo destino.

Continue este processo até que todos os objetos tenham sido bipados e alocados em seus respectivos painéis.

### Passo 3: Finalizar as Malas

Cada mala é finalizada individualmente.

1.  Quando um painel estiver completo (todos os objetos daquele destino foram bipados), clique no botão **`FECHAR ESTA MALA`** localizado na parte inferior daquele painel específico.
2.  A mala será fechada digitalmente, e o painel ficará livre para uma nova mala ser aberta.

> **💡 Conhecimento Operacional (Para a Agência):** Esta tela é a mais eficiente para a triagem de PPNs. Em vez de separar os pacotes fisicamente, o operador pode simplesmente pegar o próximo pacote da esteira e bipá-lo; o sistema faz a "triagem digital" e indica em qual mala física ele deve ser colocado. Mantenha os unitizadores físicos organizados e próximos para que, quando o sistema solicitar, um novo possa ser rapidamente bipado.

---

## Outras Funções e Gerenciamento

* **`REMOVER OBJETO DE MALA` (Botão Superior Direito):** Se você bipou um objeto para a mala errada, selecione-o na lista dentro do painel da mala e clique neste botão para removê-lo.
* **Filtros de Serviço (Canto Superior Direito):** Utilize os botões de rádio `Todos os Serviços`, `SEDEX`, `PAC` para filtrar a visualização e focar em malas de um tipo de serviço específico.
* **`Ignorar Exportação SARA`:** Marque esta opção caso precise expedir um objeto que, por algum motivo, ainda não foi exportado para o SARA. Use com cautela.

> **🗣️ Para Orientar seu Cliente:** (Indireto) "Utilizamos um sistema de expedição simultânea que nos permite triar encomendas para múltiplos destinos ao mesmo tempo. Esta tecnologia otimiza nosso processo interno, garantindo que seus pacotes sejam encaminhados para a rota de entrega correta com a máxima velocidade e precisão."