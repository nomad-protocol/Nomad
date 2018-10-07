import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {wrap, getWethBalance} from './contract/tradeUtils';
import {web3} from './contract/web3util';

class Trading extends Component {
  constructor(props) {
    super(props);
    this.wrap = this.wrap.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      weth: 0,
      balance: 0,
    }
    this.getBalance();
  }

  handleChange(prop) {
    return ({target}) => this.setState({[prop]: target.value});
  }
  
  getBalance() {
    if (web3) {
      web3.eth.getAccounts().then((accounts) => {
        let account = accounts[0];
        if (account) {
          getWethBalance(account).then((balance) => {
            this.setState({ balance: web3.utils.fromWei(balance.toString()) })
          });
        }
      });
    }
  }

  wrap() {
    const { weth } = this.state;
    if (web3) {
      web3.eth.getAccounts().then((accounts) => {
        let account = accounts[0];
        if (account) {
          wrap(account, weth);
        }
      });
    }
  }
  
  render() {
    const { balance } = this.state;
    return (
      <div className="app">
        <Sidebar />
        <div className="trading content">
          <div className="heading">
            <h1> 
              Trade your Items
            </h1> 
            <p>
              Using 0x protocol 
            </p>
          </div>
          <div className="wrapping">
            <h2>Wrap some ETH</h2>
            <input onChange={this.handleChange('weth')}/> 
            <div className="btn btn-primary" onClick={this.wrap}> Wrap it! </div>
            <p>
              Current WETH balance: { balance }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Trading;
