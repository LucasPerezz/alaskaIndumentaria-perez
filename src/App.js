import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//COMPONENTS
import Nabvar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



class App extends Component{
  render(){

    return (
      <Fragment>
        <Router>
        <Nabvar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
        </Routes>

        </Router>
      </Fragment>
    );


  }
}

export default App;
