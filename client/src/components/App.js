import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import store from '../store';
import Ballot from './Ballot';
import Worlds from './Worlds';
import Inventory from './Inventory';
import Trading from './Trading';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Ballot}/>
              <Route path="/worlds" component={Worlds}/>
              <Route path="/inventory" component={Inventory}/>
              <Route path="/trading" component={Trading}/>
            </Switch>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
