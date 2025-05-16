import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '@site/src/contexts/AuthContext';
import { useHistory, useLocation } from '@docusaurus/router';
import UserMenu from './UserMenu';

function AppContent({children}) {
  const { currentUser, loading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!currentUser && location.pathname !== '/login' && location.pathname !== '/signup') {
      if (typeof window !== 'undefined') {
        history.replace('/login');
      }
    }

    if (currentUser && (location.pathname === '/login' || location.pathname === '/signup')) {
      if (typeof window !== 'undefined') {
        history.replace('/');
      }
    }
  }, [currentUser, loading, location.pathname, history]);

  if (loading) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Carregando autenticação...</div>;
  }

  if (!currentUser && location.pathname !== '/login' && location.pathname !== '/signup') {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Redirecionando para login...</div>;
  }

  if (currentUser && (location.pathname === '/login' || location.pathname === '/signup')) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Redirecionando...</div>;
  }

  return (
    <>
      {currentUser && <UserMenu />}
      {children}
    </>
  );
}

function Root({children}) {
  return (
    <AuthProvider>
      <AppContent>{children}</AppContent>
    </AuthProvider>
  );
}

export default Root; 