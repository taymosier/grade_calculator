import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { width } from '../helpers.js';




export class ClassGrade extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ''
    };
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

  }

  getValidationState(){
    const length = this.state.value.length;
    if (length > 0){
      return ('success');
    }
  }

  handleGradeChange(e){
    let value = e.target.value;
    if(e.target.value < 0 ){
      e.target.value = 0;
    }
    if(value > 100){
      e.target.value = 100;
    }
    this.setState({
      value: e.target.value
    });
    this.props.updateClassInput(e);
  }

  render(){
    let classGradeWithPlaceholder = <Col xs={10} xsOffset={0} className="classGradeComponent">
                                      <FormGroup
                                        controlId="classGradeInput"
                                        validationState={this.getValidationState()}
                                      >
                                        <FormControl
                                          type="number"
                                          placeholder="Grade %"
                                          id="courseGradeInput"
                                          min="0"
                                          max="100"
                                          bsSize="sm"
                                          value={this.state.value}
                                          onChange={this.handleGradeChange}
                                        />
                                        <FormControl.Feedback />
                                      </FormGroup>
                                    </Col>;
    let classNumber = <Col lg={2} className="classGradeComponent">
                        <FormGroup
                          controlId="classGradeInput"
                          validationState={this.getValidationState()}
                        >
                          <ControlLabel>Grade %</ControlLabel>{' '}
                          <FormControl
                            type="number"
                            bsSize="sm"
                            min="0"
                            max="100"
                            value={this.state.value}
                            onChange={this.handleGradeChange}
                            id="courseGradeInput"

                          />
                          <FormControl.Feedback />
                        </FormGroup>
                      </Col>;
    if(width<575){
      return(classGradeWithPlaceholder);
    } else {
      return(classNumber);
    }
  }
}
