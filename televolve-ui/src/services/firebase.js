import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyAQluLLC3MgVyWHqWfLutPWGLl7N-B1rLg',
  authDomain: 'vue-fire-auth-730db.firebaseapp.com',
  projectId: 'vue-fire-auth-730db',
  storageBucket: 'vue-fire-auth-730db.appspot.com',
  messagingSenderId: '795709458956',
  appId: '1:795709458956:web:79df97701d106badb47c29'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
