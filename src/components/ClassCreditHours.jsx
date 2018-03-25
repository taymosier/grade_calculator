import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { width } from '../helpers.js';


export class ClassCreditHours extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ''
    };
    this.handleGradePointChange = this.handleGradePointChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

  }

  getValidationState(){
    const length = this.state.value.length;
    if (length > 0){
      return ('success');
    }
  }

  handleGradePointChange(e){
    this.setState({
      value: e.target.value
    });
    this.props.updateClassInput(e);

  }

  render(){
    let classCreditHoursWithPlaceholder = <Col xs={10} xsOffset={0} className="classCreditHoursComponent">
      <FormGroup
        controlId="classGradePointInput"
        validationState={this.getValidationState()}
      >
        <FormControl
          placeholder="Credit Hours"
          type="number"
          id="courseCreditHoursInput"
          bsSize="sm"
          value={this.state.value}
          onChange={this.handleGradePointChange}
        />
      <FormControl.Feedback />
      </FormGroup>
    </Col>
    let classCreditHours = <Col lg={2}  className="classCreditHoursComponent">
      <FormGroup
        controlId="classGradePointInput"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Credit Hours</ControlLabel>{' '}
        <FormControl
          bsSize="sm"
          type="number"
          id="courseCreditHoursInput"
          min="1"
          max="4"
          value={this.state.value}
          onChange={this.handleGradePointChange}
        />
      <FormControl.Feedback />
      </FormGroup>
    </Col>
    if(width<575){
      return(classCreditHoursWithPlaceholder);
    } else {
      return(classCreditHours);
    }
  }
}
