# FAQ: Consolidador Portal Postal

Este guia de perguntas e respostas foi criado para solucionar as principais dúvidas sobre a instalação, operação e funcionalidades do **Consolidador**, o software de produção local do ecossistema Portal Postal.

---

## 1. Introdução e Visão Geral

### O que é o Consolidador e para quem ele é indicado?

O Consolidador é a aplicação desktop (local) usada pelas Agências Franqueadas dos Correios (AGFs) para executar e controlar as operações diárias de postagem. Ele é a ferramenta da "linha de frente", indicada para AGFs que precisam de uma solução robusta para processar encomendas (aferição), expedir malotes, gerenciar o faturamento e sincronizar esses dados operacionais com a plataforma de gestão.

> **💡 Conhecimento Operacional (Para a Agência):** Por ser uma aplicação local, o Consolidador oferece alta performance para as operações do dia a dia, como a bipagem de centenas de objetos, sem depender da velocidade da internet para cada transação.

### Qual a diferença entre o Consolidador e a Web da Agência?

Pense neles como "fábrica" e "escritório de monitoramento":

* **Consolidador (Fábrica e Financeiro):** É o software local onde todo o trabalho físico e financeiro acontece: pesar, medir, bipar, processar encomendas, fechar malotes e, crucialmente, **gerar as faturas** dos clientes.
* **Web da Agência (Escritório de Monitoramento):** É a plataforma online onde a gestão de clientes e a análise de dados acontecem. Ela recebe os dados do Consolidador e permite **monitorar o status das faturas**, visualizar relatórios consolidados e gerenciar as configurações dos clientes.

> **🗣️ Para Orientar seu Cliente:** Quando seu cliente perguntar onde ele pode ver o "total a pagar do mês", explique que a fatura oficial e detalhada é gerada por você, na agência (pelo Consolidador). Ele poderá consultar um resumo dessa fatura e o status do pagamento na Web do Cliente dele, após a sincronização dos dados.

### Quais são os requisitos técnicos para instalar o Consolidador?

* **Sistema Operacional:** Windows 10 ou superior.
* **Hardware Recomendado:** Processador Intel i5 (ou equivalente), 16 GB de memória RAM.
* **Conexão com a Internet:** Essencial para a sincronização com a Web da Agência.
* **Banco de Dados Local:** Por conter a base de dados histórica da agência, garante a performance e a disponibilidade dos dados para relatórios e faturamento.

> **💡 Conhecimento Operacional (Para a Agência):** A recomendação de 16 GB de RAM é importante para agências com grande volume de dados, pois o banco de dados local cresce com o tempo. Garanta também uma rotina de backup (ver seção de Utilitários) para proteger essa base histórica.

### Como faço a configuração inicial após a instalação?

1. **Abra o Consolidador** e acesse o menu de **Configurações**.
2. **Cadastre os parâmetros essenciais** da sua agência, como máquinas de franquia, sequências lógicas e os dispositivos (impressora, balança).
3. **Realize a primeira sincronização** com a Web da Agência para validar as credenciais e carregar as informações iniciais de clientes.

### O acesso à internet precisa ser constante?

Para a sincronização, sim. No entanto, o Consolidador foi projetado para continuar operando localmente mesmo durante quedas temporárias de internet, inclusive para faturamento. Assim que a conexão é restabelecida, ele retoma a sincronização dos dados pendentes.

> **💡 Conhecimento Operacional (Para a Agência):** Crie o hábito de forçar uma sincronização manual ao final do expediente para garantir que os dados na Web da Agência e na Web do Cliente estejam 100% atualizados com o fechamento do dia.

---

## 2. Operações Diárias

### Como funciona o processo de aferição de uma PPN no Consolidador?

A aferição é o processo de validar uma encomenda que chega no balcão:

1. O operador bipa a etiqueta PPN do pacote.
2. O sistema busca os dados da pré-postagem que o cliente gerou.
3. O operador confirma o peso e as dimensões. Com uma **balança comum**, ele digita os dados. Com uma **balança de cubagem** (ex: BoxCubo), os dados são capturados automaticamente.
4. Após a validação, o objeto está processado e pronto para a expedição.

