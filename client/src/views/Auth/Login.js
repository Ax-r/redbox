import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Divider, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { login } from 'store/Actions'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailHasError: false,
            passwordHasError: false,
            emailErrMsg: '',
            passwordErrMsg: '',

            visibleError: true
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    hundleSubmit = () => {
        this.setState({ emailHasError: false, passwordHasError: false, visibleError: true })
        const { email, password } = this.state;
        if (!email) {
            this.setState({ emailHasError: true, emailErrMsg: 'Email cannot be Empty !' })
            return;
        }
        if (!password) {
            this.setState({ passwordHasError: true, passwordErrMsg: 'Password cannot be Empty !' })
            return;
        }
        this.props.loginUser(email, password)
    }

    handleDismissError = () => {
        this.setState({ visibleError: false })
    }

    render() {
        const { email, password, emailHasError, passwordHasError, emailErrMsg, passwordErrMsg, visibleError } = this.state;
        const { loading, errorAuth } = this.props;

        return (
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'> Log-in to your account </Header>
                    <Form size='large' autoComplete="off">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                name='email'
                                onChange={this.handleChange}
                                value={email}
                                error={(emailHasError) ? { content: emailErrMsg, pointing: 'below' } : false}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password'
                                onChange={this.handleChange}
                                value={password}

                                error={(passwordHasError) ? { content: passwordErrMsg } : false}
                            />

                            <Button
                                color='orange'
                                fluid
                                size='large'
                                onClick={this.hundleSubmit}
                                disabled={loading}
                            >
                                Login
                                </Button>
                            <Divider />
                            <Button circular color='facebook' icon='facebook' disabled={loading} />
                            <Button circular color='twitter' icon='twitter' disabled={loading} />
                            <Button circular color='linkedin' icon='linkedin' disabled={loading} />
                            <Button circular color='google plus' icon='google' disabled={loading} />
                        </Segment>
                    </Form>

                    {errorAuth && visibleError && <Message color='red' onDismiss={this.handleDismissError} content={errorAuth} />}

                    <Message>
                        New to us? <Link to="/auth/register">Sign Up</Link><br />
                        Forgot your password ? <Link to="/auth/recovery">Recovery</Link><br />
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}


const mapDispatchToProps = {
    loginUser: login
}

function mapStateToProps(state) {
    const { auth } = state;
    return {
        loading: auth.loading,
        errorAuth: auth.error
    }
}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)
export { connectedLogin as Login }