import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBAnimation} from "mdbreact";
import Input from './Components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Tell us about ...</h2>
            <hr className="my-2" />
            <Input /> 
            <p className="lead d-flex justify-content-between">
              <MDBBtn color="primary">Back</MDBBtn>
              <MDBBtn color="secondary">Next</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default App;
