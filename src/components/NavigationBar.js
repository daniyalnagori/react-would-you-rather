import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class NavigationBar extends Component {
    render() {
        return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/add">New Question</Link>
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-primary">Logout</Button>
                    </Nav>
                </Navbar>
            
        )
    }
}

export default connect()(NavigationBar)