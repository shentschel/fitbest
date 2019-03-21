import React, { Component } from 'react';
import { Grid, Input, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Header extends Component {
    render() {
        return (
            <Segment>
                <Grid container stackable>
                    <Grid.Column width={5} floated="left">
                        <Input
                            fluid={true}
                            icon="calendar outline"
                            iconPosition="right"
                            label={{
                                pointing: "right",
                                content: "Date",
                                color: "blue"
                            }}
                            labelPosition="left"
                            placeholder="Enter Date"
                            type="date" />
                    </Grid.Column>

                    <Grid.Column width={5} floated="right">
                        <Input
                            fluid={true}
                            icon="clock outline"
                            iconPosition="right"
                            label={{
                                pointing: "right",
                                content: "Duration",
                                color: "blue"
                            }}
                            labelPosition="left"
                            placeholder="Enter Duration"
                            type="time" />
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Header;
