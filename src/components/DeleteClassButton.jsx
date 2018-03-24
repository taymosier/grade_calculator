import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class DeleteClassButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Button>
        <Glyphicon glyph="remove"/>
      </Button>
    );
  }
}
