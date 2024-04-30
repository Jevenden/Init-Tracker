import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div>
      <Card onChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
