import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCW_CRKUqjVHO5TAtShgkefmkoRYn-6rZY",
  authDomain: "products-5d3e4.firebaseapp.com",
  databaseURL: "https://products-5d3e4.firebaseio.com",
  projectId: "products-5d3e4",
  storageBucket: "products-5d3e4.appspot.com",
  messagingSenderId: "861826843501",
  appId: "1:861826843501:web:4a88ca24c422f04b61d064",
});

export default app;
