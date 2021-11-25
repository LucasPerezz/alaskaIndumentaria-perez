import React, { Component, Fragment } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//COMPONENTS
import Nabvar from './components/Navbar/Navbar';



class App extends Component{
  render(){

    return (
      <Fragment>
        <Nabvar />
        <ItemListContainer />
      </Fragment>
    );


  }
}

export default App;
