---
sidebar_position: 10
---

# Cadastro de Identificação de SRO

Este guia detalha o funcionamento da tela de **Identificação Manual de SRO**, uma ferramenta operacional chave do Consolidador para o gerenciamento de PPNs de terceiros.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Cadastro de Identificação de SROs`.

> [![Tela de Cadastro de identificação de PPNs](/img/cadastro_identificacao_sros/cadastro-identificacao-sros.png)](/img/cadastro_identificacao_sros/cadastro-identificacao-sros.png)
> *Tela de cadastro de identificação de SROs.*

---

## Para que serve esta tela?

Esta tela é sua ferramenta "coringa" para associar manualmente um ou mais códigos de rastreio (SROs) de PPNs a um cliente específico da sua agência.

Ela é ideal para as seguintes situações:

* **PPNs de Marketplaces:** Para tratar lotes de objetos da Shopee, Shein, etc., associando todos os pacotes a um cliente genérico correspondente (ex: "Balcão - Shopee").
* **Clientes com Contratos de Terceiros:** Quando um cliente seu utiliza o contrato de um parceiro e não há uma regra de identificação automática para ele.
* **Correções:** Para corrigir uma associação que possa ter sido feita incorretamente.

---

## O Fluxo de Trabalho na Tela

A tela é dividida em duas áreas principais: à esquerda, onde você executa as ações, e à direita, onde você vê os resultados.

### Parte 1: Realizando uma Nova Identificação Manual em Lote

Este é o uso mais comum da tela. Siga estes passos:

1.  **Selecione o Cliente de Destino:**
    * No campo **CLIENTE**, digite o nome ou código do cliente da sua agência ao qual você deseja associar as PPNs.
    * Se aplicável, selecione o **DEPTO.** (Departamento) correto.
    * > **💡 Conhecimento Operacional (Para a Agência):** É uma excelente prática criar clientes genéricos na sua base para cada marketplace (ex: "Balcão Shopee", "Balcão Shein"). Isso organiza seu faturamento e relatórios.

2.  **Inicie a Sessão de Identificação:**
    * Clique no botão **`INICIAR IDENTIFICAÇÃO`**. O sistema agora está pronto para receber os códigos SRO para o cliente que você selecionou.

3.  **Bipe os SROs dos Pacotes:**
    * Com o cursor no campo **SRO**, comece a bipar com o leitor de código de barras cada uma das etiquetas do lote de pacotes daquele cliente.
    * A cada bip, o SRO será adicionado à tabela **"RESULTADO DA CONSULTA"** à direita, já vinculado ao cliente selecionado.
    * Acompanhe a **"Quantidade Bipada"** no painel esquerdo para conferir com a quantidade física de pacotes em sua bancada.

4.  **Gerencie a Sessão (se necessário):**
    * **`REMOVER SRO`:** Se bipou um SRO por engano, selecione-o na tabela da direita e clique neste botão para removê-lo da lista.
    * **`TROCAR CLIENTE`:** Se precisar mudar o cliente no meio do processo, este botão permite a troca.

5.  **Finalize a Sessão de Identificação:**
    * Após bipar todos os pacotes daquele cliente, clique no botão **`FINALIZAR`**.
    * > **💡 Conhecimento Operacional (Para a Agência):** Este passo é **CRUCIAL**. Clicar em `FINALIZAR` salva todas as associações que você fez naquela sessão. Se você esquecer e começar a bipar pacotes de outro cliente, eles serão associados ao cliente anterior. **Sempre finalize uma sessão antes de começar a próxima.**

### Parte 2: Consultando Identificações Anteriores

A seção superior do painel esquerdo, **"CONSULTAR IDENTIFICAÇÕES POR DATA"**, serve como uma ferramenta de auditoria.

1.  No campo **DATA**, selecione o dia que deseja consultar.
2.  Clique em **`PESQUISAR`**.
3.  A tabela à direita será preenchida com todas as identificações manuais que foram realizadas naquela data, mostrando o SRO, o cliente associado e se o objeto já foi aferido.
4.  Você pode usar o botão **`Exportar Arquivo`** no rodapé para salvar esta consulta em um arquivo.

> **🗣️ Para Orientar seu Cliente:** (Para clientes que usam contratos de marketplaces e perguntam sobre o controle) "Para garantir que suas postagens sejam faturadas corretamente aqui na agência, mesmo usando a etiqueta do marketplace, nosso sistema possui uma etapa de identificação. Nela, associamos cada um dos seus pacotes ao seu cadastro conosco. Isso garante que o nosso controle interno e a sua fatura sejam precisos.
