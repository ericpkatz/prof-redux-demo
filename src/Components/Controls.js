import React from 'react';
import store from '../store';

const Controls = ()=> {
  const changeFoo = ()=> {
    store.dispatch({
      type: 'CHANGE_FOO',
      name: `${Math.floor(Math.random()*100)}-Foo`
    });
  }
  const changeBar = ()=> {
    store.dispatch({
      type: 'CHANGE_BAR',
      name: `${Math.floor(Math.random()*100)}-BAR`
    });
  }
  const changeFooAndBar = ()=>{
    changeFoo();
    changeBar();
  }
  return (
    <ul>
      <li>
        <a onClick= { changeFoo }>Change Foo</a>
      </li>
      <li>
        <a onClick= { changeBar }>Change Bar</a>
      </li>
      <li>
        <a onClick= { changeFooAndBar }>Change Foo And Bar</a>
      </li>
    </ul>
  );
}

export default Controls;
