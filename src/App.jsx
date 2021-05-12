import React, { useState } from 'react';
import './App.css';
import Boxes from './components/Boxes';
import Block from './components/Block';

function App() {
  const [allBoxes, setAllBoxes] = useState([])
  console.log(allBoxes);
  return (
    <div className="App">
      
      <Boxes addBox={setAllBoxes} allBoxes={allBoxes}/>
      <div className="d-flex m-3">
          {allBoxes.map((block, i) => <Block key={i} {...block}/>)}
      </div>
      
    </div>
  );
}

export default App;
