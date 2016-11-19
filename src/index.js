import React from 'react';
import ReactDOM from 'react-dom';
import Disclaimer from './Disclaimer';
import Poop from './Poop';
import './css/index.css';

/* Render the disclaimer first...*/
ReactDOM.render(
  <Disclaimer />,
  document.getElementById('Disclaimer')
);

/* Onclick render Poop...*/

ReactDOM.render(
  <Poop />,
  document.getElementById('Poop')
);
