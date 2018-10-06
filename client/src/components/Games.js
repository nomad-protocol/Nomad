import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Games extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="games content">
          Games
        </div>
      </div>
    );
  }
}

export default Games;
