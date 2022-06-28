import React from 'react';
import './App.css';

function App() {
let cssStyle = {
  'color' :'blue'
}
  return (
    <React.Fragment>
     <h1 style={{color : 'red'}}>Use Inline CSS</h1>
     <h2 style={cssStyle}>Internal CSS Style</h2>
     <h2 className='colors'>External CSS Style it will read stryle from app.css file</h2>
     <h2 className='text-warning'>Style from Bootstraps</h2>
     <i className='fa fa-home'>Home</i>
    </React.Fragment>
  );
}

export default App;
