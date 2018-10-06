import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import SVG from './SVG';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="tabs">
          <NavLink exact to='/'>
            <SVG name="home"/>
            Dashboard
          </NavLink>
          <NavLink to='/inventory'>
            <SVG name="inventory"/>
            Inventory
          </NavLink>
          <NavLink to='/trading'>
            <SVG name="briefcase"/>
            Trading
          </NavLink>
          <NavLink to='/worlds'>
            <SVG name="world"/>
            Worlds
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
