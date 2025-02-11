---
sidebar_position: 1
---

# PPN (Pré-Postagem Nacional) no Portal Postal

Este documento unifica todas as informações referentes à implantação, uso e benefícios da PPN (Pré-Postagem Nacional) no Portal Postal, incluindo os requisitos de configuração, o funcionamento com Balanças Cubadoras (Correios Atende), integração com o próprio Correios Atende e esclarecimentos sobre token, contratos e fluxo de vendas. Também aborda a geração de etiquetas, exportações, particularidades de serviços e suporte para PPN de terceiros.

---

## 1. O que é a PPN e qual sua importância

A **PPN (Pré-Postagem Nacional)** faz parte do ecossistema **CWS (Correios Web Service)**, que moderniza e unifica os serviços dos Correios. Ela substitui a antiga **PLP (Pré-Lista de Postagem)**, tornando a emissão de rótulos, controle de objetos e validação de dados mais ágeis e seguros.

### 1.1 Benefícios principais

- **Automação de Etiquetas**: Dispensa solicitações de faixas de etiquetas.  
- **Validações Automáticas**: Verifica CEP, dados de destinatário, dimensões e serviços disponíveis.  
- **Integração Simplificada**: Toda comunicação com os Correios ocorre via Portal Postal, sem configurações complexas.  
- **Controle Centralizado**: Gerencia pré-postagem, impressão de rótulos, declarações de conteúdo e relatórios em um só lugar.

---

## 2. Acesso e configurações iniciais

### 2.1 Credenciais

- Utilize **login e senha** do Portal Postal; não é preciso criar contas adicionais nos Correios.  
- Para habilitar a PPN em um contrato, gere ou vincule o **token** do CWS (Correios Web Services).

### 2.2 Perfis de usuário

- O administrador no Portal Postal pode criar múltiplos perfis, definindo as permissões para cada operador.  
- Cada colaborador tem login próprio, com acesso às funcionalidades necessárias.

### 2.3 Validade do token

- O token permanece válido até ser **revogado ou regenerado**.  
- Em caso de recriação, o anterior é invalidado. É fundamental ter controle interno para evitar paralisações.

---

## 3. Passo a passo da pré-postagem pelo Portal Postal

### 3.1 Criando uma pré-postagem

1. **Acesse o Módulo de Etiquetas ou Pré-Postagens** no Portal Postal.  
2. **Informe dados de remetente e destinatário** (nome, CPF/CNPJ, endereço, CEP).  
3. **Selecione o serviço**: Sedex, PAC ou outro habilitado.  
4. **Nota Fiscal ou Declaração de Conteúdo**: Caso não haja NF, gere a Declaração de Conteúdo automaticamente.  
5. **Conferência e finalização**: Valide as informações e confirme para registrar a Pré-Postagem.

### 3.2 Vantagens

- **Fluxo Simplificado**: Sem manusear sistemas externos.  
- **Integração com Contratos**: O Portal Postal reconhece automaticamente os serviços ativos no contrato do cliente.

---

## 4. Impressão de rótulos (etiquetas)

### 4.1 Geração automática

- O Portal Postal gera etiquetas de acordo com o padrão oficial dos Correios.  
- Pode haver diferenças visuais em relação ao antigo Sigep Web, mas a conformidade é assegurada.

### 4.2 Formatos de impressão

- **Papel comum (A4)**: É possível recortar o rótulo (ex.: 10x15 cm).  
- **Térmica (ZPL)**: Caso seja disponibilizada futuramente, o sistema fará a transição de forma nativa.  
- **Impressão em lote**: Selecione múltiplas pré-postagens para impressão conjunta.

---

## 5. Declaração de conteúdo

### 5.1 Quando usar

- Sempre que não houver Nota Fiscal, em conformidade com exigências legais.

### 5.2 Características

- Uma declaração por objeto, impressa em aba separada do navegador.  
- Botão específico no Portal Postal para gerar o documento.

---

## 6. Cadastro de destinatários e gestão de dados

### 6.1 Volume de cadastros

- O sistema não limita a quantidade de destinatários, suportando grandes bases.

### 6.2 Evitando duplicidades

- Ao informar CPF/CNPJ, o Portal Postal identifica se já existe um cadastro prévio.

### 6.3 Importação em lote

- É possível carregar destinatários via planilhas (CSV/Excel), agilizando operações de grande escala.

---

## 7. Postagem e recebimento

### 7.1 Postagem em agência

