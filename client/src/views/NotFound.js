import React, { Component } from 'react'
import { Segment, Sidebar, Menu, Header, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class NotFound extends Component {

    render() {
        return (
            <>
                <Segment stacked>
                    <Icon.Group size='huge'>
                        <Icon name='blind' />
                        <Icon corner='top right' name='compass outline' color="orange" loading />
                    </Icon.Group>
                    <Header as='h3'>
                        Nothing here !
                    </Header>
                    <Link to="/user">Back Home</Link>
                </Segment>
            </>
        )
    }
}

export default NotFound