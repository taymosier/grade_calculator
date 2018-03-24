import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { width } from '../helpers.js';


export class ClassGradePoints extends Component {
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
    let classGradePointsWithPlaceholder = <Col xs={8} xsOffset={0} className="classGradePointsComponent">
      <FormGroup
        controlId="classGradePointInput"
        validationState={this.getValidationState()}
      >
        <FormControl
          placeholder="Grade Points"
          type="number"
          id="courseGradePointsInput"

          value={this.state.value}
          onChange={this.handleGradePointChange}
        />
      <FormControl.Feedback />
      </FormGroup>
    </Col>
    let classGradePoints = <Col lg={2}  className="classGradePointsComponent">
      <FormGroup
        controlId="classGradePointInput"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Grade Points</ControlLabel>{' '}
        <FormControl
          type="number"
          id="courseGradePointsInput"
          value={this.state.value}
          onChange={this.handleGradePointChange}
        />
      <FormControl.Feedback />
      </FormGroup>
    </Col>
    if(width<575){
      return(classGradePointsWithPlaceholder);
    } else {
      return(classGradePoints);
    }
  }
}
