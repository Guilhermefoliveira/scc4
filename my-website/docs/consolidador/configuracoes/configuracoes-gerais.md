---
sidebar_position: 4
---

# Configurações Gerais

Este guia detalha todas as opções disponíveis no menu **Configurações > Configurações Gerais** do Consolidador. Esta área é o painel de controle para personalizar as regras de negócio, os alertas e as integrações do sistema, adequando-o à rotina operacional da sua agência (AGF).

**Como Acessar:** No menu superior do Consolidador, vá em `Configurações` e clique em `Configurações Gerais`.

A tela é dividida em abas. Vamos detalhar cada uma delas.

> [![Tela de Configurações Gerais](/img/conf_gerais/principal-geral.png)](/img/conf_gerais/principal-geral.png)
> *Tela de visão geral do painel de configurações.*
---

## Aba "GERAL"

Nesta aba, você define as regras de negócio globais que afetam a operação em **todos os computadores** da sua agência.

> **💡 Conhecimento Operacional (Para a Agência):** Tenha atenção ao modificar as opções desta aba, pois elas impactarão todos os operadores da sua equipe. São as "regras da casa" para a operação no Consolidador.

**Opções Disponíveis:**

* **Obrigar a digitação de destinatário na hora da venda:** Se marcada, impede que o operador conclua uma venda no balcão sem antes preencher os dados do destinatário. (Recomendado para manter a base de dados completa).
* **Sempre gerar sequência automática de etiquetas físicas na venda:** Automatiza a geração de números de etiqueta, evitando que o operador precise digitá-los.
* **Fixar objetos com e-ticket/cód. de barras na consolidação de objetos:** Mantém objetos com etiqueta eletrônica fixos no topo da lista de consolidação para facilitar a conferência.
* **Expedir objetos ignorando a exportação para o SARA:** Permite que objetos específicos sejam expedidos sem a necessidade de gerar um arquivo para o sistema SARA dos Correios. (Usar com extrema cautela, apenas em casos específicos).
* **Fixar "IGNORAR MEDIDAS E PESO DO CLIENTE" na consolidação de objetos:** Mantém a opção de ignorar medidas pré-selecionada, agilizando a aferição de objetos que já vêm com dados do cliente.
* **Fixar "Travar Medida" na consolidação de objetos:** Mantém a opção de travar as medidas pré-selecionada, útil para processar vários pacotes com as mesmas dimensões.
* **Desconsiderar tarifação dos objetos do Mercado Livre ao exportar movimento para o Portal Postal Web:** Evita que objetos do Mercado Livre, que já possuem frete pago, sejam tarifados novamente nos relatórios do Portal.
* **Habilitar venda sintética e completa com RFID:** Habilita funcionalidades específicas relacionadas a vendas com tecnologia RFID.
* **Imprimir relatório de exportação de mídias postagem em ordem de SRO:** Organiza o relatório de exportação por ordem de código de rastreio.
* **Imprimir relatório de exportação de PPNs na impressora térmica:** Organiza e formata o relatório para impressoras térmicas.
* **Imprimir relatório de exportação de PPNs de venda online com cód. de barras de peso/medidas:** Adiciona códigos de barras com informações de peso e medidas no relatório, facilitando a conferência.
* **Mostrar carta frete comercial para clientes de contrato:** Habilita a impressão de um documento específico para clientes com contrato.
* **Definir medida mínima na venda que não satisfaça a regra de medida mínima da ECT:** Permite que o sistema aceite objetos menores que o padrão mínimo dos Correios, assumindo o valor mínimo para cálculo do frete.
* **Pesquisar clientes pelo nome fantasia:** Permite buscar clientes pelo nome fantasia, além da razão social.
    > **🗣️ Para Orientar seu Cliente:** Quando um cliente entrar em contato se identificando pelo nome da loja ou marca dele, esta opção permite que você o localize rapidamente no sistema, agilizando o atendimento.
* **Permitir vender ciente de contrato como avulso com permissão do Administrador:** Dá flexibilidade para que um cliente de contrato seja atendido como avulso em situações específicas, mediante autorização.
* **Permitir alterar venda em aberto sem permissão de administrador:** Permite que operadores modifiquem vendas que ainda não foram fechadas, sem necessidade de senha de administrador.
* **Desconsiderar regra de sedex a cobrar na tela de venda completa (Valor Declarado menor que Valor Cobrar):** Permite vendas de Sedex a Cobrar mesmo que o valor declarado seja inferior ao valor a ser cobrado.
* **Fixar últimos clientes selecionado na escolha do cliente da PPN de Terceiros:** Agiliza o atendimento de PPNs de marketplaces, mantendo o último cliente selecionado por padrão.
* **Imprimir relatório de exportação de PPNs sem código de barras do cartão de postagem:** Remove o código do cartão do relatório para maior segurança ou simplicidade.
* **Imprimir relatório de exportação de PPNs por ordem alfabética:** Organiza o relatório de exportação por ordem alfabética de destinatários.

**Configurações Locais (Apenas para este computador):**

* **Imprimir 2 vias de tickets:** Se marcada, este computador específico imprimirá sempre duas vias do comprovante de postagem.

