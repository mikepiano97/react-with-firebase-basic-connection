import React, {Component} from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase';
import './App.css';

import { firebaseConnect1 } from './firebaseConnect1';



class App extends Component {
  pushData() {
    var data = firebase.database().ref('dataForNote');
    data.push({
      title:'This is for title 4 in project',
      content: 'One little finger, 2 little finger, tap tap tap'
    });
    console.log('Da click vao nut de them data');
  }

  removeData(id){
    var data = firebase.database().ref('dataForNote');
    data.child(id).remove();
    console.log('Đã xoá thành công phần từ có id là: '+id);
  }

  render(){
    // console.log(firebaseConnect1);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={()=> this.pushData()}>Click here to push data</button>
        <button onClick={()=> this.removeData('-Lqy-aP540fmJxMF385Y')}>REMOVE DATA</button>
      </div>
    );
  }
  
}

export default App;
