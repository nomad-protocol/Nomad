import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Trading extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="trading">
          Trading
        </div>
      </div>
    );
  }
}

export default Trading;
