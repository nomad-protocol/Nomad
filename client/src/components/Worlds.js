import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Worlds extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="worlds content">
          <div className="heading">
            <h1> 
              NOMAD worlds 
            </h1> 
            <p>
              Worlds that have been voted onto the NOMAD protocol
            </p>
          </div>
          <div className="world">
            <div className="header">
              <div className="logo">
                <img src="/bq.png" />
              </div>
              <div className="title">
                BrowserQuest  
              </div>
            </div>
            <div className="description"> 
              An open-source MMORPG created by Mozilla
            </div>
            <div className="btn btn-primary">
              Play Game
            </div>
          </div>
          <div className="world">
            <div className="header">
              <div className="logo">
                <img src="/monster.png" />
              </div>
              <div className="title">
                Rapture  
              </div>
            </div>
            <div className="description"> 
              A top-down shooter with a big boss worm!
            </div>
            <div className="btn btn-primary">
              Play Game
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Worlds;
