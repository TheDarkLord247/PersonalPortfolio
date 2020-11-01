import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import bg from './img/bg2.png';
import gh from './img/gh.png';


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
          <a id="aboutmelink"> </a>
          <div className="aboutme">
            <img id="bg" src={bg} alt="Photograph of the night sky over an isolated, illuminated fort in Udaipur, India."></img>
            <div className="centered">
              <p className="intro">
                My name is Aman Oberoi and I am a sophomore studying math and computer science at UCLA. 
                My interests include algorithms, machine learning, software engineering and photography!
              </p>
            </div>
          </div>
        </main>
        <a id="links"> </a>
        <div className="black">
          <div className="card">
            <a href="https://github.com/TheDarkLord247" target="_blank" rel="noopener noreferrer">
            <img id="logo" src={gh} alt="GitHub logo containg a link to my GitHub profile"></img>
            </a>
          </div>
          
        </div>
          
      </div>
    );
  };
}

export default App;
