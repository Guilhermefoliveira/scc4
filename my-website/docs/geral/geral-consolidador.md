# Visão Geral do Consolidador

---

## O que é o Consolidador?

O **Consolidador** é o software de produção (desktop) instalado na rede local da sua Agência Franqueada dos Correios (AGF). Ele funciona como o **coração operacional e financeiro** do ecossistema Portal Postal, responsável por processar o fluxo físico de encomendas (desde a recepção no balcão – aferição – até o envio – expedição) e por realizar o **faturamento** dos seus clientes de contrato.

Enquanto a gestão estratégica de clientes, a configuração de contratos e o monitoramento de indicadores consolidados ocorrem na **Web da Agência**, o Consolidador é a ferramenta do dia a dia para a equipe de atendimento, logística e financeiro, garantindo que todas as operações sejam registradas, controladas, faturadas corretamente e sincronizadas com as plataformas web.

> **💡 Conhecimento Operacional (Para a Agência):** O Consolidador é seu sistema de "chão de fábrica" e também seu "departamento financeiro" para faturamento. Dominá-lo é essencial para a eficiência operacional e para a saúde financeira da agência.

---

## Papel e Responsabilidades do Consolidador

### Configuração e Manutenção Local

O sistema permite configurar todos os parâmetros operacionais da agência, como máquinas de franquia, sequências lógicas, e periféricos essenciais como impressoras e balanças (padrão ou de cubagem).
> **💡 Conhecimento Operacional (Para a Agência):** Mantenha os cadastros de dispositivos (balanças, impressoras) sempre atualizados no Consolidador para evitar paradas inesperadas na operação de atendimento.

### Processamento de Encomendas (Aferição)

É no Consolidador que as PPNs (próprias ou de terceiros) são processadas. Ele suporta tanto o fluxo manual (com balança comum) quanto o automatizado (com balanças de cubagem, como o BoxCubo), realizando a venda e preparando os objetos para a próxima etapa.
> **🗣️ Para Orientar seu Cliente:** "Quando você traz seu pacote com a etiqueta PPN, ele passa por uma conferência aqui na agência, chamada aferição. Nosso sistema (o Consolidador) verifica os dados de peso e dimensões para garantir que tudo está correto para o envio e para a cobrança."

### Faturamento de Clientes

É no Consolidador que ocorre todo o ciclo de faturamento dos clientes de contrato, desde a apuração dos serviços utilizados até a geração das faturas e o controle de recebimentos.
> **💡 Conhecimento Operacional (Para a Agência):** A base de dados local e histórica do Consolidador é o que permite a geração de faturas detalhadas e relatórios financeiros analíticos.

### Expedição e Logística

O fechamento de malotes (malas/unitizadores) e a geração do **Arquivo de Expedição PP (`.csv`)** para o SARA são processos executados inteiramente dentro do Consolidador, garantindo a correta expedição dos objetos.
> **💡 Conhecimento Operacional (Para a Agência):** A geração correta do Arquivo de Expedição PP (`.csv`) é vital. Erros aqui podem impedir o reconhecimento do malote pelos Correios ou gerar divergências no rastreamento.

### Sincronização de Dados

O Consolidador envia continuamente os dados das operações locais (postagens, status de faturas, etc.) para a Web da Agência, mantendo o ambiente de gestão sempre atualizado.
> **💡 Conhecimento Operacional (Para a Agência):** Configure a sincronização automática para a frequência ideal da sua operação, mas também saiba como forçar uma sincronização manual caso precise que a Web da Agência reflita imediatamente um grande volume de postagens ou um fechamento financeiro.

---

## Fluxo de Trabalho Típico no Consolidador

1. **Início do Dia: Importação e Preparação**
    A rotina começa com a importação de dados essenciais para a conciliação financeira, como o **Balancete Diário de Faturamento (BDF)** e os arquivos do Correios Atende (C.A.) do dia anterior.
    > **💡 Conhecimento Operacional (Para a Agência):** Essa importação (BDF/C.A.) é a base da sua conciliação financeira diária. Não pule esta etapa, pois ela garante que seus controles internos estão alinhados com os registros dos Correios.

