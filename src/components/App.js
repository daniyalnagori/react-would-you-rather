import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default connect()(App);
