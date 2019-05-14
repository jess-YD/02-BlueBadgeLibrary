import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

class App extends Component {
  state= {
    sessionToken: undefined   //confirmation of login credentials
  }

  removeSessionToken = () => {
    this.setState({sessionToken: undefined})
  }

  storeSessionToken = (token) => {        //token is a parameter
  this.setState({sessionToken: token})
}

  viewConductor(){
    return (this.state.sessionToken !== undefined) ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }
  
  render() {
    return (
      <div className="App">
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}      
      </div>
    );
  }
}

export default App;

