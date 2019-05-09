import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home';
import QuestionForm from './QuestionForm';
import Leaderboard from './Leaderboard';
import NavigationBar from './NavigationBar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App"> 
        <Router>
              <Route path="/" exact component={ Home }/> 
              <Route path="/add" exact component={ QuestionForm }/>
              <Route path="/leaderboard" component={ Leaderboard }/>
              <Route path="/login" component={ Login }/>
        </Router>
      </div>
    )
  }
}

export default connect()(App);
