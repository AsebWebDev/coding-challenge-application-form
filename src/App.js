import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBAnimation} from "mdbreact";
import Input from './Components/Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phase: 1
    }
  }

  handleClickBack = (e) => {
    this.setState({ phase: this.state.phase-1})
  }

  handleClickNext = (e) => {
    this.setState({ phase: this.state.phase+1})
  }
  

  render() {
    return (
      <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Tell us about ...</h2>
            <hr className="my-2" />
            <MDBContainer>
              <Input phase={this.state.phase}/>   
            </MDBContainer>
            <p className="lead d-flex justify-content-around">
              {this.state.phase > 1 && <MDBBtn onClick={e => this.handleClickBack(e)} color="primary">Back</MDBBtn>}
              {this.state.phase < 4 && <MDBBtn onClick={e => this.handleClickNext(e)} color="secondary">Next</MDBBtn>}
              {this.state.phase > 3 && <MDBBtn onClick={e => this.handleClickNext(e)} color="secondary">Submit</MDBBtn>}
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default App;
