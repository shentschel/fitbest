import React, { Component } from 'react';
import Header from './components/Header';
import { Label, Dropdown, Grid, Input, Container, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const unitDropdown = [
    {
        key: 'kg',
        text: 'Kilogramm',
        value: 'kg'
    },
    {
        key: 'sec',
        text: 'Sekunden',
        value: 'sec'
    }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
            <Header />

            <Segment>
                <Grid container stackable>
                    <Grid.Column width={5} floated="left" >
                        <Input
                            fluid={true}
                            icon="clipboard list"
                            iconPosition="right"
                            label={{
                                content: "Exercise",
                                color: "blue"
                            }}
                            labelPosition="left"
                            placeholder="Enter Exercise"
                            type="text" />
                    </Grid.Column>

                    <Grid.Column width={1} />

                    <Grid.Column width={6}>
                        <Dropdown
                            text="Unit"
                            selection
                            search
                            options={unitDropdown}
                            allowAdditions
                            minCharacters={3}
                            defaultValue={unitDropdown[0].value}
                        />

                    </Grid.Column>

                    <Grid.Column width={1} />

                    <Grid.Column width={5} floated="right">
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
