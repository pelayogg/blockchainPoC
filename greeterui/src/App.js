import Web3 from 'web3';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {greeterContract} from './EthereumSetup';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      account: ''
    }
  }

  componentWillMount() {
      this.loadBlockchainData()
    }

  async loadBlockchainData() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })
    }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Your account: {this.state.account}</p>
      </header>
    </div>
  );
}
}

export default App;
