import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [infoOnHover, setInfoOnHover] = useState(false);


  useEffect(() => {
    return () => {
    }
  })

  return (
    <div className="App">
      <div className="App-header">
        <h1>Adam Murray</h1>
        <div className="links">
          <h4><a href="http://www.google.com">Interactive</a></h4>
          <h4>Contact</h4>
          <h4>Portfolio</h4>
          <h4>Niamh</h4>
        </div>
      </div>
      <div className="header-border"></div>
      <div className="body">
        <div>
          <p onMouseEnter={() => setInfoOnHover(true)} onMouseLeave={() => setInfoOnHover(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p onMouseEnter={() => setInfoOnHover(true)} onMouseLeave={() => setInfoOnHover(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p onMouseEnter={() => setInfoOnHover(true)} onMouseLeave={() => setInfoOnHover(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {infoOnHover}
        </div>
      </div>
    </div>
  );
}

export default App;
