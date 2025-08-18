import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import { useAuth } from '@site/src/contexts/AuthContext';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './login.module.css';

/**
 * Componente de página de login que gerencia a autenticação com Google
 * @returns {JSX.Element} O componente da página de login
 */
function LoginPage() {
  const { signInWithGoogle, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.getAttribute('data-theme') === 'dark');
  const history = useHistory();
  const { siteConfig } = useDocusaurusContext();

  /**
   * Efeito para redirecionar o usuário para a página inicial se já estiver autenticado
   */
  useEffect(() => {
    if (currentUser) {
      console.log('Usuário autenticado, redirecionando...');
      history.replace('/');
    }
  }, [currentUser, history]);

  /**
   * Efeito para observar mudanças no tema
   */
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  /**
   * Gerencia o processo de autenticação com Google
   * @returns {Promise<void>}
   * @throws {Error} Se a autenticação com Google falhar
   */
  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      console.log('Iniciando processo de autenticação...');
      
      const result = await signInWithGoogle();
      console.log('Autenticação concluída com sucesso:', result.user?.email);
      
    } catch (err) {
      console.error('Erro durante autenticação:', err);
      setError('Falha ao fazer login com Google: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  // Mostra tela de carregamento se já estiver autenticado
  if (currentUser) {
    return (
      <Layout title="Login" description="Acesse a Documentação SCC4">
        <div className={styles.loadingContainer}>
          <div className={styles.loadingMessage}>
            Redirecionando...
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Login" description="Acesse a Documentação SCC4">
      <div className={styles.container}>
        <img 
          src={isDarkMode ? '/img/LogoBranco.svg' : '/img/LogoPreto.svg'} 
          alt="Logo SCC4" 
          className={styles.logo} 
        />
        
        <h2 className={styles.title}>Bem-vindo à Documentação SCC4</h2>
        <p className={styles.subtitle}>Para continuar, por favor, faça login com sua conta Google.</p>
        
        {error && <p className={styles.error}>{error}</p>}
        
        <button 
          onClick={handleGoogleSignIn} 
          disabled={loading} 
          className={styles.loginButton}
          aria-label="Entrar com Google"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.googleIcon} aria-hidden="true">
            <defs>
              <clipPath id="circleClip">
                <circle cx="9" cy="9" r="9"/>
              </clipPath>
            </defs>
            <rect width="18" height="18" rx="9" ry="9" fill="white"/>
            <g clipPath="url(#circleClip)">
              <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.614z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.585-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC04"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </g>
          </svg>
          {loading ? 'Entrando...' : 'Entrar com Google'}
        </button>
        
        {/* <div style={{marginTop: '20px'}}>
          Não tem uma conta? <Link to="/signup">Registre-se</Link>
        </div> */}
      </div>
    </Layout>
  );
}

export default LoginPage; 