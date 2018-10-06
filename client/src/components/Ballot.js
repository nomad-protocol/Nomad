import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Ballot extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="ballot content">
          <h1> Weekly Ballot </h1>
        </div>
      </div>
    );
  }
}

export default Ballot;
