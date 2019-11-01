import React, { Component } from 'react'
import { Segment, Sidebar, Menu, Header, Image, Icon } from 'semantic-ui-react'

class Dashboard extends Component {

    render() {
        return (
            <>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            </>
        )
    }
}

export default Dashboard