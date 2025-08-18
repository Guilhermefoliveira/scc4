import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './index.module.css';

function QuickAccessCard({ title, description, icon, link }) {
  return (
    <Link to={link} className={styles.quickAccessCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardLink}>Acessar →</span>
    </Link>
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
  const quickAccessItems = [
    {
      title: "Web Agência",
      description: "Acesse o sistema Web Agência para gerenciar sua agência dos Correios.",
      icon: "🏢",
      link: "/docs/category/portal-web-agência",
    },
    {
      title: "Consolidador",
      description: "Gerencie suas postagens e consolide seus envios.",
      icon: "📦",
      link: "/docs/category/consolidador",
    },
    {
      title: "Web Cliente",
      description: "Acesse o portal do cliente para gerenciar suas postagens.",
      icon: "👥",
      link: "/docs/category/portal-web-client",
    },
    {
      title: "Correios",
      description: "Documentação específica para serviços dos Correios.",
      icon: "📮",
      link: "/docs/category/correios",
    },
  ];

  return (
    <div className={styles.quickAccessSection}>
      <h2 className={styles.sectionTitle}>Acesso Rápido</h2>
      <div className={styles.quickAccessGrid}>
        {quickAccessItems.map((item, index) => (
          <QuickAccessCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

function RecentDocsSection() {
  const recentDocsItems = [
    {
      title: "Web Agência",
      description: "Conheça as principais funcionalidades do sistema Web Agência.",
      link: "/docs/category/portal-web-agencia",
    },
    {
      title: "Consolidador",
      description: "Aprenda a usar o sistema de consolidação de postagens.",
      link: "/docs/category/consolidador",
    },
    {
      title: "Web Cliente",
      description: "Saiba como utilizar o portal do cliente para gerenciar suas postagens.",
      link: "/docs/category/portal-web-client",
    },
  ];

  return (
    <div className={styles.recentDocsSection}>
      <h2 className={styles.sectionTitle}>Documentação Recente</h2>
      <div className={styles.recentDocsGrid}>
        {recentDocsItems.map((doc, index) => (
          <Link key={index} to={doc.link} className={styles.recentDocCard}>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SupportSection() {
  const supportItems = [
    {
      title: "📚 Documentação",
      description: "Acesse nossa documentação completa para encontrar todas as informações que você precisa.",
      linkText: "Ver Documentação",
      linkUrl: "/docs/category/geral",
      isExternal: false,
    },
    {
      title: "❓ FAQ",
      description: "Encontre respostas para as perguntas mais frequentes.",
      linkText: "Ver FAQ",
      linkUrl: "/docs/category/faq-perguntas-e-respostas",
      isExternal: false,
    },
    {
      title: "📞 Suporte",
      description: "Entre em contato com nossa equipe de suporte pelo chat na Web da Agência.",
      linkText: "Contato",
      linkUrl: "https://portalpostal.com.br/index.jsp",
      isExternal: true,
    },
  ];

  return (
    <div className={styles.supportSection}>
      <h2 className={styles.sectionTitle}>Precisa de Ajuda?</h2>
      <div className={styles.supportGrid}>
        {supportItems.map((item, index) => (
          item.isExternal ? (
            <a key={index} href={item.linkUrl} className={styles.supportCard} target="_blank" rel="noopener noreferrer">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.supportLink}>{item.linkText}</span>
            </a>
          ) : (
            <Link key={index} to={item.linkUrl} className={styles.supportCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.supportLink}>{item.linkText}</span>
            </Link>
          )
        ))}
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
