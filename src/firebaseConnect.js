import * as firebase from 'firebase/app';
import * as admin from 'firebase-admin';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6PfDkC86RNh30Qwg4XtwH0ZRyBt-Lqc0",
    authDomain: "note-manager-by-react-fedu.firebaseapp.com",
    databaseURL: "https://note-manager-by-react-fedu.firebaseio.com",
    projectId: "note-manager-by-react-fedu",
    storageBucket: "note-manager-by-react-fedu.appspot.com",
    messagingSenderId: "442616357204",
    appId: "1:442616357204:web:22b4e671875afb535128c1",
    measurementId: "G-VYZWLXCF7B"
  };

// Initialize Firebase
// firebase.analytics();

var data = firebase.database().ref('dataForNote');
    data.once('value').then((snapshot)=>{
      console.log(snapshot.val());
    });

export const firebaseConnect = firebase.initializeApp(firebaseConfig);