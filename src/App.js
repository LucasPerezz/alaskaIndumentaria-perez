import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//COMPONENTS
import Nabvar from './components/Navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';


//VIEWS
import Mujer from './components/views/Mujer/Mujer';
import Hombre from './components/views/Hombre/Hombre';
import Contacto from './components/views/Contacto/Contacto';



class App extends Component{
  render(){

    return (
      <Fragment>
        <Router>
        <Nabvar />

        <Routes>
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
        </Routes>
        <Routes>
          <Route path='/item/:id' element={<ItemDetail />} />
        </Routes>
        </Router>
      </Fragment>
    );


  }
}

export default App;
