import React from 'react';
import './css/globals.css';
import Header from './components/header';
import Title from './components/title';
import Inputs from './components/formulario-inputs';
import AppRouter from './routers/AppRouter';



function App() {
  return (<> 
  <Header />
  <Title />
  <Inputs />
  <AppRouter />
   
    </>); 
}

export default App;
