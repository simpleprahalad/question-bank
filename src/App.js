import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/Posts'
import PostForm from './components/PostForm'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <PostForm />
          <hr />
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
