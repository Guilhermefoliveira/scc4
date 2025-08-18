# PPN no Portal Postal: O Guia Completo para Agilizar seus Envios

Este guia é o seu ponto de partida para entender e dominar a **Pré-Postagem Nacional (PPN)** dos Correios e como o ecossistema do **Portal Postal** transforma sua rotina de envios, tornando-a mais rápida, segura e profissional. Ele foi pensado para a Agência Franqueada (AGF), capacitando sua equipe a operar o sistema e a orientar seus clientes.

## O que é a Pré-Postagem (PPN) e por que usar?

A **PPN** é a solução moderna dos Correios que permite preparar e identificar encomendas digitalmente antes mesmo de chegarem à agência. Em vez de preencher dados no balcão, o processo é antecipado, garantindo enormes vantagens:

* **✅ Agilidade Máxima na Postagem:** Com os dados já no sistema dos Correios, o atendimento na agência é expresso.
* **✅ Menos Erros, Mais Segurança:** As informações essenciais (CEP, peso, dimensões) são validadas no momento da criação da etiqueta, evitando erros que causam devoluções e cobranças indevidas.
* **✅ Rastreamento Imediato:** A etiqueta já é gerada com um código de rastreio (SRO) válido, permitindo que você e seu cliente acompanhem o envio desde o primeiro momento.
* **✅ Profissionalismo:** Padronize suas embalagens com etiquetas geradas pelo sistema, eliminando preenchimentos manuais.

## Entendendo o Ecossistema Portal Postal

Para dominar o fluxo, é importante conhecer as três partes principais do sistema:

### 🖥️ Web da Agência

É o seu painel de controle administrativo, acessado pelo navegador. Aqui você gerencia clientes, contratos, **monitora o faturamento realizado no Consolidador**, importa dados de conferência (SARA/C.A.) e acessa relatórios gerenciais completos.

### 🌐 Web do Cliente

É o portal online que você oferece aos seus clientes. Nele, seus clientes de contrato podem gerar suas próprias etiquetas PPN, consultar preços e rastrear objetos, dando autonomia a eles e adiantando o seu trabalho.

### 💻 LOCAL | Consolidador (Aferidor)

Este é o software instalado na rede local da sua agência. É a sua ferramenta de produção diária, onde as encomendas são processadas (aferidas), consolidadas, vendidas, preparadas para o envio (expedição) e onde o **faturamento** dos clientes de contrato é realizado.

## O Fluxo de Trabalho da PPN: Do Cliente à Postagem

O processo é dividido em etapas claras, cada uma ocorrendo em uma parte específica do ecossistema.

---

### Etapa 1: Preparação da Etiqueta (na Web do Cliente)

Tudo começa com o seu cliente. Ele acessa a **Web do Cliente** do Portal Postal e realiza a preparação dos envios:

1. Em **"Etiquetas > Gerar Etiquetas"**, ele preenche os dados do destinatário e do objeto.
2. O sistema gera uma etiqueta PPN já com código de rastreio (SRO) válido.
3. O cliente imprime e cola essa etiqueta na encomenda.

Para a sua agência, o resultado é que esta encomenda já existe digitalmente, pronta para a próxima etapa.

> **🗣️ Para Orientar seu Cliente:** Reforce a importância de preencher corretamente todos os dados na Web do Cliente, especialmente CEP, peso e dimensões. Explique que isso agiliza o processo na agência e evita problemas.
> **💡 Conhecimento Operacional (Para a Agência):** No Consolidador, as PPNs geradas pelos clientes aparecerão para serem processadas. Oriente sua equipe a verificar regularmente a entrada dessas pré-postagens.

---

### Etapa 2: Consolidação e Venda (no Consolidador)

Quando a encomenda chega à sua agência, ela é processada no **Consolidador**. O operador bipa o código de barras da etiqueta, e o sistema busca as informações da PPN. O passo seguinte depende do seu equipamento:

#### Cenário 1: Com Balança Padrão (Entrada Manual)

