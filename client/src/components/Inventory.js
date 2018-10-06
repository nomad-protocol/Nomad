import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Inventory extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="inventory content">
          Inventory
        </div>
      </div>
    );
  }
}

export default Inventory;
