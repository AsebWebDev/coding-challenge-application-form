import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBAnimation} from "mdbreact";
// import Row from '../Row';

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                ... your first name
              </label>
              <input
                type="text"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                ... your last name
              </label>
              <input
                type="text"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}