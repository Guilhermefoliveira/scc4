---
sidebar_position: 13
---

# Sincronizar Sistema Manualmente

Este guia detalha o funcionamento da tela de **Sincronização de Dados On-line**, uma ferramenta essencial para manter a comunicação e o alinhamento de informações entre o seu **Consolidador** local e as plataformas do **Portal Postal Web**.

**Como Acessar:** No menu superior do Consolidador, acesse `Ferramentas` e clique em `Atualizar Sistema Manualmente`.

> [![Tela de Sincronização de Dados Online](/img/ferramentas/sincronizar-dados-online.png)](/img/ferramentas/sincronizar-dados-online.png)
> *Tela de Sincronização de Dados Online*

---

## Para que serve esta tela?

O objetivo desta tela é permitir que a agência **force manualmente a troca de informações** entre o banco de dados local do Consolidador e o servidor online do Portal Postal.

Esta ação é crucial para:
* **Baixar novas Pré-Postagens (PPNs):** Trazer para o Consolidador as etiquetas que seus clientes acabaram de gerar na Web do Cliente.
* **Atualizar Cadastros:** Sincronizar qualquer alteração feita na Web da Agência (como novos clientes, usuários ou contratos) para o ambiente local.
* **Enviar Dados Locais:** Enviar para a Web as informações de objetos processados e faturas geradas no Consolidador, para que fiquem visíveis nos relatórios da Web da Agência e para os clientes na Web do Cliente.

> **💡 Conhecimento Operacional (Para a Agência):** Embora o sistema possa ter uma rotina de sincronização automática, esta tela manual é sua principal ferramenta para resolver problemas de dados dessincronizados. Se um cliente ligar dizendo "Criei uma PPN e ela não aparece para vocês", o primeiro passo é vir nesta tela e rodar uma sincronização.

---

## Entendendo as Opções de Sincronização

A tela oferece duas modalidades de sincronização, cada uma com um propósito específico.

### 1. SINCRONIZAR PRÉ POSTAGENS (Sincronização Rápida)

Esta é uma sincronização focada e ágil, ideal para o uso durante o expediente.

* **O que ela faz:** Sincroniza **apenas as informações essenciais** para o processamento de PPNs, como Ordens de Serviço, Serviços ECT e os dados das Pré-Postagens em si. A lista de itens sincronizados é exibida no centro da tela.
* **Como usar:**
    1.  No **`PERÍODO DA ATUALIZAÇÃO`**, selecione o intervalo de datas que deseja consultar. Geralmente, o dia atual.
    2.  Clique no botão **`SINCRONIZAR PRÉ POSTAGENS`**.
* **Quando usar:** Durante o dia, sempre que precisar baixar rapidamente um lote de PPNs que um cliente acabou de criar na Web do Cliente para poder processá-las no balcão.

> **🗣️ Para Orientar seu Cliente:** "Quando você nos avisar que acabou de gerar um lote de etiquetas na sua plataforma, nós realizamos um processo rápido de sincronização aqui na agência para que elas apareçam imediatamente em nosso sistema de balcão e possamos processar seu envio."

### 2. SINCRONIZAR TUDO (Sincronização Completa)

Esta é uma sincronização completa e mais demorada, que atualiza toda a base de dados.

* **O que ela faz:** Sincroniza **todos os cadastros e pré-postagens**. Conforme a lista no centro da tela, isso inclui Clientes, Usuários, Grupos de Faturamento, Etiquetas, Amarrações, dados Financeiros e muito mais, além de tudo que a sincronização rápida já faz.
* **Como usar:**
    1.  Selecione o **`PERÍODO DA ATUALIZAÇÃO`** desejado.
    2.  Clique no botão **`SINCRONIZAR TUDO`**.
* **Quando usar:**
    * **No início do dia:** Como parte da rotina de abertura, para garantir que o Consolidador comece o dia com todas as informações (novos clientes, contratos, etc.) perfeitamente atualizadas.
    * **Após alterações importantes:** Se você acabou de cadastrar um novo cliente ou fez alterações significativas na Web da Agência, rode uma sincronização completa para que essas mudanças reflitam no Consolidador.
    * **Ao final do dia:** Para garantir que todas as operações locais foram enviadas para as plataformas web.

> **💡 Conhecimento Operacional (Para a Agência):** Evite rodar a "SINCRONIZAR TUDO" em horários de pico de atendimento, pois por ser um processo mais pesado, pode causar uma breve lentidão no sistema. Dê preferência para o início ou final do expediente.