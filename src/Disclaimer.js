import React, { Component } from 'react';
import poop from '../img/emoji-poop.png';
import crab from '../img/emoji-crab.png';
import './css/Disclaimer.css';

class Disclaimer extends Component {
  render() {
    return (
        <div className="disclaimer">
          <h1>“This website contains shit language, shit emojis, and shit references from the outset and throughout.”</h1>
          <div className="disclaimer-link ">
            <img src={poop} className="disclaimer-link" alt="Emoji Poop" />
            <a href=""><h2>I don&#39;t give a shit.</h2></a>
          </div>
          <div className="disclaimer-link ">
            <img src={crab} className="disclaimer-link" alt="Emoji crab" />
            <a href=""><h2>Shit-free version (contains crab).</h2></a>
          </div>
      </div>
    );
  }
}

export default Disclaimer;
