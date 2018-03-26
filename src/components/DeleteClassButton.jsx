import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class DeleteClassButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Button bsSize="xs" onClick={this.props.getCourseId}>
        <Glyphicon glyph="remove"/>
      </Button>
    );
  }
}
