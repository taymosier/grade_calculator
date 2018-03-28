import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class DeleteClassButton extends Component {
  render(){
    return(
      <Button bsSize="xs" onClick={this.props.deleteCourse}>
        <Glyphicon glyph="remove"/>
      </Button>
    );
  }
}
