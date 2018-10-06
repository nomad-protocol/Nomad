import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';

const votes = [
  { 
    game: 'BrowserQuest',
    items: '10 NOMAD Swords',
    yes: 50,
    no: 0,
  },
  {
    game: 'Rapture',
    items: '50 Rubber Duckies',
    yes: 20,
    no: 33,
  }
]

function percentOf(a,b) {
  const total = a + b;
  return (a / total) * 100;
}

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
            {
              votes.map(({game, items, yes, no}) => {
                return (
                  <div className="vote">
                    <p className="question">
                      Allow <Link to="/worlds">{ game }</Link> to spawn { items }?
                    </p>
                    <div className="choice yes">
                      <div className="type">Yes Votes</div>
                      <div className="pct">
                        <div className="bar" style={{ width: `${percentOf(yes, no)}%` }}></div>
                      </div>
                      <div className="amount">{ yes }</div>
                    </div>
                    <div className="choice no">
                      <div className="type">No Votes</div>
                      <div className="pct">
                        <div className="bar" style={{ width: `${percentOf(no, yes)}%` }}></div>
                      </div>
                      <div className="amount">{ no }</div>
                    </div>
                    <div className="actions">
                      <div className="btn-primary btn">
                        Vote Yes
                      </div>
                      <div className="btn-danger btn">
                        Vote No
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Ballot;