1. Após bipar o SRO, o operador posiciona a encomenda na balança.
2. Ele então **digita manualmente o peso e as dimensões** (altura, largura, comprimento) que foram aferidos.
3. O Consolidador valida os dados, e o operador confirma a postagem.

#### Cenário 2: Com Balança de Cubagem (ex: BoxCubo)

1. Ao bipar o SRO, o operador posiciona o pacote na **balança de cubagem, que faz a captura automática do peso e das dimensões**.
2. Os dados são enviados instantaneamente para o Consolidador, sem necessidade de digitação.
3. Se a "captação automática" dos Correios estiver ativa, a venda é registrada de forma automática **ao exportar os dados para o Correios Atende (C.A.)**, eliminando a digitação manual no sistema dos Correios.

Este mesmo processo é usado para PPN de Terceiros (Marketplaces).

> ![Tela do Consolidador mostrando um objeto sendo aferido]
> **💡 Conhecimento Operacional (Para a Agência):** A etapa de aferição no Consolidador é crucial. É aqui que os dados informados pelo cliente são validados. Divergências de peso ou dimensões devem ser corrigidas para garantir a cobrança correta e evitar problemas com os Correios.
> **🗣️ Para Orientar seu Cliente:** Explique que, ao chegar na agência, o pacote dele passará por uma conferência de peso e medidas. Se houver diferença em relação ao que ele informou na PPN, o sistema da agência fará o ajuste para a cobrança correta.

---

### Etapa 3: Expedição (no Consolidador)

Após consolidar um grupo de encomendas, o fechamento do malote (mala/unitizador) também é feito no **Consolidador**.

1. Na área de **Expedição**, o operador cria uma nova mala.
2. Bipa as etiquetas de todas as encomendas que irão naquela mala.
3. Ao finalizar, o sistema gera o arquivo `.csv` de expedição PP. É este arquivo que será importado dentro do **Expedidor SRO Web (Robo Expedição)** para finalizar o envio das malas.

> **💡 Conhecimento Operacional (Para a Agência):** O ideal é gerar o arquivo de expedição ao final do dia ou do turno, após todos os objetos destinados àquele malote terem sido processados e conferidos. Isso garante a integridade do lote.

---

### Etapa 4: Conferência Financeira e Monitoramento (na Web da Agência)

No dia seguinte à postagem, a gestão e análise dos resultados acontecem na **Web da Agência**.

1. Acesse o menu **"Importar dados CA"** ou **"Importar dados SARA"** (para importar o BDF).
2. Selecione a data para o sistema cruzar os dados postados com os dados faturados pelos Correios, apontando qualquer divergência.
3. Na Web da Agência, você **monitora o status das faturas geradas no Consolidador** e utiliza os relatórios para analisar a rentabilidade e o desempenho financeiro.

> ![Tela de importação de dados do Correios Atende na Web da Agência]
> **💡 Conhecimento Operacional (Para a Agência):** A rotina de importação do BDF e dos dados do C.A. na Web da Agência é fundamental para a conciliação financeira. É aqui que você confere se o que o Correios cobrou de você bate com o que foi registrado no Consolidador e cobrado do cliente.

---

## Pronto para Começar?

Para habilitar todas essas vantagens para seus clientes, o primeiro passo é conectar a conta Correios do cliente ao Portal Postal. Ele precisará do **ID Correios** e **Token (senha)** de acesso.

➡️ Para obter esses dados, seu cliente pode seguir o tutorial completo: **[Guia para Gerar o Token de Acesso dos Correios](./cws-token.md)**

Com o login e o token em mãos, a ativação final é feita por você na **Web da Agência**, no menu **Cadastros > Clientes > Contrato ECT**.

> **🗣️ Para Orientar seu Cliente:** "Para usufruir de todas as facilidades da nossa plataforma online, o primeiro passo é você gerar seu Token de Acesso lá no site dos Correios. [Link para o tutorial]. Assim que tiver o Token, me informe para que eu possa configurar seu acesso aqui na agência."
