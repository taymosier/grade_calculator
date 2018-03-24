export function validateCourses(courseList){
  let validNumber, validGrade, validGradePoints;
    for(let x in courseList.courses){
      validNumber = ValidateCourseNumber(courseList.courses[x].classNumber);
      validGrade = ValidateCourseGrade(courseList.courses[x].classGrade);
      validGradePoints = ValidateCourseGradePoints(courseList.courses[x].classGradePoints);
      if(!validNumber || !validGrade || !validGradePoints){
        console.log(`validNumber: ${validNumber}`);
        console.log(`validGrade: ${validGrade}`);
        console.log(`validGradePoints: ${validGradePoints}`);
        return false;
      }
    }
  return true;
}

export function ValidateCourseNumber(courseNumber){
  // console.log('ValidateCourseNumber called');
  var specialCharacters = /\^+|\$+|\.+|\++|\?+|\=+|\!+|\:+|\|+|\\+|\/+|\(+|\)+|\[+|\]+|\{+|\}/g;
  // console.log(courseNumber.toString().match(specialCharacters));
  let invalidCharacters = courseNumber.toString().match(specialCharacters);
  if(invalidCharacters != null && courseNumber.length > 0){
    return false;
  }
  return true;
}

export function ValidateCourseGrade(courseGrade){
  // console.log('ValidateCourseNumber called');
  var specialCharacters = /\^+|\$+|\.+|\?+|\=+|\!+|\:+|\|+|\\+|\/+|\(+|\)+|\[+|\]+|\{+|\}/g;
  // console.log(courseGrade.toString().match(specialCharacters));
  let invalidCharacters = courseGrade.toString().match(specialCharacters);
  if(invalidCharacters != null && courseGrade.length > 0){
    return false;
  }
  return true;
}

export function ValidateCourseGradePoints(courseGradePoints){
  // console.log('ValidateCourseNumber called');
  // var specialCharacters = /\^+|\$+|\.+|\?+|\=+|\!+|\:+|\|+|\\+|\/+|\(+|\)+|\[+|\]+|\{+|\}/g;
  // // console.log(courseGradePoints.toString().match(specialCharacters));
  // let invalidCharacters = courseGradePoints.toString().match(specialCharacters);
  // if(invalidCharacters != null){
  //   return false;
  // }
  return true;
}
