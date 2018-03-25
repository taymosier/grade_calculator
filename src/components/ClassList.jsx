import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import { AddClassButton } from './AddClassButton.jsx';
import { SubmitCoursesButton } from '../SubmitCoursesButton.jsx';
import { ClassTable } from './ClassTable.jsx';
import { CalculatedGrade } from './CalculatedGrade.jsx';
import { calculateGrades } from './calculationFunctions.js';
import { validateCourses } from './validationFunctions.js';
import { width } from './../helpers.js';

export let courses = [
  { id: 1,
  classNumber: '',
  classGrade: '',
  classCreditHours: '',
  },
]

export let dummycourses = [
  { id: 1,
  classNumber: 'CSC3200',
  classGrade: 98,
  classCreditHours: 4,
  },
  { id: 2,
  classNumber: 'FTM282',
  classGrade: 85,
  classCreditHours: 3,
  },
  { id: 3,
  classNumber: 'FTM460',
  classGrade: 88,
  classCreditHours: 3,
  },
]

let course = {
  id: '',
  classNumber: '',
  classGrade: '',
  classCreditHours: '',
};

export class ClassList extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: courses,
      validSubmission: false,
      calculatedGPA: '',
      showResults: true,
    }
    this.addCourse = this.addCourse.bind(this);
    this.submitCourses = this.submitCourses.bind(this);
    this.hideResults = this.hideResults.bind(this);
  }

  addCourse(){
    course.id = parseInt(courses.length)+1;
    courses.push(course);
    this.setState({
      courses: courses,
    });
    console.log(courses);
  }

  hideResults(){
    this.setState({
      showResults: false
    });
  }

  submitCourses(){
    let submittedCourses = this.state;
    console.log(validateCourses(submittedCourses));
    if(validateCourses(submittedCourses) === true){
      this.setState({
        calculatedGPA: calculateGrades(submittedCourses),
        showResults: true,
      })
      calculateGrades(submittedCourses);
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
        {this.state.calculatedGPA.length > 0
          ? <CalculatedGrade show={this.state.showResults} calculatedGPA={this.state.calculatedGPA} hideResults={this.hideResults}/>
          : null
        }
      </Col>
    );
  }
}
