import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';

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
              <p className="question">
                Allow <Link to="/worlds">BrowserQuest</Link> to spawn 10 red swords?
              </p>
              <div className="choice yes">
                <div className="text">Yes Votes</div>
                <div className="bar"></div>
                <div>50</div>
              </div>
              <div className="choice no">
                <div className="text">No Votes</div>
                <div className="bar"></div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ballot;
