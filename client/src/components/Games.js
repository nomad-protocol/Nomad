import React, { Component } from 'react';
import Header from './Header';

class Games extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="games">
          Games
        </div>
      </div>
    );
  }
}

export default Games;
