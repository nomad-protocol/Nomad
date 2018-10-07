import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {web3} from './contract/web3util.js';
import {Link} from 'react-router-dom';
import { bytecode, abi } from './contract/NomadAsset.json';

const nomadAssetAddress = "0x519fdbb1f88cdd992f1624e255cbd7547235bea0";
const contract = new web3.eth.Contract(abi);
contract.options.address = nomadAssetAddress;

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.loadBalance()
  }
  loadBalance() {
    if (web3) {
      web3.eth.getAccounts().then((accounts) => {
        let account = accounts[0];
        if (account) {
          contract.methods.balanceOf(account).call({ from: account }).then((balance) => {
            if(balance > 0) {
              this.setState({ items: [{
                name: 'NOMAD Sword',
                world: 'BrowserQuest',
                description: 'It kills everything, 9000!!!!'
              }] })
            }
          })
        }
      });
    }
  }
  render() {
    const { items } = this.state;
    return (
      <div className="app">
        <Sidebar />
        <div className="inventory content">
          <div className="heading">
            <h1> 
              Check out your Items
            </h1> 
            <p>
              And see what world they are in!
            </p>
          </div>
          { 
            items.map(({name, world, description}) => {
              return (
                <div className="item">
                  <div className="name"> {name} </div>
                  <div className="world"> Currently in world <Link to="/worlds">{world}</Link> </div>
                  <div className="description"> {description} </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Inventory;
