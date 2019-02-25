import React, { Component } from 'react';
import './App.css';

/* bootstrap.min added */
import 'bootstrap/dist/css/bootstrap.min.css';

/* importation of react-router-dom */
import {Switch,Route} from 'react-router-dom';

/* importing the components that have been created */
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
     <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
     </React.Fragment>
    );
  }
}

export default App;


