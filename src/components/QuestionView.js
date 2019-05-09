import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container ,Card, Form, Button, Col } from 'react-bootstrap'
import NavigationBar from './NavigationBar'

class QuestionView extends Component {
    render() {
        return (
            <div>
            <NavigationBar />
            <Container>
                <Col xs={6} md={6}>
                    <Card>
                        <Card.Img variant="top" src={this.props.author.avatarURL} />
                        <Card.Body>
                            <Card.Title>{this.props.author.name} asks</Card.Title>
                            <Card.Text>
                                Would you rather
                            </Card.Text>
                            <div className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id="1"
                                    label={this.props.q ? this.props.q.optionOne.text : ''}
                                />

                                <Form.Check
                                    type="radio"
                                    label={this.props.q ? this.props.q.optionTwo.text : ''}
                                    id="2"
                                />
                            </div>
                            <Button variant="primary" block>Submit</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, {match}) {
    let q = questions[match.params.id]
    let author = q ? users[q.author] : ''
    return {
        q : questions[match.params.id],
        author
    }
}

export default connect(mapStateToProps)(QuestionView)