import React, { Component } from 'react';
import store from '../store';

class Bar extends Component{
  constructor(){
    super();
    this.state = { bar: store.getState().bar };
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> {
      this.setState({ bar: store.getState().bar });
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    const { bar } = this.state;
    return (<_Bar bar={ bar } />);
  }
}

const _Bar = ({ bar })=> {
  return (
    <div>{ bar.name }</div>
  );
}

export default Bar;
