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
import { updateClassInput, deleteCourse, getLetterGradeByNumberGrade, getGradePoints, getValidationState } from './classFunctions.js';
import '.././index.css';


export class Class extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      classNumber : this.props.number,
      classGrade: this.props.grade,
      classCreditHours: this.props.hours,
      hidden: false,
    };
    this.updateClassInput = updateClassInput.bind(this);
    this.deleteCourse = deleteCourse.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props !== prevProps){
      this.setState({
        id: this.props.id,
        classNumber: this.props.number,
        classGrade: this.props.grade,
        classCreditHours: this.props.hours
      });
    }
  }

  render(){
    let letter = getLetterGradeByNumberGrade(this.state.classGrade);
    let creditPoints = getGradePoints(this.state.classGrade, this.state.classCreditHours)
    if(this.state.hidden){
      return null
    }
    return(
      <Col xs={12} xsOffset={0} className="classForm">

        <Row>
          <Col className="inputColumn" md={6} sm={6} xs={5} xsOffset={1}>
            <Form className="inputForm" xs={6}>
              <ClassNumber number={this.state.classNumber} updateClassInput={this.updateClassInput}/>
              <ClassGrade grade={this.state.classGrade} updateClassInput={this.updateClassInput} />{' '}
              <ClassCreditHours creditHours={this.state.classCreditHours} updateClassInput={this.updateClassInput}/>{' '}
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
            <DeleteClassButton deleteCourse={this.deleteCourse}/>
          </Col>
        </Row>
      </Col>
    );
  }
}
