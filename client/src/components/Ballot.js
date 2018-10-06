import React, { Component } from 'react';
import Header from './Header';

class Ballot extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="ballot">
          Ballot
        </div>
      </div>
    );
  }
}

export default Ballot;
