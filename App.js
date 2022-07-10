import logo from './logo.svg';
import './App.css';

function App() {
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
      </header>
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import AppSearch from './component/AppSearch/AppSearch';
import Navbar from './component/Navbar/Navbar';
import WebImage from './component/WebImage/WebImage';

function App() {
  const [urlValue , setUrlValue ] = useState('');
  return (
    <div className="App">
      <Navbar/>
      <AppSearch setUrlValue={setUrlValue}/>
      <WebImage urlValue = {urlValue}/>
    </div>
  );
}

export default App;
 
