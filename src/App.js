import React, { Component } from 'react';
// import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Who from './Who/Who';
import What from './What/What';
import Header from './Header/Header';
import Work from './Work/Work';
import Contact from './Contact/Contact';



class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     isTop: true
   };
   this.onScroll = this.onScroll.bind(this);
 }

//Teaching computer how to detect scroll
 componentDidMount() {
   document.addEventListener('scroll', () => {
     const isTop = window.scrollY < 100;
     if (isTop !== this.state.isTop) {
       this.onScroll(isTop);
     }
   });
 }

//Passing isTop logic into the onScroll function so it knows what isTop means
 onScroll(isTop) {
   this.setState({ isTop });

//Because onScroll is powered by isTop, which is only listening for a scroll,
//tell the comp to add a class at the same time since we need the class to change on scroll.
   const wrapper = document.getElementById('wrapper');
   wrapper.classList.toggle('is-nav-scroll');
 }

 //Click to copyToClipboard
 copyToClipboard(e) {
   document.getElementById('copyemail').select();
   document.execCommand('copy');
   document.getElementById('copysuccess').style='display: block';
   setTimeout(function(){document.getElementById('copysuccess').style=''}, 5000);
 }

  render() {
    return (
      <div>
        <Header
          onScroll={() => this.onScroll()}
        />
        <Home />
        <Who />
        <What />
        <Work />
        <Contact
          onClick={(e) => this.copyToClipboard(e)}
        />
      </div>
    );
  }
}

export default App;
