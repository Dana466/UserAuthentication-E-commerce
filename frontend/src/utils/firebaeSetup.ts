
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQNg3ZdyZPQ4zDK5mdT7BqLb1mEh90vE",
  authDomain: "e-comm-auth-bb9ca.firebaseapp.com",
  projectId: "e-comm-auth-bb9ca",
  storageBucket: "e-comm-auth-bb9ca.appspot.com",
  messagingSenderId: "352813822271",
  appId: "1:352813822271:web:7b12296d07e9dbef27238a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);