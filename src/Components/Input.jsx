import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBAnimation} from "mdbreact";
// import Row from '../Row';

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      salary: '',
      phase: this.props.phase
    }
  }

  render() {
    switch (this.state.phase) {
      case 1: return (
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="firstname" className="grey-text">... your first name</label>
              <input type="text" name="firstname" className="form-control"/>
              <br />
              <label htmlFor="lastname" className="grey-text">... your last name</label>
              <input type="text" name="lastname"className="form-control"/>
            </form>
          </MDBCol>
        </MDBRow>
      );
      case 2: return (
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="phonenumber" className="grey-text">... your phonenumber</label>
            <input type="text" name="phonenumber" className="form-control"/>
            <br />
            <label htmlFor="salary" className="grey-text">... your montly salary</label>
            <input type="radio" name="salary" className="form-control"/>
          </form>
        </MDBCol>
      </MDBRow>
      )
      default: return <div></div>
    }
  }
}