> [![Tela de Configurações Gerais ajuste para todos terminais ](/img/conf_gerais/opcoes-gerais.png)](/img/conf_gerais/opcoes-gerais.png)
> *Tela de Ajustes gerais para todos terminais na rede da agência.*
---

## Aba "ALERTAS"

As opções desta aba são configuradas **por computador**. Elas servem para criar bloqueios ou avisos ao operador durante o atendimento, ajudando a prevenir erros de postagem.

> **💡 Conhecimento Operacional (Para a Agência):** Use esta aba para criar perfis de trabalho diferentes. Por exemplo, um computador de um operador novo pode ter mais bloqueios (`SIM`), enquanto o computador do gerente pode ter mais alertas (`NÃO`, apenas avisa), dando mais autonomia e segurança.

> [![Tela de Alertas](/img/conf_gerais/alertas-tela.png)](/img/conf_gerais/alertas-tela.png)
> *Configuração de alertas.*

**Opções Disponíveis:**

* **Permitir digitação de Peso?:** Define se o operador pode digitar o peso manualmente (`SIM`) ou se o peso deve vir obrigatoriamente de uma balança conectada (`NÃO`).
* **Enviar avisos para pesos abaixo de:** Define um peso mínimo (em gramas) para emitir um alerta.
* **Enviar avisos para pesos acima de:** Define um peso máximo (em gramas) para emitir um alerta.
* **Bloquear Venda se exceder Limites de Peso?:** Impede (`SIM`) ou apenas alerta (`NÃO`) se o peso do objeto ultrapassa o limite permitido para o serviço dos Correios.
* **Bloquear Venda se exceder Limites de Peso (Cúbico calculado)?:** Idem ao anterior, mas para o peso cúbico.
* **Bloquear Venda se exceder Limites de Dimensões?:** Impede (`SIM`) ou apenas alerta (`NÃO`) se as dimensões do pacote são maiores que as permitidas.

---

## Aba "PPN (Pré-Postagem Nacional)"

Nesta aba, você configura a integração e as regras para o fluxo de **PPN**, que é o padrão atual dos Correios. As configurações aqui são **globais** (para todos os computadores).

> [![Configurações de validação PPN - Cadastro de balanças de Cubagem Boxcubo](/img/conf_gerais/svp-ppn.png)](/img/conf_gerais/svp-ppn.png)
> *Configurações de validação PPN e cadastro de balanças de cubagem.*

**Configurações da PPN:**

* **Habilitar opção de validação pela PPN ao Exportar PLPs para o SARA:** Esta é a opção principal que ativa a comunicação online com os sistemas dos Correios para validar os objetos PPN no momento da exportação para o SARA. Habilitá-la garante a integridade do seu lote de envio.
    > **💡 Conhecimento Operacional (Para a Agência):** O texto desta opção no sistema pode ainda mencionar "PLPs", um termo de sistemas antigos. No entanto, esta configuração se aplica ao **fluxo moderno de PPN**. Manter esta opção **marcada é essencial** para o funcionamento correto da sua operação.

**Balança Virtual (BoxCubo):**

* **Nº Série do BoxCubo:** Campo para cadastrar o número de série da sua balança de cubagem (ex: BoxCubo). Ao adicionar a balança aqui, o sistema passa a capturar peso e dimensões automaticamente durante a aferição, agilizando drasticamente o processo.

---

## Aba "FINANCEIRO"

Define as taxas padrão de multa e juros para faturas de clientes de contrato pagas com atraso. As configurações são **globais**.

> **🗣️ Para Orientar seu Cliente:** No contrato de prestação de serviços com seu cliente, é uma boa prática informar quais são as taxas de multa e juros por atraso, que são as mesmas configuradas aqui. Isso garante transparência.

> [![Configurações financeiras](/img/conf_gerais/financeiro-tela.png)](/img/conf_gerais/financeiro-tela.png)
> *Configurações financeiras.*

**Opções Disponíveis:**

* **MULTA POR ATRASO(%)**: Percentual de multa a ser aplicado sobre o valor total da fatura em caso de atraso.
* **JUROS MORA/MÊS (%)**: Percentual de juros ao mês a ser cobrado sobre o valor da fatura em atraso, calculado pro-rata (diariamente).

---

## Aba "OUTROS"

Esta aba contém configurações de infraestrutura e caminhos de arquivos, sendo configurada **por computador**.

> **💡 Conhecimento Operacional (Para a Agência):** Use esta aba para padronizar onde os arquivos de exportação são salvos. Configurar um caminho em uma pasta de rede compartilhada pode facilitar o acesso pela equipe administrativa ou para fins de backup.

> [![Outras configurações](/img/conf_gerais/outros-tela.png)](/img/conf_gerais/outros-tela.png)
> *Outras configurações.*

**Opções Disponíveis:**

* **Caminho Padrão para Exportação:** Define a pasta padrão onde o sistema salvará todos os arquivos exportados (relatórios, arquivos de expedição, etc.).
* **IP do Servidor:** Informação técnica sobre o endereço do servidor onde o banco de dados do Consolidador está localizado na rede da agência.

Lembre-se sempre de clicar em **SALVAR CONFIGURAÇÕES** no canto inferior esquerdo após realizar qualquer alteração em qualquer uma das abas.

---
