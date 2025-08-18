# FAQ: Portal Postal - Web da Agência

Este guia responde às principais dúvidas sobre as funcionalidades e o uso da **Web da Agência**, a sua plataforma online para gestão estratégica e administrativa no ecossistema Portal Postal.

---

## 1. Conceitos Básicos

### O que é a Web da Agência e para quem ela é indicada?

A **Web da Agência** é a plataforma online de gestão para as Agências Franqueadas dos Correios (AGFs). Ela é indicada para gestores e administradores que precisam de uma visão centralizada para gerenciar clientes, monitorar finanças, analisar dados e configurar os serviços oferecidos.

> **💡 Conhecimento Operacional (Para a Agência):** Pense na Web da Agência como a "matriz" das configurações. Qualquer novo cliente, contrato ou serviço deve, obrigatoriamente, ser cadastrado e configurado aqui primeiro para que funcione nas outras partes do sistema.

### Qual a diferença entre a Web da Agência e o Consolidador?

Pense neles como "escritório de monitoramento" e "fábrica":

* **Web da Agência (Escritório):** É a plataforma online onde você administra o negócio: gerencia clientes e contratos, analisa relatórios e monitora o faturamento.
* **Consolidador (Fábrica):** É o software local onde a operação acontece: processamento de pacotes (aferição), expedição de malotes e a **geração das faturas**.

> **🗣️ Para Orientar seu Cliente:** Use esta analogia para explicar ao seu cliente por que ele não realiza certas ações na plataforma dele. Ex: "A sua plataforma web (Web do Cliente) é para você criar suas etiquetas e consultar o rastreamento. A nossa (Web da Agência) é onde administramos o seu contrato. Já o sistema do nosso caixa (Consolidador) é o que processa seus pacotes e gera sua fatura."

### Preciso instalar algum software para usar a Web da Agência?

Não. A plataforma é 100% online e acessada diretamente pelo seu navegador de internet (como Google Chrome, Firefox ou Microsoft Edge). Apenas uma conexão estável com a internet é necessária.

---

## 2. Gestão de Clientes e Configurações

### Como cadastro um novo cliente?

O cadastro é feito na Web da Agência.

1. Acesse o menu de **Cadastro de Clientes**.
2. Preencha os dados da empresa ou pessoa física.
3. Configure os detalhes do contrato: tabela de preços, serviços habilitados, e o **Token da API** dos Correios.
4. Crie os usuários e senhas de acesso para que seu cliente possa usar a **Web do Cliente**.

> **💡 Conhecimento Operacional (Para a Agência):** Ao cadastrar um novo cliente, crie o hábito de salvar o Token da API em um local seguro da agência (como um gerenciador de senhas). Isso evita ter que solicitar novamente ao cliente caso precise fazer alguma manutenção ou diagnóstico no futuro.

### Qual o papel da AGF no suporte ao cliente?

A AGF é o **primeiro nível de suporte**. Isso inclui:

* **Orientar** sobre como usar a Web do Cliente.
* **Ajudar** na resolução de dúvidas operacionais comuns.
* **Coletar informações** detalhadas sobre problemas técnicos e encaminhá-los de forma organizada ao Suporte Especializado do Portal Postal.

> **💡 Conhecimento Operacional (Para a Agência):** Seja proativo. Use os relatórios da Web da Agência para identificar clientes que pararam de postar ou cujo volume caiu drasticamente. Pode ser um sinal de alguma dificuldade técnica ou dúvida que eles não reportaram.

### Como configuro os serviços que um cliente pode usar?

Dentro do cadastro de cada cliente, na seção de **Contrato**, você pode habilitar ou desabilitar os serviços postais (PAC, SEDEX, etc.) e serviços adicionais (Logística Reversa, AR, etc.) de acordo com o que foi negociado comercialmente.

> **🗣️ Para Orientar seu Cliente:** Quando um cliente disser "o serviço SEDEX não aparece para mim", este painel de Contrato na Web da Agência é o primeiro lugar que você deve verificar para confirmar se o serviço está realmente habilitado para ele.

