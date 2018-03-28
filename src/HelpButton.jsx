import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export class HelpButton extends Component {
  render(){
    return(
      <Button onClick={this.props.toggleHelp}>
        Help {' '}
        <Glyphicon glyph="info-sign"/>
      </Button>
    );
  }
}
