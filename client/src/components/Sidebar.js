import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="tabs">
          <li>
            <NavLink to='/'>
              Weekly Ballot
            </NavLink>
          </li>
          <li>
            <NavLink to='/inventory'>
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to='/trading'>
              Trading
            </NavLink>
          </li>
          <li>
            <NavLink to='/games'>
              Games
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
