import React, { Component } from 'react';
import store from '../store';

class Foo extends Component{
  constructor(){
    super();
    this.state = { foo: store.getState().foo };
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> {
      this.setState({ foo: store.getState().foo });
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    const { foo } = this.state;
    return (<_Foo foo={ foo } />);
  }
}

const _Foo = ({ foo })=> {
  return (
    <div>{ foo.name }</div>
  );
}

export default Foo;
