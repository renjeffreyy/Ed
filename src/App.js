import React from 'react';

//components

import About from './components/About.component';
import Landing from './components/Landing.component';
import AskEd from './components/AskEd.component';

import './App.css';

function App() {
  return (
    <div>
      <Landing />
      <AskEd />
      <About />
    </div>
  );
}

export default App;
