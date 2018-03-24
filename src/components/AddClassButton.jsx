import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class AddClassButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Button onClick={this.props.onClick}>
        Add Class{' '}
        <Glyphicon glyph="plus"/>
      </Button>
    );
  }
}
