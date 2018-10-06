import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Ballot extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="ballot content">
          <div className="heading">
            <h1> 
              Weekly Ballot 
            </h1> 
            <p>
              October 1st - October 7th
            </p>
          </div>
          <div className="votes"> 
            <div className="vote">
              <p>
                Allow BrowserQuest to spawn 10 red swords?
              </p>
              <div className="choice yes">
                <div className="text">100%</div>
                <div className="bar"></div>
              </div>
              <div className="choice no">
                <div className="text">0%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ballot;
