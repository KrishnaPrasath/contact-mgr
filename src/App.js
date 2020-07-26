import React from 'react';
import  NavBar  from './components/navbar/NavBar';
import  Container  from './components/Container/Container';
import SideBar from './components/SideBar/SideBar';
import './app.css';

function App() {
  return (
    <div id="app">
    
      <NavBar/>
      <SideBar/>  
      <Container/>
    </div>
  );
}

export default App;
