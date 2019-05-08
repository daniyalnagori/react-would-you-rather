import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Home</h1>
            </div>
        )
    } 
}

export default connect()(Home)