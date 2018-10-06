import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Trading extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="trading content">
          <div className="heading">
            <h1> 
              Trade your Items
            </h1> 
            <p>
              Using 0x protocol 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Trading;
