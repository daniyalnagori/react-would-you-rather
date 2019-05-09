import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Col, Form } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'
import '../css/login.css';

class Login extends Component {
    state = {
        userId: null
    }
    handleChange = (e) => {
        this.setState({
            userId: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.userId))
    }
    render() {
        return (
            <Container>
                <Col xs={6}>
                    <Card>
                        <Card.Header as="h5">Would You Rather App</Card.Header>
                        <Card.Body>
                            <Card.Title>Sign In to begin the game</Card.Title>
                            <Form>
                                <Form.Group controlId="users">
                                    <Form.Control as="select" onChange={this.handleChange}>
                                    <option hidden value="default">Sign in</option>
                                        {this.props.users.map((id) => (
                                            <option key={id} value={id}>
                                                {id}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" onClick={this.onSubmit}>Sign in</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)