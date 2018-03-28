import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import { Class } from './Class';
import { courses } from './ClassList.jsx';
import { getCourseDetails } from './Class.jsx';
import { checkRows } from './classTableFunctions.js';
import '.././index.css';

export class ClassTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      courses: this.props.courses,
    }
    this.checkRows = checkRows.bind(this);
  }

  componentDidUpdate(prevState,prevProps){
    if (this.props.courses !== prevState.courses){
      this.setState({
        courses: this.props.courses
      })
    }
  }

  render(){
    let courseRows = this.state.courses.map(course =>
      (
        <Class
          updateCourses={this.props.updateCourses}
          id={course.id}
          number={course.classNumber}
          grade={course.classGrade}
          hours={course.classCreditHours}
        />
      ));
    console.log(this.state.courses);
    console.log("Generating class components");
    for (let i = 0; i < this.props.courses.length; i++){
      console.log(`${i}: {id: ${this.props.courses[i].id}, classNumber: ${this.props.courses[i].classNumber}, classGrade: ${this.props.courses[i].classGrade}, classGradePoints: ${this.state.courses[i].classCreditHours}}`);
      // console.log(this.props.courses[i].classGrade);
    }
    return(
      <Row>
        {courseRows}
      </Row>
    );
  }
}
