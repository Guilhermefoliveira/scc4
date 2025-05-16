import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useAuth } from '@site/src/contexts/AuthContext';
import Layout from '@theme/Layout';

function SignupPage() {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('As senhas não coincidem');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      history.push('/'); // Redireciona para a home após o registro
    } catch (err) {
      setError('Falha ao criar conta: ' + err.message);
    }
    setLoading(false);
  }

  return (
    <Layout title="Registro" description="Página de Registro">
      <div style={{maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <h2>Registrar</h2>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom: '10px'}}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}/>
          </div>
          <div style={{marginBottom: '10px'}}>
            <label>Senha:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}/>
          </div>
          <div style={{marginBottom: '10px'}}>
            <label>Confirmar Senha:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}/>
          </div>
          <button type="submit" disabled={loading} style={{padding: '10px 15px', cursor: 'pointer'}}>
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </form>
        <div style={{marginTop: '20px'}}>
          Já tem uma conta? <Link to="/login">Login</Link>
        </div>
      </div>
    </Layout>
  );
}

export default SignupPage; 