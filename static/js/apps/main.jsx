import React from 'react';
import ReactDOM from 'react-dom';
import { catalog } from './../../../data/mock.json';

const App = ({ message }) => <div>{ message }</div>;

const Items = ({name, imageURL, currency, price } ) => catalog.map((data) =>
    <div>
        <img src={data.imageURL} alt= "imagen"/>
        <p> {data.name} </p>
        <p> {data.currency} {data.price} </p>
    </div>);

ReactDOM.render(<App message="hello world" />, document.getElementById('app'));
ReactDOM.render(<Items/>, document.getElementById('app'));
