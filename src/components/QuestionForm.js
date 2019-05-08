import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar';




class QuestionForm extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Leaderboard</h1>
            </div>
        )
    }
}

export default connect()(QuestionForm)