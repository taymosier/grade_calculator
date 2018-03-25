import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { ClassList } from './components/ClassList.jsx';
import './App.css';


class App extends Component {
  render() {
    return (
      <Grid className="App" >
        <Row className="show-grid">
            <ClassList />
        </Row>
      </Grid>
    );
  }
}

export default App;
