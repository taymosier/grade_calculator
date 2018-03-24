import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class SubmitCoursesButton extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <Button onClick={this.props.onClick}>
        Submit {' '}
        <Glyphicon glyph="circle-arrow-right"/>
      </Button>
    );
  }
}
