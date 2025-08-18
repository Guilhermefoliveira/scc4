---
sidebar_position: 5
---

# Configurar Balança

Este guia detalha como configurar a comunicação entre o **Consolidador** e a balança de pesagem conectada ao computador. Uma configuração correta é fundamental para que o peso dos objetos seja capturado de forma automática e precisa durante o processo de aferição na tela "Consolidar Objetos".

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Configurar Balança`.

> [![Tela de Configurações de Balança](/img/conf_balanca/configuracao-balanca.png)](/img/conf_balanca/configuracao-balanca.png)
> *Tela de Configurações de Balança*

---

## Para que serve esta tela?

O objetivo desta tela é estabelecer uma conexão de dados bem-sucedida entre o software Consolidador e a balança física da sua agência. Isso permite que, durante o atendimento no balcão, o operador não precise digitar o peso manualmente, pois o sistema o lerá diretamente da balança, garantindo agilidade e eliminando erros.

> **💡 Conhecimento Operacional (Para a Agência):** Esta configuração é local e precisa ser feita **em cada computador** da sua agência que estiver conectado a uma balança. Se você mover uma balança para um novo computador, precisará refazer esta configuração nessa nova máquina.

---

## O Fluxo de Configuração e Teste

O processo é simples e dividido em duas partes: configurar os parâmetros e depois testar a conexão.

### Parte 1: Configurando os Parâmetros da Balança

No painel esquerdo, "Configure a sua balança", preencha os seguintes campos:

* **`Balança:`** No menu dropdown, selecione a marca e modelo da sua balança (ex: URANO, Toledo, Filizola).
    > **💡 Conhecimento Operacional (Para a Agência):** Ao selecionar o modelo, o sistema geralmente preenche automaticamente os campos `Baudrate`, `Databits`, `Stopbits` e `Paridade` com os valores padrão para aquela marca. Na maioria dos casos, você não precisará alterar esses valores.

* **`Porta:`** Selecione a porta de comunicação na qual sua balança está conectada. Geralmente é uma porta COM (ex: COM1, COM2, COM3). Este é o campo que mais comumente precisa de ajuste manual.

* **`Baudrate`, `Databits`, `Stopbits`, `Paridade`:** São parâmetros técnicos de comunicação serial. A menos que o manual da sua balança especifique valores diferentes, mantenha os que o sistema sugeriu após a escolha da marca.

* **`SALVAR`:** Após definir a marca e a porta, clique em **SALVAR** para gravar as configurações.

### Parte 2: Testando a Conexão

Após salvar, é crucial testar para garantir que a comunicação está funcionando.

1. Coloque um objeto com peso conhecido (ex: um peso de aferição de 1kg ou qualquer item que você saiba o peso exato) sobre a balança.
2. No painel direito, "Teste balança configurada", clique no botão **`Iniciar Teste`**.
3. Observe o campo **`Leitura da balança:`**. O sistema deve exibir o peso exato do objeto que está sobre a balança.

Se o peso for exibido corretamente, a configuração foi bem-sucedida!

> **🗣️ Para Orientar seu Cliente:** (Sobre a importância da precisão) "Configuramos a integração direta da nossa balança com o sistema para garantir que o peso de suas encomendas seja capturado de forma precisa e automática, eliminando erros de digitação e agilizando o seu atendimento no balcão."

---

## Solução de Problemas Comuns

**"O teste não mostrou nenhum peso, a leitura ficou em zero ou deu erro. O que fazer?"**

Siga este checklist de verificação:

1. **Verifique a Conexão Física:** O cabo da balança está firmemente conectado tanto na balança quanto na porta COM do computador? A balança está ligada na tomada e funcionando?

2. **Verifique a Porta COM:** Esta é a causa mais comum de falha. Você pode ter selecionado a porta errada. Volte à Parte 1, selecione outra `Porta` disponível na lista (ex: tente COM1, depois COM2...), **salve** e **teste** novamente. Repita até encontrar a porta correta.

3. **Verifique os Drivers:** O driver da sua balança está corretamente instalado no Windows? Verifique no "Gerenciador de Dispositivos" do Windows se a balança é reconhecida pelo sistema operacional, geralmente em "Portas (COM e LPT)".

4. **Contate o Suporte:** Se os passos acima não resolverem, pode haver uma incompatibilidade ou um problema mais complexo. Contate o suporte técnico do Portal Postal para obter assistência.

---

