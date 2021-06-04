import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyARPC47LMAWw4LM21q9S-HF87wBcFgxNf8",
  authDomain: "todo-app-b6205.firebaseapp.com",
  projectId: "todo-app-b6205",
  storageBucket: "todo-app-b6205.appspot.com",
  messagingSenderId: "62789285336",
  appId: "1:62789285336:web:ff9bb5fb877c560b07aead",
  measurementId: "G-7HDCKKVLYY",
});

const db = firebaseApp.firestore();

export default db;
