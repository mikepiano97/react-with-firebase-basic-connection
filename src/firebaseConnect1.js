import * as firebase from 'firebase';
// Set the configuration for your app
// TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyA6PfDkC86RNh30Qwg4XtwH0ZRyBt-Lqc0",
    authDomain: "note-manager-by-react-fedu.firebaseapp.com",
    databaseURL: "https://note-manager-by-react-fedu.firebaseio.com",
    storageBucket: "note-manager-by-react-fedu.appspot.com"
  };
  export const firebaseConnect1 = firebase.initializeApp(config);

  // Get a reference to the database service
  var data = firebase.database().ref('dataForNote/note3');
  // lay du lieu    
  // data.once('value').then((datasnapshot)=>{
  //         console.log(datasnapshot.val());
  //     });

  // sua du lieu
  data.set({
    id: 3,
    title: 'Đây là tiêu đề số 3',
    content: 'Hôm nay là thứ 7, mình lại ngồi cafe chơi bời, ngồi lập trình vui vui thôi. hihi.'
  });
  