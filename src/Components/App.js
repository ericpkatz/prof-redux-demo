import React from 'react';
import Foo from './Foo';
import Bar from './Bar';
import Controls from './Controls';
import Nav from './Nav';
import { Route, Redirect, HashRouter as Router } from 'react-router-dom';

const App = ()=> {
  return (
    <Router>
      <div>
        <Route component={ Nav } />
        <Controls />
        <Route path='/foo' component={ Foo } />
        <Route path='/bar' component={ Bar } />
        <Redirect path='/' to='/foo' />
      </div>
    </Router>
  );
}

export default App;
