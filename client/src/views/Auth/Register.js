import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Select, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { DateInput } from 'semantic-ui-calendar-react';


const options_gender = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: ''
        };
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    render() {
        return (
            <Grid style={{ height: '60vh' }} verticalAlign='middle'>
                <Grid.Column>
                    <Header as='h2' color='teal' textAlign='center'> Register </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Group unstackable widths={2}>
                                <Form.Input label='First name' placeholder='First name' />
                                <Form.Input label='Last name' placeholder='Last name' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input label='Email' placeholder='Email' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input label='User Name' placeholder='User Name' />
                            </Form.Group>
                            <Form.Group unstackable widths={2}>
                                <Form.Input label='Password' placeholder='Password' />
                                <Form.Input label='Confirm Password' placeholder='Password' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field control={Select} label='Gender' options={options_gender} placeholder='Gender' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field
                                    control={DateInput}
                                    label='Birth Date'
                                    placeholder='Date'
                                    clearable
                                    clearIcon={<Icon name="remove" color="red" />}
                                    iconPosition="left"
                                    value={this.state.date}
                                    onChange={this.handleChange}
                                    name="date" />
                            </Form.Group>
                            <Button color='orange' fluid size='large'> Register </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an Account ? <Link to="/auth/login">Sign In</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register