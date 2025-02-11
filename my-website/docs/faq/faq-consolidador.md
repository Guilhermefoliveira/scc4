---
sidebar_position: 1
---

# Consolidador

---

## 1. Introdução e Configuração Inicial

### O que é o Consolidador e para quem ele é indicado?

O Consolidador é uma aplicação local usada pelas Agências Franqueadas dos Correios (AGFs) para gerenciar e controlar as operações ligadas ao Portal Postal. Ele é indicado para AGFs que precisam centralizar processos de importação, exportação, expedição, geração de relatórios, controle de faturas e cadastros, garantindo mais eficiência e segurança nas atividades diárias.

### Quais são as principais vantagens de utilizar o Consolidador?

- **Centralização Operacional**: Une todas as operações em um único lugar.  
- **Automação de Processos**: Reduz erros e retrabalho, acelerando etapas como expedição e processamento de objetos.  
- **Integração Completa**: Sincroniza automaticamente informações com o Portal Postal Web e outros sistemas.  
- **Relatórios e Análises**: Gera relatórios para controle financeiro e operacional, auxiliando na tomada de decisões.  
- **Suporte e Manutenção**: Ferramentas de suporte internas e sincronização manual ou automática para estabilidade do sistema.

### Quais são os requisitos técnicos para instalar o Consolidador?

- **Sistema Operacional**: Windows 10 ou superior.  
- **Hardware**: Processador Intel i5 (ou equivalente) e pelo menos 8 GB de memória RAM, garantindo boa performance sem sobrecarregar o CPU.  
- **Conexão com a Internet**: Necessária para a sincronização com o Portal Postal Web; recomenda-se uma internet banda larga estável.  
- **Banco de Dados Local**: Fornecido junto com o Consolidador, deve ser instalado e configurado adequadamente.  
- **Dispositivos Periféricos**: Se necessários, como balanças (normais ou cubadoras) e impressoras térmicas, devidamente configurados no sistema.

### Como faço a configuração inicial após a instalação?

1. **Abra o Consolidador** e acesse o menu de configurações.  
2. **Cadastre parâmetros essenciais**, como máquinas de franquia, sequências lógicas, impressoras e balanças.  
3. **Sincronize** pela primeira vez com o Portal Postal Web para importar dados iniciais ou validar credenciais de acesso.  
4. **Personalize** as configurações gerais conforme as necessidades da sua AGF (ex.: identificação de PLPs, e-mail, permissões de usuários).  

### É preciso ter acesso constante à internet?

Sim, pois o Consolidador sincroniza periodicamente as informações com o Portal Postal Web. No entanto, se houver quedas temporárias de conexão, o sistema segue operando localmente e retoma a sincronização quando a internet for restabelecida.

---

## 2. Operações Diárias: Importações, Exportações e Expedição

### Como são realizadas as importações de arquivos no Consolidador?

- **Configuração de layouts de importação**: Defina como o sistema deve ler arquivos de postagem, tickets do SARA e listas de postagem.  
- **Importação efetiva**: Acesse o menu Importações, selecione o tipo de arquivo e localize o arquivo a ser importado.  
- **Consulta de importações**: É possível verificar o histórico de arquivos já importados para acompanhamento e auditoria.  

### Quais tipos de arquivos podem ser importados?

O Consolidador suporta diversos formatos, como **arquivos de postagem (geralmente CSV, TXT ou XML)** e **tickets do sistema SARA**. A configuração de layout permite mapear campos personalizados, adaptando-se aos padrões da AGF.

### Como funciona a exportação de dados?

O Consolidador exporta vendas, lotes de movimentação e outros dados para integrar com o SARA, Portal Postal Web ou sistemas de gestão dos Correios. Basta acessar o menu de **Exportações**, escolher o tipo de dado e confirmar o envio. É possível verificar se houve sucesso ou falha na tela de monitoramento de exportações.

### O que é o processo de Expedição e como ele funciona?

A expedição consiste em agrupar e despachar objetos postais em malas de envio. O Consolidador permite:  

- **Abertura simultânea de até 12 malas**.  
- **Separação automática** de volumes.  
- **Impressão de etiquetas** para cada mala.  
- **Controle de objetos não expedidos** (aqueles que não foram inseridos em nenhuma mala ou tiveram algum erro).

### Posso rastrear meus objetos pelo Consolidador?

Sim. O sistema registra eventos operacionais (como expedição, conferência e devoluções) e permite **consultar o status** de cada objeto, ajudando na identificação de possíveis atrasos ou problemas de entrega.

---

## 3. Funcionalidades e Ferramentas Principais

### Quais cadastros podem ser realizados no Consolidador?

- **Sequências lógicas** (definição da numeração de postagens ou processos).  
- **Sub-caixas do SARA** (caso exista divisão de fluxos).  
- **Máquinas de franquia**.  
- **Dispositivos** (balanças, impressoras, e-mail).  
- **Identificação de PLPs** (para relacionar o objeto com o número correspondente).

### Como funciona a venda local?

