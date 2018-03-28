export function checkRows(){
  if(this.state.courses !== this.props.courses){
    this.setState({
      courses: this.props.courses
    })
    return this.generateCourseRows();
  } else {
    return this.generateCourseRows();
  }
}
