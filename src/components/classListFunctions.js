import { validateCourses } from './validationFunctions.js';
import { calculateGrades } from './calculationFunctions.js';
import { courses } from './ClassList.jsx';

export function addCourse(){
  let newCourse = {
    id: '',
    classNumber: '',
    classGrade: '',
    classCreditHours: '',
  }
  // eslint-disable-next-line 
  newCourse.id = parseInt(courses.length)+1;
  courses.push(newCourse);
  this.setState({
    courses: courses,
  });
  console.log(courses);
}

export function toggleHelp(){
  if(this.state.showHelp){
    this.setState({
      showHelp: false,
    });
  } else {
    this.setState({
      showHelp: true,
    });
  }
}

export function hideResults(){
  this.setState({
    showResults: false
  });
}

export function submitCourses(){
  let submittedCourses = this.state;
  console.log(submittedCourses);
  console.log(calculateGrades(submittedCourses))
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
