import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import { AddClassButton } from './AddClassButton.jsx';
import { HelpButton } from '../HelpButton.jsx';
import { HelpModal } from '../HelpModal.jsx';
import { SubmitCoursesButton } from '../SubmitCoursesButton.jsx';
import { ClassTable } from './ClassTable.jsx';
import { CalculatedGrade } from './CalculatedGrade.jsx';
import { addCourse, toggleHelp, hideResults, submitCourses} from './classListFunctions.js';

export let courses  = [
  { id: 1,
  classNumber: '',
  classGrade: '',
  classCreditHours: '',
  },
]

export let dummycourses = [
  { id: 1,
  classNumber: 'CSC3200',
  classGrade: 70,
  classCreditHours: 1,
  },
  { id: 2,
  classNumber: 'FTM282',
  classGrade: 75,
  classCreditHours: 2,
  },
  { id: 3,
  classNumber: 'FTM460',
  classGrade: 85,
  classCreditHours: 3,
  },
  {id: 4,
  classNumber: 'FTM483',
  classGrade: 88,
  classCreditHours: 4,
  },
]

export class ClassList extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: courses,
      validSubmission: false,
      calculatedGPA: '',
      showHelp: '',
      showResults: true,
    }
    this.addCourse = addCourse.bind(this);
    this.submitCourses = submitCourses.bind(this);
    this.hideResults = hideResults.bind(this);
    this.toggleHelp = toggleHelp.bind(this);
    this.updateCourses = this.updateCourses.bind(this);
  }

  updateCourses(id){
    console.log('calling updateCourse');
    let courseIndex = id-1;
    for (let i = courseIndex; i< courses.length; i++){
      courses[i].id = i;
    }
    courses.splice(courseIndex, 1);
    // this.setState({
    //   courses: courses
    // })
    for(let i =0; i < courses.length; i++){
      console.log(courses[i]);
    }

    this.setState({
      courses: courses
    })
  }

  render(){
    return(
      <Col className="courseContainer" lg={10} xs={10} xsOffset={1} lgOffset={1}>
        <ClassTable
          updateCourses={this.updateCourses}
          updateClass={this.updateClass}
          courses={courses}
        />
        <HelpButton toggleHelp={this.toggleHelp}/>{' '}
        <AddClassButton className="AddClassButton" onClick={this.addCourse}/>{' '}
        <SubmitCoursesButton onClick={this.submitCourses}/>
        {this.state.calculatedGPA.length > 0
          ? <CalculatedGrade
              show={this.state.showResults}
              calculatedGPA={this.state.calculatedGPA}
              hideResults={this.hideResults}
            />
          : null
        }
        {this.state.showHelp
          ? <HelpModal show={true} toggleHelp={this.toggleHelp}/>
          : null
        }

      </Col>
    );
  }
}
