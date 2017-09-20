import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  foo: {
    name: 'My FOO'
  },
  bar: {
    name: 'bar'
  }
};

/*
const reducer = ( state = initialState, action)=> {
  switch(action.type){
    case 'CHANGE_FOO':
      state = Object.assign({}, state, { foo: { name: action.name }});
      break;
    case 'CHANGE_BAR':
      state = Object.assign({}, state, { bar: { name: action.name }});
      break;
  }
  return state;
}
*/

const fooReducer = (state = { name: 'foo' }, action) => {
  switch(action.type){
    case 'CHANGE_FOO':
      state = Object.assign({}, state, { name: action.name });
      break;
  }
  return state;

}

const barReducer = (state = { name: 'bar' }, action) => {
  switch(action.type){
    case 'CHANGE_BAR':
      state = Object.assign({}, state, { name: action.name });
      break;
  }
  return state;
}

const reducer = combineReducers({
  foo: fooReducer,
  bar: barReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch((x)=> {
  axios.get('/api')
    .then( result => result.data)
    .then( ({ foo, bar })=> {
      x({
        type: 'CHANGE_BAR',
        name: bar 
      });
      x({
        type: 'CHANGE_FOO',
        name: foo 
      });
    });
});

/*
const changeFoo = ()=>{
  setTimeout(()=> {
    store.dispatch({
      type: 'CHANGE_FOO',
      name: `${Math.floor(Math.random()*100)}-Foo`
    });
    changeFoo();
  }, 1000);
}
const changeBar = ()=>{
  setTimeout(()=> {
    store.dispatch({
      type: 'CHANGE_BAR',
      name: `${Math.floor(Math.random()*100)}-Bar`
    });
    changeBar();
  }, 1000);
}
changeFoo();
changeBar();
*/

export default store;
