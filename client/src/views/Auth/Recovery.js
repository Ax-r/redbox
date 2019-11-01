import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Recovery extends Component {
    render() {
        return (
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'> Recovery </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Button color='teal' fluid size='large'>
                                Recovery
          </Button>
                        </Segment>
                    </Form>
                    <Message>
                    <Link to="/auth/login">Sign In</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Recovery