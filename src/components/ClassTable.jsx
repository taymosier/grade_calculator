import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import { Class } from './Class';
import '.././index.css';

export class ClassTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      courses: this.props.courses,
    }
    this.updateTable = this.updateTable.bind(this);
  }

  updateTable(course){
    console.log(`courseId: ${course.id}`);
    console.log(`courseNumber: ${course.classNumber}`);
    console.log(`courseGrade: ${course.classGrade}`);
    console.log(`courseGradePoint: ${course.classGradePoints}`);
    let courseHolder = [this.state.courses.length];
    courseHolder = this.state.courses;
    courseHolder[parseInt(course.id)-1] = {
      id: course.id,
      classNumber: course.classNumber,
      classGrade: course.classGrade,
      classGradePoints: course.classGradePoints
    }
    this.setState({
      courses: courseHolder
    });
  }

  render(){
    const courseRows = this.props.courses.map(course =>
      (
        <Col xs={12} xsOffset={0} className="classForm">
          <Class id={course.id} updateClass={this.props.updateClass}/>
        </Col>
      ));
    return(
      <Row>
        {courseRows}
      </Row>
    );
  }
}
