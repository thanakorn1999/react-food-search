import './styles/App.css';
import Header from './components/Header'
import MainContain from './components/MainContain'
import React, { useState, useEffect } from 'react';

import Data from "./Data/example_data.json"



function App() {

  const [datas,setData] = React.useState(Data)

  return (
    <div className="App">
      <Header/>
      <MainContain datas={datas}/>
    </div>
  );
}

export default App;
