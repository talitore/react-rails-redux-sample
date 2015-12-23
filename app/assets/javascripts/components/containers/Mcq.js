import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import McqApp from './McqApp';
import configureStore from '../store/configureStore';
// import {setCounter} from '../actions/mcq'

const store = configureStore();

export default class Mcq extends Component {
  componentWillMount() {
    console.log(this.props);
    // store.dispatch(setCounter(this.props.counter));
  }
  render() {
    return (
      <Provider store={store}>
        <McqApp />
      </Provider>
    );
  }
}
