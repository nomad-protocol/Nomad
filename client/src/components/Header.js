import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
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
      </div>
    );
  }
}

export default withRouter(Header);
