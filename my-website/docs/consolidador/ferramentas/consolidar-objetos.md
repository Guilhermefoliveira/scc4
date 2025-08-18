---
sidebar_position: 1
---

# Consolidar Objetos (Aferição)

Este guia detalha o funcionamento da tela de **Consolidar Objetos**, a principal tela de produção do Consolidador. É aqui que cada objeto (seja uma PPN de cliente ou uma venda de balcão) é processado (aferido): seu código é lido, seu peso e dimensões são registrados, e ele é adicionado a uma lista de "Objetos Consolidados", ficando pronto para a expedição e faturamento.

**Como Acessar:** Utilize o botão **`CONSOLIDAR`** na barra de acesso rápido ou acesse pelo menu superior `Ferramentas > Consolidar Objetos`.

> [![Tela de Consolidar Objetos](/img/ferramentas/consolidar-objetos.png)](/img/ferramentas/consolidar-objetos.png)
> *Visão geral da tela de aferição de objetos.*

---

## Para que serve esta tela?

Esta é a tela de **aferição**, o equivalente digital do seu balcão de atendimento. O objetivo é registrar de forma rápida e precisa cada pacote que passa pela agência.

**Principais Funções:**
* **Validar PPNs:** Ler as etiquetas de PPN geradas pelos clientes e conferir/corrigir o peso e as dimensões.
* **Registrar Vendas de Balcão:** Processar envios de clientes avulsos.
* **Construir Lotes para Expedição:** Agrupar todos os objetos processados em uma única lista para a etapa de fechamento de malotes.
* **Integrar com Periféricos:** Conectar-se com balanças comuns e de cubagem **(BoxCubo)** para agilizar a captura de dados.

---

## O Processo de Aferição Passo a Passo

O fluxo de trabalho é desenhado para ser contínuo e rápido.

### 1. Entrada dos Dados do Objeto
Esta seção está no painel superior esquerdo.

* **`CÓDIGO P.P. ou SRO:`** Este é o campo principal. Com o cursor aqui, bipe o código de barras da etiqueta do pacote. O sistema buscará automaticamente os dados da PPN associada.
* **`PESO (g)` e Dimensões (`Altura`, `Largura`, `Comprimento`):**
    * **Entrada Manual:** Se estiver usando uma balança comum, coloque o pacote na balança, meça-o com uma régua e digite os valores nestes campos.
    * **Entrada Automática (com BoxCubo):** Se você utiliza uma balança de cubagem, clique no botão **`▶ INICIAR BOXCUBO`**. Ao posicionar o pacote na balança, estes campos serão preenchidos automaticamente.
* **`FORMATO:`** Selecione o formato do objeto (ex: Pacote, Envelope).

### 2. Resultado e Lista de Consolidados
* **`RESULTADO DA CONSOLIDAÇÃO` (Painel Superior Direito):** Após a entrada dos dados, esta grade exibe um resumo detalhado do objeto que você acabou de processar ou **mensagens de status e erro**, para uma conferência rápida.
* **`OBJETOS CONSOLIDADOS` (Painel Inferior):** Esta é a sua lista de produção. Cada objeto processado com sucesso é adicionado a esta grade. O contador **`OBJETOS CONSOLIDADOS:`** atualiza em tempo real.

> **💡 Conhecimento Operacional (Para a Agência):** A grade "OBJETOS CONSOLIDADOS" é sua melhor amiga para a conferência física. Ao final de um lote de um cliente, o número no contador deve bater exatamente com o número de pacotes na sua bancada antes de levá-los para a expedição.

---

## Validações e Mensagens Comuns do Sistema

Durante a aferição, o sistema exibe mensagens importantes no painel "RESULTADO DA CONSOLIDAÇÃO".

### Mensagem: "PPN NO STATUS POSTADO" (Fundo Vermelho)
* **O que significa:** Esta mensagem, como visto no vídeo, indica que o SRO que você bipou **já consta como 'postado'** no sistema dos Correios.
* **Causas Comuns:**
    * O objeto foi postado em um dia anterior e está sendo reprocessado por engano.
    * O mesmo objeto foi bipado duas vezes na mesma sessão de consolidação.
* **Ação Recomendada:** **Separe este objeto e não o coloque no malote.** Processá-lo novamente pode causar cobrança duplicada para o cliente e problemas de rastreamento. Verifique o histórico do SRO para entender o ocorrido.

> **🗣️ Para Orientar seu Cliente:** (Caso o cliente questione) "Este objeto com o código [SRO] não pode ser processado, pois nosso sistema, em comunicação com os Correios, identificou que ele já foi postado anteriormente. O(A) senhor(a) teria enviado este pacote em outra ocasião?"

### Mensagem: "PPN Não Encontrada" (ou similar)
* **O que significa:** O SRO bipado não foi localizado na base de dados do Portal Postal.
* **Causas Comuns:**
    * O cliente gerou a etiqueta, mas ainda não clicou em "Confirmar Pré-Postagem" na Web do Cliente.
    * Houve um erro de leitura do código de barras ou de digitação do SRO.
    * A sincronização do Consolidador com a Web ainda não trouxe esta nova PPN.

> **💡 Conhecimento Operacional (Para a Agência):** Essas validações são sua primeira linha de defesa contra erros de faturamento e expedição. Treine a equipe para **nunca ignorar as mensagens vermelhas** e sempre investigar a causa.

---

## Ferramentas de Agilidade e Gerenciamento

### Checkboxes de Eficiência
Localizados no painel de entrada de dados, com atalhos de teclado:
* **`MANTER PESO (F5)`:** Ideal para processar vários pacotes idênticos. Marque esta opção para "travar" o campo `Peso` para as próximas bipagens.
* **`MANTER MEDIDAS (F6)`:** Funciona da mesma forma, mas para os campos de `Altura`, `Largura` e `Comprimento`.
* **`MANTER MEDIDAS PPN (F7)`:** Utiliza as medidas que o cliente informou na PPN, sem a necessidade de digitação ou aferição pela balança. Use apenas para clientes cujas informações são 100% confiáveis.
* **`IMPRIMIR TICKET POSTAGEM`:** Marque esta opção para que o sistema imprima automaticamente um comprovante a cada objeto processado.


### Ações no Rodapé
* **`ZERAR CONTAGEM DE OBJETOS (F9)`:** Limpa a lista de "OBJETOS CONSOLIDADOS". Use esta função ao finalizar o lote de um cliente e antes de começar o lote de outro para manter a organização.
* **`CANCELAR OBJETO SELECIONADO (Esc)`:** Se você processou um objeto por engano, selecione-o na lista inferior e clique neste botão (ou pressione a tecla `Esc`) para removê-lo da consolidação atual.

---
