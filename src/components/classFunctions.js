import { courses } from './ClassList.jsx';
import { courseGradeEquivalents } from './courseGradeEquivalents.js';
import { convertGradeToPercent } from './calculationFunctions.js';


export function updateClassInput(e){
  // console.log(courses);
  let courseID = this.state.id-1;
  // console.log(`course ID ${courseID}`);
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


export function deleteCourse(){
  this.props.updateCourses(this.state.id);
}

export function getValidationState(){
  const length = this.state.value.length;
  console.log(this.state.value.length);
  if (length === 0){
    return ('error');
  }
  return 'success'
}

export function getGradePoints(grade, hours){
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

export function getLetterGradeByIndex(letterIndex){
  return courseGradeEquivalents[letterIndex].letter;
}

export function getLetterGradeByNumberGrade(grade){
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
export function getCourseDetails(index){
  console.log(`${index}:
                {id: ${courses[index].id},
                classNumber: ${courses[index].classNumber},
                classGrade: ${courses[index].classGrade},
                classGradePoints: ${courses[index].classCreditHours}}`
              );
}
