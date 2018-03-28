import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { width } from '../helpers.js';
import '.././index.css';



export class ClassCreditHours extends Component {
  constructor(props){
    super(props);
    this.state={
      value: this.props.creditHours
    };
    this.handleGradePointChange = this.handleGradePointChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

  }

  getValidationState(){
    try {
      const length = this.state.value.length;
      if (length > 0){
        return ('success');
      }
    } catch(e){
      return null
    }
  }

  handleGradePointChange(e){
    if(e.target.value < 0 || e.target.value > 4){
      return ' '
    }
    this.setState({
      value: e.target.value
    });
    this.props.updateClassInput(e);

  }

  componentDidUpdate(prevProps, prevState){
    if(this.props !== prevProps){
      this.setState({
        value: this.props.creditHours
      });
    }
  }

  render(){
    let classCreditHoursWithPlaceholder = <Col xs={10} sm={8} xsOffset={0} className="classCreditHoursComponent">
      <FormGroup
        controlId="classGradePointInput"
        validationState={this.getValidationState()}
      >
        <FormControl
          placeholder="Credit Hours"
          type="number"
          id="courseCreditHoursInput"
          bsSize="sm"
          min="1"
          max="4"
          value={this.props.creditHours}
          onChange={this.handleGradePointChange}
        />
      <FormControl.Feedback />
      </FormGroup>
    </Col>
    let classCreditHours = <Col lg={2} md={6} sm={6} xs={6} className="classCreditHoursComponent">
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
