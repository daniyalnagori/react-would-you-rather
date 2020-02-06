import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home';
import QuestionForm from './QuestionForm';
import Leaderboard from './Leaderboard';
import QuestionView from './QuestionView'
import  PrivateRoute from '../authentication/PrivateRoute'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    console.log('----------')
  }

  render() {
    return (
      <div className="App"> 
        <Router>
              <PrivateRoute path="/" exact component={ Home }/> 
              <PrivateRoute path="/add" component={ QuestionForm }/>
              <PrivateRoute path="/leaderboard" component={ Leaderboard }/>
              <Route path="/login" exact component={ Login }/>
              <PrivateRoute path="/questions/:id" component={ QuestionView }/>
        </Router>
      </div>
    )
  }
}

export default connect()(App);
