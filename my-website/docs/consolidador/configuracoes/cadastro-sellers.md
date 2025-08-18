---
sidebar_position: 12
---

# Cadastro de Sellers

Este guia descreve a funcionalidade da tela de **Cadastro de Sellers**, no Consolidador. Esta área é utilizada para registrar e gerenciar as informações de clientes ou pontos de coleta (Sellers) cujas operações precisam ser identificadas e conciliadas com o sistema SARA dos Correios.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Cadastro de Sellers`.

> [![Tela de Cadastro de Sellers](/img/cadastro_sellers/cadastro-sellers.png)](/img/cadastro_sellers/cadastro-sellers.png)
> *Tela de Cadastro de Sellers*


---

## Para que serve esta tela?

O objetivo principal desta tela é criar um cadastro detalhado de "Sellers". Um "Seller" pode representar um cliente de contrato específico, um ponto de coleta parceiro, ou uma "sub-caixa" dentro da sua operação no SARA.

Manter este cadastro preciso é fundamental para:
* **Conciliação Financeira:** Garantir que as vendas importadas do SARA (como no BDF) possam ser corretamente associadas a um cliente específico no Portal Postal.
* **Rastreabilidade:** Manter um registro claro de qual cliente ou ponto de coleta originou determinadas postagens.
* **Organização Operacional:** Estruturar a base de clientes de forma compatível com os requisitos do sistema SARA.

> **💡 Conhecimento Operacional (Para a Agência):** Esta tela é um cadastro fundamental. Dados incorretos ou ausentes aqui podem gerar falhas na importação do BDF ou na atribuição automática de vendas, exigindo mais trabalho manual de conciliação.

---

## O Fluxo de Trabalho na Tela

A tela é dividida em uma área de edição à esquerda, uma lista de sellers cadastrados à direita e funções de importação/exportação no rodapé.

### Painel Direito: Sellers Cadastrados

Esta grade exibe todos os sellers (sub-caixas) que já estão registrados no seu sistema, com informações como `ID`, `COD.`, `NOME`, `ENDEREÇO`, etc.
* **Ação:** Clique em uma linha nesta grade para selecionar um seller. As informações completas dele serão carregadas no painel esquerdo para visualização ou edição.

### Painel Esquerdo: Cadastrar ou Alterar um Seller

Este formulário é utilizado tanto para adicionar um novo seller quanto para editar um já existente.

1.  **Para Adicionar um Novo Seller:** Preencha todos os campos aplicáveis com as informações do cliente/ponto de coleta.
2.  **Para Editar um Seller Existente:** Primeiro, selecione o seller na grade da direita. Seus dados carregarão aqui. Faça as alterações necessárias.
3.  **Campos Principais:**
    * `ID Portal` / `ID`: Identificadores únicos do seller no sistema.
    * `Nome`, `CEP`, `Logradouro`, etc.: Dados cadastrais e de endereço.
    * `E-mail`, `Telefone`: Informações de contato.
    * Outros campos (`Volume`, `Valor`, `Intervalo`, etc.) podem ser usados para definir parâmetros específicos para aquele seller.
4.  **Salvar as Alterações:** Após preencher ou editar os dados, clique no botão **`ALTERAR SELLER`** para salvar as informações no banco de dados.

### Log de Alterações

A área **"LOG DE ALTERAÇÕES"** na parte inferior esquerda registra o histórico de modificações feitas em um cadastro de seller, permitindo uma auditoria de quem alterou e quando.

---

## Funções de Importação e Exportação

Para gerenciar um grande volume de sellers, a tela oferece ferramentas de lote.

* **`IMPORTAR ARQUIVO`**
    * **Função:** Permite cadastrar ou atualizar múltiplos sellers de uma só vez a partir de um arquivo de planilha (geralmente `.csv` ou `.xls`).
    * **Uso:** Ideal para a implantação inicial de muitos clientes ou para atualizações cadastrais em massa.
* **`EXPORTAR ARQUIVO`**
    * **Função:** Exporta a lista completa de "Sellers Cadastrados" para um arquivo de planilha.
    * **Uso:** Útil para fazer um backup do seu cadastro, para auditorias ou para usar o arquivo exportado como um modelo para futuras importações.

> **🗣️ Para Orientar seu Cliente:** (Quando solicitar os dados para o cadastro) "Para que possamos registrar corretamente suas postagens em nosso sistema de conciliação com os Correios, precisamos dos seus dados cadastrais completos, incluindo [mencionar 2 ou 3 campos chave, como CNPJ, Endereço e CEP]. As informações que inserimos nesta tela garantem a correta atribuição das suas vendas e a precisão do seu faturamento."

> **💡 Conhecimento Operacional (Para a Agência):** Utilize a função `EXPORTAR ARQUIVO` para gerar um modelo. Ao precisar cadastrar muitos sellers de uma vez, preencha a planilha exportada com os novos dados e utilize a função `IMPORTAR ARQUIVO`. Isso é muito mais rápido e menos propenso a erros do que o cadastro manual um a um.

---
