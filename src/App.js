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
        <ItemListContainer
         imagenProducto="https://i.ibb.co/z2k0r37/Whats-App-Image-2021-11-17-at-22-57-24.jpg"
         nombreProducto="Biker Nike"
         precioProducto="$1800"/>
        <ItemListContainer 
         imagenProducto="https://i.ibb.co/SxDd9B8/Whats-App-Image-2021-11-17-at-22-57-30.jpg"
         nombreProducto="Body Negro"
         precioProducto="$2000"
        />
        <ItemListContainer 
        imagenProducto="https://i.ibb.co/MPLj37q/Whats-App-Image-2021-11-17-at-22-57-37.jpg"
        nombreProducto="Remera Seleccion Argentina"
        precioProducto="$1400"
        />
      </Fragment>
    );


  }
}

export default App;
