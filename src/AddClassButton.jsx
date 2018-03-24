import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class AddClassButton extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <Button>
        Add Class {' '}
        <Glyphicon glyph="plus"/>
      </Button>
    );
  }
}
