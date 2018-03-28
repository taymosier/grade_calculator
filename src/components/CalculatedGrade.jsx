import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import '.././index.css';

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

  componentDidUpdate(prevProps, prevState){
    if (this.state.show !== this.props.show){
      this.setState({
        show: true,
      });
    }
    try {
      if(this.state.GPA !== this.props.calculatedGPA){
        this.setState({
          GPA: this.props.calculatedGPA
        });
      }
    } catch(e){
      return null
    }

  }


  render(){
    let visible = this.state.show;

    return(
          <Modal show={visible} style={{ height: 200 }} onHide={this.hideResults}>
            <Modal.Header closeButton>
              <Modal.Title>
                Calculated GPA
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{this.props.calculatedGPA}</h4>
            </Modal.Body>
          </Modal>
    );
  }
}