A venda local é uma **ferramenta operacional** para processar objetos vendidos diretamente na AGF, gerando etiquetas e registrando pagamento. Ela pode ser configurada para diversos níveis de detalhamento, como quantidade, peso e valor declarado.

### Há controle de devoluções no sistema?

Sim. O Consolidador possui funcionalidades para **conferência de etiquetas e devoluções**, permitindo marcar objetos como devolvidos ao remetente ou aguardando retirada. É possível acompanhar todo o ciclo até a finalização.

### Como imprimir relatórios de produtividade e vendas?

1. Acesse o menu **Relatórios**.  
2. Selecione o tipo de relatório (ex.: objetos processados, movimentações financeiras, auditorias de caixas, Curva ABC).  
3. Configure filtros (datas, clientes, status) e clique em **Gerar Relatório**.  
4. Você pode exportar em formatos como PDF ou Excel, se desejar.

---

## 4. Faturamento, BDF e Financeiro

### O Consolidador gera faturas automaticamente?

Sim. Na aba **Faturas**, você pode gerar, consultar e gerenciar faturas de forma automática ou manual, controlando pagamentos, limites de crédito e registros de cobrança.

### Como fazer a importação e pré-alerta de dados do BDF (Boletim Diário Financeiro)?

1. Acesse o menu **BDF** dentro do sistema.  
2. Selecione **Importar Arquivo** e defina o layout se necessário.  
3. Após a importação, confira o **pré-alerta** das movimentações financeiras.  
4. Utilize relatórios específicos (DDO, Proter) para análise e registro no sistema financeiro.

### É possível acompanhar o status das faturas em aberto?

Sim. O sistema disponibiliza um **painel de faturas** que mostra valores em aberto, pagos e vencidos, facilitando o controle financeiro da AGF. Você também pode gerar relatórios consolidados para análise.

---

## 5. Relatórios e Monitoramento

### Quais indicadores de performance estão disponíveis?

- **Curva ABC**: Mostra quais clientes ou produtos representam maior volume de faturamento ou postagens.  
- **Auditorias de Caixas**: Auxiliam na conferência de valores recebidos e movimentações.  
- **Relatórios de Objetos Processados**: Identificam quantos objetos foram registrados, expedidos ou devolvidos.  
- **Movimentações Financeiras**: Permite acompanhar o fluxo de caixa e a rentabilidade do período.

### Como posso monitorar todo o fluxo operacional?

Acesse o menu **Relatórios** ou **Pesquisas** e utilize as ferramentas de consulta para verificar objetos postados, lotes expedidos, listas de postagem, clientes e eventos do sistema. Assim, você tem um panorama completo do desempenho operacional.

---

## 6. Suporte, Manutenção e Utilitários

### Há algum recurso de backup no Consolidador?

Sim. No menu **Utilitários**, há opções para **backup do banco de dados** e restauração, garantindo a segurança das informações armazenadas localmente. É recomendado realizar backups periódicos.

### Como faço para atualizar tarifas ou o próprio sistema?

- **Atualização de Tarifas**: Acesse **Utilitários** > **Atualizar Tarifas** e confirme para baixar a nova tabela de preços.  
- **Atualização do Sistema**: Pode ser configurada para **sincronização automática** ou executada manualmente sempre que houver uma nova versão disponível.

### Preciso configurar algo para a sincronização manual com o Portal Postal Web?

Sim. No menu de configurações, você pode habilitar a **sincronização manual**. Assim, toda vez que desejar atualizar dados (importar ou exportar), basta acessar o menu e clicar em **Sincronizar Agora**.

### Qual o procedimento se o sistema apresentar lentidão ou travar?

1. **Verifique** a conexão de internet.  
2. **Feche** e reabra o Consolidador.  
3. **Reinicie** o computador, se necessário.  
4. Se o problema persistir, **entre em contato com o suporte**, informando a versão do sistema e detalhes do ocorrido.

---

## 7. Perguntas Gerais

### É possível integrar o Consolidador com outros sistemas além do Portal Postal Web?

O foco principal é a integração com o Portal Postal Web e sistemas dos Correios (SARA). Porém, dependendo das necessidades da AGF, podem existir **soluções personalizadas** ou adicionais via arquivo de importação/exportação.

### Preciso de treinamento para operar o Consolidador?

O sistema é **intuitivo**, mas recomenda-se um breve treinamento para conhecer recursos avançados, configurações e boas práticas de uso, garantindo maior eficiência na operação.

### Onde encontro mais informações ou suporte especializado?

Você pode entrar em contato com o **suporte técnico** disponibilizado pela equipe do Portal Postal/Consolidador. Há também manuais e tutoriais que podem ser acessados dentro do próprio sistema ou no site oficial, além de canais de atendimento via e-mail e telefone.

---

**Ainda tem dúvidas?**  
Entre em contato com o suporte do Portal Postal para obter ajuda especializada ou consulte os tutoriais disponíveis no sistema. Esse FAQ será atualizado periodicamente para refletir melhorias e novas funcionalidades.
