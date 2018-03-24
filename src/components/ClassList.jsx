import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import { AddClassButton } from './AddClassButton.jsx';
import { SubmitCoursesButton } from '../SubmitCoursesButton.jsx';
import { ClassTable } from './ClassTable.jsx';
import { courseGradeEquivalents } from './courseGradeEquivalents.js';
import { calculateGrades } from './calculationFunctions.js';
import { validateCourses } from './validationFunctions.js';


export let dummycourses = [
  { id: 1,
  classNumber: '',
  classGrade: '',
  classGradePoints: '',
  },
]

export let courses = [
  { id: 1,
  classNumber: 'CSC3200',
  classGrade: 98,
  classGradePoints: 4,
  },
  { id: 2,
  classNumber: 'FTM282',
  classGrade: 85,
  classGradePoints: 3,
  },
  { id: 3,
  classNumber: 'FTM460',
  classGrade: 88,
  classGradePoints: 3.3,
  },
]

let course = {
  id: '',
  classNumber: '',
  classGrade: '',
  classGradePoints: '',
};

export class ClassList extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: courses,
      validSubmission: false,
    }
    this.addCourse = this.addCourse.bind(this);
    this.submitCourses = this.submitCourses.bind(this);
  }

  addCourse(){
    course.id = parseInt(courses.length)+1;
    courses.push(course);
    this.setState({
      courses: courses,
    });
    console.log(courses);
  }

  submitCourses(){
    console.log(validateCourses(this.state));
    if(validateCourses(this.state) === true){
      calculateGrades(this.state);
    } else {
      console.log(`invalid courses`);
    }
  }

  render(){
    return(
      <Col className="courseContainer" lg={10} xs={10} xsOffset={1} lgOffset={1}>
        <ClassTable courses={this.state.courses} updateClass={this.updateClass}/>
        <AddClassButton className="AddClassButton" onClick={this.addCourse}/>{' '}
        <SubmitCoursesButton onClick={this.submitCourses}/>
      </Col>
    );
  }
}
