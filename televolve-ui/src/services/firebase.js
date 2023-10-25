import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import settings from '../config/firebase-config';

// Configuração do Firebase.
const firebaseConfig = {
  apiKey: settings.apiKey,
  authDomain: settings.authDomain,
  projectId: settings.projectId,
  storageBucket: settings.storageBucket,
  messagingSenderId: settings.messagingSenderId,
  appId: settings.appId
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
