import React from "react";
import { MDBProgress } from 'mdbreact';

const ProgressBar = () => {
  return (
    <>
      <MDBProgress value={0} className="my-2" />
      <MDBProgress value={25} className="my-2" />
      <MDBProgress value={50} className="my-2" />
      <MDBProgress value={75} className="my-2" />
      <MDBProgress value={100} className="my-2" />
    </>
  );
}

export default ProgressBar;