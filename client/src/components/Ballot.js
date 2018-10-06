import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Ballot extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="ballot">
          Ballot
        </div>
      </div>
    );
  }
}

export default Ballot;
