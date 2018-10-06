import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Inventory extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="inventory content">
          <div className="heading">
            <h1> 
              Check out your Items
            </h1> 
            <p>
              And see what world they are in!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
