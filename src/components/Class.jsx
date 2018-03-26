import React, { Component } from 'react';
import { Col, Form, Panel, Row } from 'react-bootstrap';
import { ClassNumber } from './ClassNumber.jsx';
import { ClassGrade } from './ClassGrade.jsx';
import { ClassCreditHours } from './ClassCreditHours.jsx';
import { courses } from './ClassList.jsx';
import {convertGradeToPercent } from './calculationFunctions.js';
import { courseGradeEquivalents } from './courseGradeEquivalents.js';
import { DeleteClassButton } from './DeleteClassButton.jsx';
import { width } from './../helpers.js';
import '.././index.css';


function getGradePoints(grade, hours){
  let gradePercent, points, range;
  let letterGrades = courseGradeEquivalents
  gradePercent = convertGradeToPercent(grade);
  for(let i in courseGradeEquivalents){
    range = courseGradeEquivalents[i].percentageRange;
    if(gradePercent >= range[0] && gradePercent <= range[1] ){
      points = courseGradeEquivalents[i].gradePoint;
    }
  }
  if((points*hours) > 1){
    return (points*hours).toFixed(2);
  } else {
    return '';
  }
}

function getLetterGradeByIndex(letterIndex){
  return courseGradeEquivalents[letterIndex].letter;
}

function getLetterGradeByNumberGrade(grade){
  let gradePercent = convertGradeToPercent(grade);
  let range, letterGrade;
  for(let i in courseGradeEquivalents){
    range = courseGradeEquivalents[i].percentageRange;
    if(gradePercent >= range[0] && gradePercent <= range[1] ){
      letterGrade = courseGradeEquivalents[i].letter;
      return letterGrade;
    }
  }
  return ' ';
}

export class Class extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      classNumber : '',
      classGrade: '',
      classCreditHours: '',
    };
    this.updateClassInput = this.updateClassInput.bind(this);
    this.getCourseId = this.getCourseId.bind(this);
  }

  updateClassInput(e){
    let courseID = this.state.id-1;
    console.log(`course ID ${courseID}`);
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
    } else if (inputID === 'courseCreditHoursInput'){
      this.setState({
        classCreditHours: value,
      });
      courses[(courseID)].classCreditHours = value;
    }
  }

  getCourseId(){
    let courseIndex = this.state.id-1;
    let arrayFirstHalf = courses.slice(0,this.state.id);
    console.log(`arrayFirstHalf before popping: ${arrayFirstHalf}`);
    arrayFirstHalf.pop();
    console.log();
    for (let i in arrayFirstHalf){
      console.log(`arrayFirstHalf[${i}] after popping: ${arrayFirstHalf[i].id}`);
    }
  }

  getValidationState(){
    const length = this.state.value.length;
    console.log(this.state.value.length);
    if (length === 0){
      return ('error');
    }
    return 'success'
  }


  render(){
    let letter = getLetterGradeByNumberGrade(this.state.classGrade);
    let creditPoints = getGradePoints(this.state.classGrade, this.state.classCreditHours)
    return(
      <Row>
        <Col className="inputColumn" md={6} sm={6} xs={5} xsOffset={1}>
          <Form className="inputForm" xs={6}>
            <ClassNumber updateClassInput={this.updateClassInput}/>
            <ClassGrade updateClassInput={this.updateClassInput} />{' '}
            <ClassCreditHours updateClassInput={this.updateClassInput}/>{' '}
          </Form>
        </Col>
        <Col lg={3} md={2} sm={2} xs={3} className="classSummaryCol col-no-padding">
          {width <= 767
            ?  <Panel className="classSummaryPanel">
                <Panel.Heading>
                  {`Letter Grade/Credit Points: `}
                </Panel.Heading>
                <Panel.Body>
                  {`${letter}`} {' | '}
                  {`${creditPoints}`}
                </Panel.Body>
              </Panel>
            : <Panel className="classSummaryPanel ">
              <Panel.Heading>
                {`Letter Grade: `}
              </Panel.Heading>
              <Panel.Body>
                {`${letter}`}
              </Panel.Body>
              <Panel.Heading>
                {`Total Credits Points: `}
              </Panel.Heading>
              <Panel.Body>
                {`${creditPoints}`}
              </Panel.Body>
            </Panel>
          }
        </Col>
        <Col xs={1}>
          <DeleteClassButton getCourseId={this.getCourseId}/>
        </Col>
      </Row>
    );
  }
}
