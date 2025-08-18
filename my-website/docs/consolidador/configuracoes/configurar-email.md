---
sidebar_position: 7
---

# Configurar E-mail

Este guia detalha como configurar uma conta de e-mail no **Consolidador**. Esta configuração é essencial para permitir que o sistema envie e-mails automaticamente em nome da sua agência, como o envio de **faturas geradas para seus clientes de contrato**.

**Como Acessar:** No menu superior do Consolidador, acesse `Configurações` e clique em `Configurar E-mail`.

---

## Parte 1: Preparando sua Conta de E-mail (Tutorial para G-mail)

Para que o Consolidador possa enviar e-mails de forma segura, você **não deve usar a sua senha principal** do G-mail. Em vez disso, é necessário habilitar a "Verificação em duas etapas" e gerar uma **"Senha de App"** exclusiva para o Portal Postal.

   [![Video Tutorial Exemplo](/img/conf_email/conf-gmail.png)](https://drive.google.com/file/d/1fGLapxTLAd-E-uwf_D0oGfyVgfvQeY4c/view?usp=sharing)

### A. Ativando a Verificação em Duas Etapas

1.  Acesse sua conta do Google e vá em **Gerenciar sua Conta do Google**.
2.  No menu esquerdo, clique em **Segurança**.
3.  Na seção "Como fazer login no Google", encontre e clique em **Verificação em duas etapas**.
4.  Clique em **Começar** e faça o login novamente com sua senha principal para confirmar sua identidade.
5.  Siga os passos para vincular seu número de telefone, receber um código de verificação por SMS e, ao final, clique em **Ativar**.

> **💡 Conhecimento Operacional (Para a Agência):** A verificação em duas etapas é um pré-requisito obrigatório do Google para gerar Senhas de App. Sem ela, a etapa seguinte não funcionará.

### B. Gerando a Senha de App para o Portal Postal

1.  Com a verificação em duas etapas ativa, volte à tela de **Segurança**.
2.  Role a página até a seção "Como fazer login no Google" novamente. Uma nova opção terá aparecido: **Senhas de app**. Clique nela.
3.  Faça o login novamente para confirmar sua identidade.
4.  Na tela "Senhas de app", clique no menu dropdown "Selecionar app" e escolha **Outro (nome personalizado)**.
5.  No campo que aparecer, digite um nome para identificar a senha, como **Portal Postal** ou **Consolidador**, e clique em **GERAR**.
6.  O Google exibirá uma senha de **16 caracteres dentro de uma caixa amarela**.

> **ATENÇÃO:** **Copie e salve esta senha de 16 caracteres imediatamente.** É esta senha, e **não** a sua senha normal do G-mail, que você usará no Consolidador.

---

## Parte 2: Configurando o E-mail no Consolidador

Agora que você tem a Senha de App, volte para a tela de **Configurações de E-mail** no Consolidador e preencha os campos conforme a imagem.

> [![Tela de Configurações de impressoras](/img/conf_email/conf-email.png)](/img/conf_email/conf-email.png)
> *Tela de configurações de e-mail.*

### Descrição dos Campos

#### Dados de Autenticação do E-mail

* **Host SMTP:** O endereço do servidor de envio de e-mails do seu provedor (Ex: `smtp.gmail.com`).
* **Porta:** A porta de comunicação principal com o servidor SMTP (Ex: `587`).
* **E-mail:** O seu endereço de e-mail completo que será o remetente (Ex: `sua.agencia@gmail.com`).
* **Senha:** **Cole aqui a Senha de App de 16 caracteres** que você gerou na Parte 1. **NÃO use a sua senha de login principal do e-mail.**
* **Solicitar confirmação de leitura:** Se marcada, os e-mails enviados pelo sistema pedirão uma notificação de que o destinatário leu a mensagem.
* **Com Autenticação / Sem Autenticação:** Define se o servidor exige validação de usuário e senha. Praticamente todos os provedores modernos exigem autenticação, então a opção correta é **Com Autenticação**.

#### Protocolos de Segurança do E-mail

* **Não Usa StartTLS / Usa StartTLS:** Define o uso do protocolo de segurança TLS. A maioria dos servidores modernos usa esta opção.
* **Não Usa SSL / Usa SSL:** Define o uso do protocolo de segurança SSL. Geralmente, você usará ou SSL ou StartTLS, não ambos.
* **Porta SSL:** Caso o protocolo SSL seja utilizado em uma porta específica (como `465`), ela pode ser informada aqui.

### Exemplo de Configuração para G-mail

| Campo | Valor |
|---|---|
| **Host SMTP** | `smtp.gmail.com` |
| **Porta** | `587` |
| **E-mail** | Seu e-mail completo do G-mail |
| **Senha** | A Senha de App de 16 caracteres |
| **Com Autenticação** | Marcado |
| **Usa StartTLS** | Marcado |
| **Usa SSL** | Desmarcado (Não Usa SSL) |

### Finalizando a Configuração

1.  Após preencher todos os campos, clique em **SALVAR**.
2.  Para garantir que tudo funcionou, clique em **TESTAR ENVIO**.
3.  Digite um e-mail de destino (pode ser o seu próprio) e clique em OK.
4.  Uma mensagem de sucesso deve aparecer, e você deve receber o e-mail de teste em sua caixa de entrada.

> **💡 Conhecimento Operacional (Para a Agência):** Se o e-mail de teste falhar, verifique os seguintes pontos:
> 1.  A **Senha** inserida é a de 16 caracteres da "Senha de App"? (Este é o erro mais comum).
> 2.  As configurações de **Host SMTP, Porta, SSL e StartTLS** estão corretas para o seu provedor de e-mail?
> 3.  O firewall ou antivírus da sua rede não está bloqueando a porta de comunicação SMTP? (Menos comum, mas possível).