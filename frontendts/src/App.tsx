import React from 'react';
import './App.css';
import Profile from "./components/profile"
function App() {
let cssStyle = {
  'color' :'blue'
}
  return (
    <React.Fragment>
     <h1> Hello world</h1>
     < Profile name="firdous alam"></Profile>
    </React.Fragment>
  );
}

export default App;
