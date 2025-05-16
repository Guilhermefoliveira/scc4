import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './index.module.css';

function QuickAccessCard({ title, description, icon, link }) {
  return (
    <div className={styles.quickAccessCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={link} className={styles.cardLink}>Acessar →</a>
    </div>
  );
}

function WelcomeSection() {
  const { currentUser } = useAuth();
  const baseUrl = useBaseUrl('/');

  return (
    <div className={styles.welcomeSection}>
      <div className={styles.welcomeContent}>
        <h1 className={styles.welcomeTitle}>
          Bem-vindo, {currentUser?.email?.split('@')[0] || 'Usuário'}!
        </h1>
        <p className={styles.welcomeSubtitle}>
          Acesse nossa documentação completa e encontre todas as informações que você precisa.
        </p>
      </div>
      <img 
        src={`${baseUrl}img/scc4_transparente.svg`}
        alt="Logo SCC4"
        className={styles.welcomeLogo}
      />
    </div>
  );
}

function QuickAccessSection() {
  return (
    <div className={styles.quickAccessSection}>
      <h2 className={styles.sectionTitle}>Acesso Rápido</h2>
      <div className={styles.quickAccessGrid}>
        <QuickAccessCard
          title="Web Agência"
          description="Acesse o sistema Web Agência para gerenciar sua agência dos Correios."
          icon="🏢"
          link="/docs/category/portal-web-agência"
        />
        <QuickAccessCard
          title="Consolidador"
          description="Gerencie suas postagens e consolide seus envios."
          icon="📦"
          link="/docs/category/consolidador"
        />
        <QuickAccessCard
          title="Web Cliente"
          description="Acesse o portal do cliente para gerenciar suas postagens."
          icon="👥"
          link="/docs/category/portal-web-client"
        />
        <QuickAccessCard
          title="Correios"
          description="Documentação específica para serviços dos Correios."
          icon="📮"
          link="/docs/category/correios"
        />
      </div>
    </div>
  );
}

function RecentDocsSection() {
  return (
    <div className={styles.recentDocsSection}>
      <h2 className={styles.sectionTitle}>Documentação Recente</h2>
      <div className={styles.recentDocsGrid}>
        <a href="/docs/category/portal-web-agencia" className={styles.recentDocCard}>
          <h3>Web Agência</h3>
          <p>Conheça as principais funcionalidades do sistema Web Agência.</p>
        </a>
        <a href="/docs/category/consolidador" className={styles.recentDocCard}>
          <h3>Consolidador</h3>
          <p>Aprenda a usar o sistema de consolidação de postagens.</p>
        </a>
        <a href="/docs/category/portal-web-client" className={styles.recentDocCard}>
          <h3>Web Cliente</h3>
          <p>Saiba como utilizar o portal do cliente para gerenciar suas postagens.</p>
        </a>
      </div>
    </div>
  );
}

function SupportSection() {
  return (
    <div className={styles.supportSection}>
      <h2 className={styles.sectionTitle}>Precisa de Ajuda?</h2>
      <div className={styles.supportGrid}>
        <div className={styles.supportCard}>
          <h3>📚 Documentação</h3>
          <p>Acesse nossa documentação completa para encontrar todas as informações que você precisa.</p>
          <a href="/docs/category/geral" className={styles.supportLink}>Ver Documentação</a>
        </div>
        <div className={styles.supportCard}>
          <h3>❓ FAQ</h3>
          <p>Encontre respostas para as perguntas mais frequentes.</p>
          <a href="/docs/category/faq-perguntas-e-respostas" className={styles.supportLink}>Ver FAQ</a>
        </div>
        <div className={styles.supportCard}>
          <h3>📞 Suporte</h3>
          <p>Entre em contato com nossa equipe de suporte pelo chat na Web da Agência.</p>
          <a href="https://portalpostal.com.br/index.jsp" className={styles.supportLink}>Contato</a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description="Tecnologia para Logística"
    >
      <main className={styles.main}>
        <WelcomeSection />
        <QuickAccessSection />
        <RecentDocsSection />
        <SupportSection />
      </main>
    </Layout>
  );
}
