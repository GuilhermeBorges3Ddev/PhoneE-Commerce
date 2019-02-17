import React, { Component } from 'react';
import './App.css';

/* bootstrap.min added */
import 'bootstrap/dist/css/bootstrap.min.css';

/* importing the components that have been created */
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
     <React.Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
     </React.Fragment>
    );
  }
}

export default App;


