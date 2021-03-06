import React, { Component } from 'react';
import { MDBProgress, MDBRow, MDBCol} from "mdbreact";

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      salary: '',
    }
  }

  handleInputChange(stateKey, event){
    this.setState({
      [stateKey]: event.target.value
    })
  }


  render() {
    let progress = this.props.phase * 25;

    switch (this.props.phase) {
      case 1: return (
        <MDBRow className="d-flex justify-content-center input">
          <MDBCol md="6">
            <form>
              <MDBProgress value={progress} className="my-2" />
              <label htmlFor="firstname" className="grey-text">... your first name</label>
              <input type="text" name="firstname" className="form-control" value={this.state.firstname} onChange={e => this.handleInputChange("firstname", e)}/>
              <br />
              <label htmlFor="lastname" className="grey-text">... your last name</label>
              <input type="text" name="lastname"className="form-control" value={this.state.lastname} onChange={e => this.handleInputChange("lastname", e)}/>
            </form>
          </MDBCol>
        </MDBRow>
      );
      case 2: return (
      <MDBRow className="d-flex justify-content-center input">
        <MDBCol md="6">
          <form>
            <MDBProgress value={progress} className="my-2" />
            <label htmlFor="phonenumber" className="grey-text">... your phonenumber</label>
            <input type="text" name="phonenumber" className="form-control" value={this.state.phonenumber} onChange={e => this.handleInputChange("phonenumber", e)}/>
            <br />
          </form>
        </MDBCol>
      </MDBRow>
      )
      case 3: return (
        <MDBRow className="d-flex justify-content-center input">
          <MDBCol md="6">
            <form>
              <MDBProgress value={progress} className="my-2" />
              <div className="d-flex flex-wrap justify-content-center">
                <div className="radio-button">
                  <label htmlFor="salary" className="grey-text">0-1000</label>
                  <input type="radio" name="salary" className="form-control"/>
                </div>
                <div className="radio-button">
                  <label htmlFor="salary" className="grey-text">1000-2000</label>
                  <input type="radio" name="salary" className="form-control"/>
                </div>
                <div className="radio-button">
                  <label htmlFor="salary" className="grey-text">2000-3000</label>
                  <input type="radio" name="salary" className="form-control"/>
                </div>
                <div className="radio-button">
                  <label htmlFor="salary" className="grey-text">3000-4000</label>
                  <input type="radio" name="salary" className="form-control"/>
                </div>
                <div className="radio-button">
                  <label htmlFor="salary" className="grey-text">>4000</label>
                  <input type="radio" name="salary" className="form-control"/>
                </div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        )
        case 4: return (
          <MDBRow className="d-flex justify-content-center align-items-center input">
            <MDBCol md="6">
              <h5>First Name: <strong><br />{this.state.firstname}</strong></h5>
              <h5>Last Name: <strong>{this.state.lastname}</strong></h5>
              <h5>Phone Number: <strong>{this.state.phonenumber}</strong></h5>
            </MDBCol>
          </MDBRow>
          )
      default: return <div></div>
    }
  }
}