import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC57gk7jiQh3IoRb0eLi87xqoT7K_its1I",
    authDomain: "flytant-test.firebaseapp.com",
    databaseURL: "https://flytant-test.firebaseio.com",
    projectId: "flytant-test",
    storageBucket: "flytant-test.appspot.com",
    messagingSenderId: "215398844394",
    appId: "1:215398844394:web:594c4a3f83ed5540ba5493",
    measurementId: "G-32NKHJV3R5"
  };
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage= getStorage(app);