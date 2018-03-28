import { courseGradeEquivalents } from './courseGradeEquivalents.js';

export function calculateGrades(courseList){
  console.log('this is calculatedGrades being called')
  let equivalentGradePoints,gradeCreditHours, gradePercent, letterGradeRange;
  let letterGrades = [];
  for(let x in courseList.courses){
    gradePercent = convertGradeToPercent(courseList.courses[x].classGrade);
    gradeCreditHours = courseList.courses[x].classCreditHours;
    // letterGrades.push(gradePercent);
    for(let i in courseGradeEquivalents){
      letterGradeRange = courseGradeEquivalents[i].percentageRange;
      if(gradePercent >= letterGradeRange[0] && gradePercent <= letterGradeRange[1]){
        equivalentGradePoints = courseGradeEquivalents[i].gradePoint;
      }
    }
    letterGrades.push([equivalentGradePoints, gradeCreditHours]);
  }
  console.log(letterGrades);
  let termGPA = calculateTermGPA(letterGrades);
  return termGPA;
}

export function convertGradeToPercent(grade){
  grade = parseInt(grade)/100;
  return grade;
}

function calculateTermGPA(grades){
  // TODO round numbers after multiplication
  let semesterAverage;
  let totalHours = 0;
  let pointSum = 0;
  for (let x in grades){
    // console.log(`Equivalent Grade Points: ${grades[x][0]}`);
    // console.log(`Class Hours: ${grades[x][1]}`);
    // console.log(`Total Points for class: ${grades[x][0]*grades[x][1]}`);
    pointSum += (grades[x][0]*grades[x][1]);
    totalHours += parseInt(grades[x][1]);
    // console.log(letterGrades[x]);
  }
  console.log(pointSum);
  console.log(`Total Hours: ${totalHours}`);
  semesterAverage = parseFloat(pointSum/totalHours).toFixed(2);
  console.log(semesterAverage);
  return parseFloat(semesterAverage).toFixed(2);
}
