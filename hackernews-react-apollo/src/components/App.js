import './../styles/App.css';
import React, { Component } from 'react';
import CreateLink from './CreateLink';
import LinkList from './LinkList.js';

class App extends Component {
  render() {
    return <LinkList />;
  }
}

export default App;
