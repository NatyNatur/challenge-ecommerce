import React from 'react';
import ReactDOM from 'react-dom';
import { catalog } from './../../../data/mock.json';

const App = ({ message }) => <div>{ message }</div>;

const Title = ({ title }) => <h2>{ title } </h2>;

const Items = ({id, name, imageURL, currency, price } ) => catalog.map((data) =>
  <div className="products">
    <div className="productBox" id={data.id}>
      <img src={data.imageURL} alt= "imagen"/>
      <p> {data.name} </p>
      <p> {data.currency} {data.price} </p>
      <button>Add to cart</button>
    </div>
  </div>);

// ReactDOM.render(<App message="hello world" />, document.getElementById('app'));
ReactDOM.render(<Title title="Products List"/>, document.getElementById('appTitle'));
ReactDOM.render(<Items/>, document.getElementById('productsCont'));
