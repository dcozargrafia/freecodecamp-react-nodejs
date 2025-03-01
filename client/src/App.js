// client/src/App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [ data, setdata ] = React.useState(null);

  React.useEffect( () => {
      fetch('/api')
        .then( (res) => res.json() )
        .then( (data) => setdata(data.message) );
    },
    []
  );

  return (
    <div className='App'>
      <header className='App-header'> 
        <img src={logo} className='App-logo' alt='logo'  />
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  );
}

export default App;