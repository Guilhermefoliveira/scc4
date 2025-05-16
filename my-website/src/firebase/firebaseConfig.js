// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // REMOVE THIS LINE or commented out
import { getAuth } from "firebase/auth";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 * Objeto de configuração do Firebase contendo todas as credenciais e configurações necessárias
 * @type {Object}
 * @property {string} apiKey - Chave de API do Firebase
 * @property {string} authDomain - Domínio de autenticação do Firebase
 * @property {string} projectId - ID do projeto Firebase
 * @property {string} storageBucket - Bucket de armazenamento do Firebase
 * @property {string} messagingSenderId - ID do remetente de mensagens do Firebase
 * @property {string} appId - ID da aplicação Firebase
 * @property {string} measurementId - ID de medição do Firebase
 */
const firebaseConfig = {
  apiKey: process.env.DOCUSAURUS_FIREBASE_API_KEY,
  authDomain: process.env.DOCUSAURUS_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.DOCUSAURUS_FIREBASE_DATABASE_URL,
  projectId: process.env.DOCUSAURUS_FIREBASE_PROJECT_ID,
  storageBucket: process.env.DOCUSAURUS_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.DOCUSAURUS_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.DOCUSAURUS_FIREBASE_APP_ID,
  measurementId: process.env.DOCUSAURUS_FIREBASE_MEASUREMENT_ID
};

/**
 * Inicializa a aplicação Firebase com a configuração fornecida
 * @type {import('firebase/app').FirebaseApp}
 */
const app = initializeApp(firebaseConfig);

/**
 * Instância de autenticação do Firebase
 * @type {import('firebase/auth').Auth}
 */
export const auth = getAuth(app);

let analyticsInstance; 

if (ExecutionEnvironment.canUseDOM) {
  import('firebase/analytics').then(firebaseAnalyticsModule => {
    firebaseAnalyticsModule.isSupported().then(suportado => {
      if (suportado) {
        try {
          if (typeof window !== 'undefined' && firebaseAnalyticsModule.isSupported()) {
            firebaseAnalyticsModule.getAnalytics(app);
          }
        } catch (erro) {
          console.error("Erro ao inicializar Firebase Analytics:", erro);
        }
      }
    }).catch(erro => {
      console.error("Erro ao importar Firebase Analytics:", erro);
    });
  }).catch(erro => {
    console.error("Erro ao importar Firebase Analytics:", erro);
  });
}
