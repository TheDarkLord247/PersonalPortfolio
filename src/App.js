import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandler = () => {
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  
  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler}/>
    }
    return (
      <div className="App">
        <Navbar drawerHandler = {this.drawerToggleHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main>
        </main>
      </div>
    );
  };
}

export default App;
