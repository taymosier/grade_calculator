import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export class CalculatedGrade extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: this.props.show,
      GPA: this.props.calculatedGPA,
    };
    this.hideResults = this.hideResults.bind(this);
  }

  hideResults(){
    this.setState({
      show: false
    });
    this.props.hideResults();
  }




  render(){
    let visible = this.state.show;
    if (this.state.show !== this.props.show){
      this.setState({
        show: true,
      });
    }
    if(this.state.GPA !== this.props.calculatedGPA){
      this.setState({
        GPA: this.props.calculatedGPA
      });
    }
    return(
          <Modal show={visible} style={{ height: 200 }}>
            <Modal.Header >
              <Modal.Title>
                GPA
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.calculatedGPA}
              <Button onClick={this.hideResults} bsStyle="large"></Button>
            </Modal.Body>
          </Modal>
    );
  }
}
