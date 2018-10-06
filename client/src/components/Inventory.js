import React, { Component } from 'react';
import Header from './Header';

class Inventory extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="inventory">
          Inventory
        </div>
      </div>
    );
  }
}

export default Inventory;
