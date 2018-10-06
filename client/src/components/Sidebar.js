import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import SVG from './SVG';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="tabs">
          <NavLink className="home" exact to='/'>
            <SVG name="home"/>
            <div className="text">Dashboard</div>
          </NavLink>
          <NavLink className="inventory" to='/inventory'>
            <SVG name="inventory"/>
            <div className="text">Inventory</div>
          </NavLink>
          <NavLink className="trading" to='/trading'>
            <SVG name="briefcase"/>
            <div className="text">Trading</div>
          </NavLink>
          <NavLink className="worlds" to='/worlds'>
            <SVG name="world"/>
            <div className="text">Worlds</div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