- Para contratos “a faturar”, basta levar a pré-postagem a uma agência que já opere com o Correios Atende (ou eventualmente com o sistema legado SARA, enquanto estiver ativo).  
- Para contratos “à vista”, consulte quais agências aceitam esse modelo.

### 7.2 Rastreamento e status

- Após a postagem, o objeto muda para status “postado” e pode ser acompanhado em tempo real.  
- O histórico e documentos ficam disponíveis por **5 anos**.

---

## 8. Importação de arquivos e operação offline

### 8.1 Importação de pré-postagens

- Permite subir lotes de objetos via planilhas, evitando digitação manual.  
- Adeque-se ao layout do Portal Postal.

### 8.2 Operação offline

- Não existe versão offline da PPN, mas é possível preparar o arquivo e importar quando online.

---

## 9. Faixas de etiquetas e controle

- O Portal Postal administra de forma automática as etiquetas para a PPN, eliminando a necessidade de solicitar ranges.  
- Relatórios internos mostram o consumo e a disponibilidade de etiquetas.

---

## 10. Principais dúvidas e esclarecimentos

### 10.1 A PPN cobre cartas?

- Atualmente, a PPN foca em **encomendas** (PAC, SEDEX, etc.). Para cartas registradas, há soluções específicas no Portal Postal.

### 10.2 Habilitação da PPN no Portal Postal

1. **Gerar Token no CWS**: Associe-o ao contrato.  
2. **Verificar serviços**: Confirme se PAC, Sedex, etc. estão habilitados.  
3. **Atualizar contrato** na tela de cadastro de clientes, conforme diretrizes internas dos Correios.  
4. **Ativar o botão da PPN** no cadastro de cada cliente no Portal Postal.

### 10.3 Armazenamento de etiquetas

- Registros e documentos das pré-postagens ficam armazenados por **5 anos**.

### 10.4 Múltiplos usuários

- O Portal Postal permite vários usuários simultâneos, cada um com seu próprio login.

---

## 11. Uso do Correios Atende (CA) e captação automática

### 11.1 Como funciona

- Solicite aos Correios a ativação do botão de Captação Automática (CA).  
- Com a API liberada, todo o fluxo de PPN passa a ocorrer via CA, sem que o usuário altere seu modo de operação no Portal Postal.

### 11.2 Vídeos explicativos