> **🗣️ Para Orientar seu Cliente:** Explique a importância de ele preencher corretamente os dados de peso e dimensões ao gerar a etiqueta PPN. Informe que, na agência, esses dados são conferidos (aferidos) e que divergências podem gerar cobranças extras ou a necessidade de refazer a etiqueta.

### Como são realizadas as importações de arquivos?

No menu **Importações**, você pode importar arquivos essenciais para a operação, como o **Balancete Diário de Faturamento (BDF)** e tickets do sistema SARA. O Consolidador permite configurar layouts para ler diferentes formatos de arquivo.

> **💡 Conhecimento Operacional (Para a Agência):** A importação do BDF é uma das tarefas mais importantes da rotina de abertura. Ela é a base para a conciliação financeira e garante que o que você cobrou do cliente bate com o que os Correios cobraram da sua agência.

### O que é o processo de Expedição?

Expedição é o processo de agrupar os objetos já aferidos em malotes (malas) para o envio. No Consolidador, você pode:

* Abrir múltiplas malas simultaneamente.
* Bipar os objetos para dentro de cada mala correspondente.
* Gerar o **Arquivo de Expedição PP (`.csv`)** ao final do processo.
* Imprimir os romaneios da mala e controlar objetos que não foram expedidos.

> **💡 Conhecimento Operacional (Para a Agência):** Sempre realize uma conferência física dos pacotes na área de expedição antes de fechar a mala no sistema. Um objeto esquecido para trás após a geração do arquivo `.csv` requer um processo de correção manual.

---

## 3. Faturamento e Financeiro

### O Consolidador gera as faturas para os clientes?

**Sim.** O Consolidador é a ferramenta principal e correta para todo o ciclo de faturamento. Por conter a base de dados local e completa desde a implantação, ele possui os dados analíticos necessários para:

* **Gerar faturas** detalhadas para clientes de contrato.
* **Gerenciar e consultar** o histórico de faturas.
* **Controlar pagamentos** e limites de crédito.

> **🗣️ Para Orientar seu Cliente:** Informe ao seu cliente de contrato que a fatura oficial, com o detalhamento de todas as postagens do período, será gerada e enviada por você (AGF). Ele não deve considerar os valores da Web do Cliente como um documento de cobrança final, mas sim como uma prévia.

### Como funciona a importação do BDF?

1. Acesse o menu **BDF** no sistema.
2. Clique em **Importar Arquivo** e selecione o arquivo do **Balancete Diário de Faturamento** fornecido pelo SARA.
3. Após a importação, o sistema cruza os dados e gera relatórios de conciliação financeira, como DDO e Proter.

### É possível acompanhar o status das faturas em aberto?

Sim. O módulo de **Faturas** do Consolidador mostra um painel completo com valores em aberto, pagos e vencidos, facilitando todo o controle financeiro e a cobrança ativa dos clientes.

---

## 4. Relatórios e Utilitários

### Quais relatórios gerenciais posso extrair do Consolidador?

O Consolidador oferece relatórios completos e detalhados, como:

* **Relatórios de Faturamento:** Análise de receita por cliente, período, etc.
* **Objetos Processados:** Quantidade de itens aferidos.
* **Auditorias de Caixa:** Conferência das movimentações do balcão.
* **Curva ABC:** Análise de quais clientes ou serviços geram mais receita.

> **💡 Conhecimento Operacional (Para a Agência):** Use o relatório de Curva ABC mensalmente para identificar seus clientes mais importantes. Isso pode guiar ações comerciais, como oferecer um novo serviço ou renegociar uma tabela de preços.

### Para que serve o menu "Utilitários"?

É uma área com ferramentas de manutenção, onde você pode realizar **backup** do seu banco de dados, **atualizar as tabelas de tarifas**, forçar uma **sincronização manual** e verificar a **versão do sistema**.

> **💡 Conhecimento Operacional (Para a Agência):** Estabeleça uma rotina **diária** de backup do banco de dados. Salve o arquivo em um local seguro (HD externo ou nuvem). Essa é a sua apólice de seguro para toda a operação histórica da agência.
