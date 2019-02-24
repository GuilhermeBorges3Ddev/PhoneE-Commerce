import React, { Component } from 'react'

/* As well, we'll consume the stucture passed by Provider component */
import { ProductConsumer } from '../context';

/* Importing the Link component to make the 2 bottom butons work as we expect */
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
        }}
      </ProductConsumer>
    )
  }
}
