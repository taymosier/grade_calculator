import React, { Component } from 'react';
import { Button, Col, Form, Glyphicon, Row } from 'react-bootstrap';
import { ClassNumber } from './ClassNumber.jsx';
import { ClassGrade } from './ClassGrade.jsx';
import { ClassGradePoints } from './ClassGradePoints.jsx';
import { DeleteClassButton } from './DeleteClassButton.jsx';
import {AddClassButton } from '../AddClassButton.jsx';
import { courses } from './ClassList.jsx';


export class Class extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      classNumber : '',
      classGrade: '',
      classGradePoints: '',
    };
    this.updateClassInput = this.updateClassInput.bind(this);
  }

  updateClassInput(e){
    let courseID = this.state.id-1;
    let value = e.target.value;
    let inputID = e.target.id;
    if(inputID === 'courseNumberInput'){
      this.setState({
        classNumber: value,
      });
      courses[(courseID)].classNumber = value;
    } else if (inputID === 'courseGradeInput'){
      this.setState({
        classGrade: value,
      });
      courses[(courseID)].classGrade = value;
    } else if (inputID === 'courseGradePointsInput'){
      this.setState({
        classGradePoints: value,
      });
      courses[(courseID)].classGradePoints = value;
    }
  }

  getValidationState(){
    const length = this.state.value.length;
    if (length === 0){
      return ('error');
    }
    return 'success'
  }

  render(){
    return(
      <Form inline >
        <ClassNumber updateClassInput={this.updateClassInput}/>
        <ClassGrade updateClassInput={this.updateClassInput} />{' '}
        <ClassGradePoints updateClassInput={this.updateClassInput}/>{' '}
      </Form>
    );
  }
}
