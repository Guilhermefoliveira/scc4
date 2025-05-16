import React, { useContext, useState, useEffect, createContext } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '@site/src/firebase/firebaseConfig'; // Certifique-se que o caminho está correto

/**
 * Contexto para gerenciamento de autenticação
 * @typedef {Object} AuthContextType
 * @property {Object|null} currentUser - Objeto do usuário autenticado
 * @property {Function} signup - Função para criar nova conta
 * @property {Function} login - Função para autenticar usuário existente
 * @property {Function} logout - Função para desconectar usuário atual
 * @property {Function} signInWithGoogle - Função para autenticar com Google
 */

const AuthContext = createContext();

/**
 * Hook personalizado para acessar o contexto de autenticação
 * @returns {AuthContextType} O contexto de autenticação
 * @throws {Error} Se usado fora de um AuthProvider
 */
export function useAuth() {
  return useContext(AuthContext);
}

/**
 * Componente provedor que envolve a aplicação e disponibiliza o objeto de autenticação
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Componentes filhos a serem envolvidos
 * @returns {JSX.Element} O componente provedor
 */
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Cria uma nova conta de usuário com email e senha
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   * @returns {Promise<Object>} Objeto com credenciais do usuário
   * @throws {Error} Se o email for inválido ou a senha muito fraca
   */
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  /**
   * Autentica um usuário existente com email e senha
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   * @returns {Promise<Object>} Objeto com credenciais do usuário
   * @throws {Error} Se o email ou senha estiverem incorretos
   */
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  /**
   * Desconecta o usuário atual
   * @returns {Promise<void>}
   * @throws {Error} Se houver erro durante a desconexão
   */
  function logout() {
    return signOut(auth);
  }

  /**
   * Autentica um usuário usando sua conta Google
   * @returns {Promise<Object>} Objeto com credenciais do usuário
   * @throws {Error} Se o processo de autenticação com Google falhar
   */
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      console.error('Erro durante autenticação com Google:', error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 