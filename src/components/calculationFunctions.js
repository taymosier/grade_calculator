import { courseGradeEquivalents } from './courseGradeEquivalents.js';

export function calculateGrades(courseList){
  let gradePercent;
  let letterGradeRange;
  console.log(`calculateGrades called`);
  console.log(courseGradeEquivalents);
  for(let x in courseList.courses){
    gradePercent = convertGradeToPercent(courseList.courses[x].classGrade);
    for(let i in courseGradeEquivalents){
      letterGradeRange = courseGradeEquivalents[i].percentageRange;
      if(gradePercent >= letterGradeRange[0] && gradePercent <= letterGradeRange[1]){
        console.log(courseGradeEquivalents[i].letter);
      }
      console.log(letterGradeRange);
    }
  }
}

function convertGradeToPercent(grade){
  grade = parseInt(grade)/100;
  return grade;
}
