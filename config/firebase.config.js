// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtrvakDy_X9Szi5rvu9D76FuStR1x1qlo",
  authDomain: "airbnb-clone-397319.firebaseapp.com",
  projectId: "airbnb-clone-397319",
  storageBucket: "airbnb-clone-397319.appspot.com",
  messagingSenderId: "130001966602",
  appId: "1:130001966602:web:842232692a315a1e13b1f3",
  measurementId: "G-3L6DNSEFQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
//const analytics = getAnalytics(app);