---

## 3. Acompanhamento Financeiro

### Eu gero as faturas e boletos pela Web da Agência?

**Não.** A Web da Agência é a sua ferramenta para **monitoramento e análise financeira**. A **geração** das faturas e boletos é uma função do **Consolidador**, que possui a base de dados histórica completa para realizar o cálculo detalhado.

### Então, o que eu faço na Web da Agência em relação ao faturamento?

Na Web da Agência, você tem uma visão gerencial completa do ciclo financeiro. Você pode:

* **Acompanhar o status das faturas** que foram geradas no Consolidador (abertas, pagas, vencidas).
* **Analisar relatórios financeiros** detalhados para entender a rentabilidade por cliente.
* **Visualizar os resultados da conciliação** das informações de postagem com os dados financeiros importados (BDF, C.A.).

### É possível gerar relatórios financeiros detalhados?

Sim. A plataforma oferece um módulo de relatórios onde é possível gerar análises customizadas de receitas, custos por cliente, comparativos de períodos e a performance geral da sua agência.

> **💡 Conhecimento Operacional (Para a Agência):** Use o relatório de "Rentabilidade por Cliente" para entender quais contratos são mais saudáveis e onde pode haver necessidade de um reajuste de tabela ou uma conversa comercial.

---

## 4. Integrações e Relatórios

### Posso integrar a conta de um cliente com marketplaces (Mercado Livre, Shopee)?

Sim. Na Web da Agência, dentro do cadastro do cliente, você pode configurar as credenciais de integração com diversas plataformas de e-commerce e marketplaces. Isso permite que seu cliente centralize os pedidos e a emissão de etiquetas na Web do Cliente.

> **🗣️ Para Orientar seu Cliente:** Informe ao seu cliente que a integração é configurada por você (AGF), mas que ele precisará fornecer as chaves de API da conta dele no marketplace. Oriente-o sobre como encontrar essas chaves de forma segura.

### Como acompanho o desempenho das postagens?

Através do módulo de **Relatórios**, você pode extrair dados sobre o volume de postagens por cliente, por serviço, analisar os prazos de entrega e obter uma visão completa do desempenho logístico.

---

## 5. Suporte e Solução de Problemas

### O que fazer se um cliente não consegue gerar uma etiqueta?

Este é o checklist de diagnóstico mais comum. Verifique na Web da Agência, no cadastro do cliente:

1. O **Token da API** está válido e configurado corretamente?
2. O **contrato com os Correios** está vigente? Um contrato expirado bloqueia a geração de etiquetas.
3. O **serviço** que ele está tentando usar (ex: SEDEX 12) está habilitado no contrato dele?
4. O **Token da API** foi sobreposto? Confirme com o cliente se ele não gerou um novo token para outra finalidade, invalidando o que está configurado aqui.

Se tudo estiver correto, o problema pode ser outro e deve ser escalado para o suporte.

### Como proceder se a plataforma estiver lenta ou indisponível?

1. Verifique a estabilidade da sua conexão de internet.
2. Tente acessar em uma janela anônima do navegador para descartar problemas de cache.
3. Se o problema continuar, pode ser uma instabilidade geral. Entre em contato com o suporte do Portal Postal para obter informações.

### Como abro um chamado para o Suporte Especializado?

Utilize o canal oficial de suporte (Chat Integrado na Web da Agência). Ao abrir o chamado, forneça o máximo de detalhes possível:

* Nome da AGF e do cliente afetado.
* Descrição clara do problema ("O cliente não consegue gerar etiquetas" não é suficiente. Diga "Cliente X não consegue gerar etiqueta SEDEX, erro 'Serviço Inválido' aparece na tela").
* Capturas de tela (prints) da mensagem de erro.
* Horário aproximado em que o erro ocorreu.

> **💡 Conhecimento Operacional (Para a Agência):** Quanto mais detalhado o chamado (com SROs de exemplo, nome do cliente, horário), mais rápido o suporte especializado poderá diagnosticar e resolver o problema.
