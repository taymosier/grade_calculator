import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export class HelpModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: true,
    }
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(){
    this.setState({
      show: false,
    });
    this.props.toggleHelp();
  }

  render(){
    return(
      <Modal className="helpModal" show={this.state.show} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>How To Use This Grade Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Adding Class Information</h4>
          <p>
            For each course, input your current or expected grade and the number of credit hours the course is worth.
          </p>
          <h4>Adding Additional Classes</h4>
          <p>
            To add additional courses, click the Add Class button for each additional class you would like to add.
          </p>
          <h4>Submitting Courses for Grade Calculation</h4>
          <p>Click the Submit button to view the GPA calculated from your added courses.</p>
        </Modal.Body>
      </Modal>
    );
  }
}
