import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { width } from '../helpers.js';

export class ClassNumber extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

  }

  getValidationState(){
    const length = this.state.value.length;
    if (length > 0){
      return ('success');
    }
    return null
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
    this.props.updateClassInput(e);
  }

  render(){
    let classNumberWithPlaceholder = <Col xs={10} xsOffset={0} className="classNumberComponent">
                                      <FormGroup
                                          className="classInput"
                                          validationState={this.getValidationState()}
                                      >{' '}
                                          <FormControl
                                            type="text"
                                            bsSize="sm"
                                            id="courseNumberInput"
                                            placeholder="Class Number"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                          />
                                        <FormControl.Feedback />
                                      </FormGroup>
                                     </Col>;
    let classNumber = <Col lg={3} lgOffset={1} className="classNumberComponent">
                        <FormGroup
                            className="classInput"
                            validationState={this.getValidationState()}
                        >{' '}
                            <ControlLabel>Class Number</ControlLabel>{' '}
                            <FormControl
                              type="text"
                              bsSize="sm"
                              id="courseNumberInput"
                              value={this.state.value}
                              onChange={this.handleChange}
                            />
                          <FormControl.Feedback />
                        </FormGroup>
                      </Col>

    if(width<575){
      return(classNumberWithPlaceholder);
    } else {
      return(
        classNumber
      )
    }
  }
}