- **Validação de PPN pela Captação Automática (Correios Atende)**: [https://shorturl.at/9cw4H](https://shorturl.at/9cw4H)  
- **Expedição no SRO WEB**: [https://shorturl.at/CFTC9](https://shorturl.at/CFTC9)

> **Observação**: O fluxo no Portal Postal permanece **igual**, seja usando o sistema legado SARA ou o Correios Atende.

---

## 12. Integrações e melhorias em desenvolvimento

1. **Aplicativo de Coletas (Flutter)**  
   - Melhor performance e interface mais moderna.  
   - Rastreio em tempo real dos motoristas e alertas automáticos ao cliente.

2. **Portal responsivo**  
   - Acesso completo via celulares/tablets, com telas otimizadas para emissão de etiquetas e relatórios.

3. **Relatórios unificados**  
   - Consulta de vendas do Correios Atende (SRO, dimensões, valores).  
   - Fechamento de caixa integrado entre SARA (enquanto ativo) e Correios Atende.

4. **Equipamentos de validação**  
   - Integração com cubadoras (ex.: **Box Cubo**), que capturam peso e dimensões automaticamente.

---

## 13. Serviços específicos sem PPN

Alguns serviços ainda não fazem parte da PPN, permanecendo no fluxo antigo (PLP ou XML para o sistema legado), tais como:

- Impresso MDP  
- Carta Simples  
- Digital AR  

Verifique periodicamente se há atualizações na lista de serviços disponíveis.

---

## 14. Suporte e contatos

- **Canal de Suporte do Portal Postal**: Para dúvidas de configuração, uso do token e emissão de rótulos.  
- **Correios Atende**: Para questões pontuais sobre captação automática ou validação no momento da postagem.

---

## 15. Observações finais

- O Portal Postal é constantemente atualizado para se alinhar às mudanças dos Correios.  
- Ajustes de layout e funcionalidades são aplicados de forma transparente para o usuário.  
- Feedbacks e sugestões contribuem para melhorias contínuas.

---

## 16. Fluxo da PPN no Portal Postal: balanças cubadoras e configurações

Os Correios vêm modernizando seus sistemas de acesso ao cliente. Uma das principais novidades é a utilização da **Balança Cubadora** (API liberada) para vendas via PPN, especialmente agora que o **Correios Atende** (CA) tende a substituir gradualmente o SARA.

### 16.1 Habilitação da balança de cubagem

1. **Contate o Suporte do Correios Atende** (ou do sistema legado, caso ainda seja utilizado): Informe o MCU da agência e o número de série da Balança Cubadora (ex.: “BC12345SCC4”).  
2. **Liberação no sistema**: O suporte dos Correios habilitará o botão “Balança de Cubagem” na tela de vendas do Correios Atende.

> **Observação**: Caso a balança seja de outro fabricante, entre em contato com o Suporte do Portal Postal. Se a agência possuir mais de uma Balança BoxCubo, é necessário informar o ID de todas elas.

### 16.2 Cadastro da balança no Portal Postal

Após a liberação, acesse:

- **Consolidador > Configurações > Configurações Gerais > SVP/PPN**  
- Insira o **ID de Série** da Balança Cubadora.

### 16.3 Geração do token e cadastro do contrato ECT

Como exigência dos Correios, todos os clientes precisam ter o **token** gerado e autenticado no **CWS**.

- O token possui 40 caracteres e deve ser corretamente preenchido na tela de Contrato ECT no Portal Postal.  
- Em caso de dúvida, contate o Suporte do Portal Postal.  

Link de referência:  
[Geração do Token nos Correios CWS / Cadastro do Portal Postal](https://scc4.atlassian.net/wiki/spaces/DP/pages/4325434/Gera+o+do+Token+nos+Correios+CWS+Cadastro+do+Portal+Postal.)

> **Importante**: Para novos clientes de contrato, o uso da PPN é obrigatório, pois a ECT não fornece mais credenciais do SIGEP. Clientes antigos precisam migrar para a PPN, cadastrando o token corretamente.

### 16.4 Etiquetas na PPN e serviços disponíveis

- **Sem range/estoque de etiquetas**: A PPN gera o SRO no momento da emissão (apenas PAC e SEDEX têm SRO disponível na PPN).  
- Para serviços como IMPRESSO REG, a etiqueta não virá com SRO, pois os Correios ainda não liberaram para essas modalidades.  
- Se o cliente tiver ranges físicos (estoque de etiquetas), eles **não** são utilizados na PPN.

### 16.5 Geração de pré-postagens e etiquetas pelo cliente

- Ao gerar a Pré-Postagem na **Web do Cliente**, o Portal Postal envia as informações à PPN.  
- O fluxo de geração permanece intuitivo e similar ao atual.  
- Na venda via Consolidador (ALT+B ou ALT+Q), o sistema informará que a etiqueta foi gerada com a PPN, exibindo o SRO (ex.: “AA123456789BR”).

### 16.6 Exportação de PPNs no Consolidador

- Após realizar vendas PPN no Consolidador, na tela de **Exportar**, haverá a opção “Exportar PPNs para o Correios Atende (ou SARA, se ainda ativo)”.  
- Ao selecionar essa opção, os arquivos de PPN serão exportados corretamente, sem gerar validação de SVP ou PLP.

### 16.7 Vendas de PPNs de terceiros

- “PPNs de Terceiros” são aquelas não geradas originalmente no Portal Postal.  
- Para vendê-las, a agência precisa gerar e autenticar seu **token** no CWS, com a permissão “Pré-Postagem - Fornecedor (546)” habilitada.  
- Em seguida, na Web da Agência, em **Configurações > Gerais**, informe login e senha (ou token) da API.  
- Assim, as PPNs de terceiros poderão ser vendidas pelas telas ALT+Q ou ALT+P.

---

## 17. Conclusão

A adoção da **PPN** no Portal Postal, integrada ao **Correios Atende** (e ao antigo SARA enquanto vigente) e às Balanças Cubadoras, proporciona ganhos de eficiência, rastreabilidade e praticidade, sem a necessidade de faixas de etiquetas pré-impressas. As habilitações necessárias — “Balança de Cubagem” e token do CWS — são fundamentais para o funcionamento desse novo fluxo de vendas.

Dessa forma, a agência e seus clientes contam com uma solução moderna, ágil e em constante evolução, apta a cumprir as exigências dos Correios e a oferecer uma experiência de postagem simplificada e confiável.

**Bom uso e boas postagens!**
