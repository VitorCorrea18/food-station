import React, { Component } from 'react';
import Header from '../components/Header';

export default class ExploreDrink extends Component {
  render() {
    return (
      <Header title="Explore Drinks" withSearchButton={ false } />
    );
  }
}