2. **Operação de Balcão: Aferição e Venda**
    Ao longo do dia, os operadores utilizam o Consolidador para processar todas as encomendas, sejam elas PPNs geradas pelos clientes na web, PPNs de terceiros (marketplaces) ou vendas de balcão.
    > **🗣️ Para Orientar seu Cliente:** "Seu pacote com etiqueta PPN passa por um processo rápido de aferição no nosso sistema aqui na agência para confirmarmos os dados antes dele seguir para a expedição."

3. **Fechamento e Logística: Expedição**
    Ao final do ciclo de produção, a equipe de logística utiliza o módulo de **Expedição** para agrupar os objetos em malas, realizar a conferência via leitor de código de barras e gerar o **Arquivo de Expedição PP (`.csv`)** para os Correios.
    > **💡 Conhecimento Operacional (Para a Agência):** Sempre confira fisicamente os pacotes com a lista do sistema antes de gerar o arquivo de expedição. Um objeto esquecido ou trocado pode causar problemas para o cliente e para a agência.

4. **Ciclo de Faturamento**
    Em períodos definidos (semanal, quinzenal, mensal), a equipe responsável utiliza o módulo de **Faturamento** para gerar as faturas dos clientes de contrato, com base nas postagens realizadas e aferidas no sistema.
    > **💡 Conhecimento Operacional (Para a Agência):** Antes de gerar as faturas, utilize os relatórios de pré-faturamento para uma conferência final dos serviços e valores a serem cobrados de cada cliente.

5. **Sincronização e Envio de Dados**
    Periodicamente, de forma automática ou manual, o Consolidador sincroniza os dados de todas as operações realizadas (incluindo o status das faturas) com a Web da Agência.

---

## Funcionalidades e Principais Recursos

| Categoria | Funcionalidades |
|---|---|
| **Configurações** | - Cadastro de sequências lógicas, sub-caixas do SARA, máquinas de franquia e dispositivos (balança, impressora).<br />- Configurações gerais para personalizar o funcionamento do sistema. |
| **Importações** | - Importação do **Balancete Diário de Faturamento (BDF)** e tickets do SARA.<br />- Importação de listas de postagem de clientes.<br />- Consulta e gerenciamento de arquivos importados. |
| **Aferição e Venda** | - Consolidação e processamento de PPNs próprias e de terceiros.<br />- Venda local com diferentes níveis de detalhamento.<br />- Workflows para balança padrão (manual) e de cubagem (automatizada).<br />- Controle e conferência de etiquetas, devoluções e sincronização. |
| **Expedição** | - Expedição de objetos postais com abertura simultânea de múltiplas malas.<br />- Geração do **Arquivo de Expedição PP (`.csv`)**.<br />- Impressão de romaneios e controle de objetos não expedidos. |
| **Faturamento** | - **Geração e gerenciamento completo de faturas** para clientes de contrato.<br />- Controle de pagamentos recebidos, limites de crédito e emissão de segunda via.<br />- Relatórios detalhados de faturamento por cliente e período. |
| **Pesquisas e Simulações** | - Consulta de objetos, listas de postagem e clientes.<br />- Pesquisa de preços, prazos e simulação de tarifas baseada no contrato do cliente. |
| **Relatórios Locais** | - Relatórios de objetos processados, movimentações financeiras (incluindo faturamento), auditorias de caixas e ranking de clientes (Curva ABC).<br />- Ferramentas para análise de vendas e produtividade da operação local. |
| **Utilitários** | - Ferramentas para backup, atualização de tarifas, pesquisa de tarifação e controle de versão do sistema.<br />- Funções de marcação de objetos como expedidos. |

---

## Conclusão

O **Consolidador** é a ferramenta de linha de frente essencial para as AGFs, oferecendo a plataforma robusta para a execução e o controle de toda a operação física de postagens, bem como o ciclo completo de faturamento dos clientes. Ao automatizar processos e se integrar perfeitamente com a **Web da Agência** (para monitoramento e gestão de clientes), ele garante que a agência tenha dados precisos e em tempo real para tomar as melhores decisões operacionais e estratégicas.
