import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Button, Nav } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { deleteAuthedUser } from '../actions/authedUser'


class NavigationBar extends Component {
    logout = () => {
        this.props.dispatch(deleteAuthedUser())
    }
    render() {
        if(this.props.authedUser === '') {
            return (
                <Redirect to="/login" />
            )
        }

        return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/add">New Question</Link>
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-primary" onClick={this.logout}>Logout</Button>
                    </Nav>
                </Navbar>
            
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NavigationBar)