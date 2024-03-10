import React from "react";
import "../css/Contact.css";
import logo from "../pics/treelogo.gif";
import last from "../pics/last.gif";
// import orange from "../pics/orange.gif";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <>
      <div className="main">
        <div className="heading">
          <img src={logo} alt="tree" />
          <p style={{ marginTop: "15px", marginBottom: "0px" }}>
            LEARNING TREE{" "}
          </p>
          <img src={logo} alt="tree" />
        </div>
        <div className="contact-body">
          <div className="result-box">
            <p className="result-text">
              Congrats! You have completed the concepts of Data Structures and Algorithms
            </p>
          </div>
          <img className="last" alt="fruit" src={last} />
          {/* <img className="orange" src={orange}/> */}
        </div>
        <div className="contact-footer">
          <Link to="/advanced">
            <button className="prev-button">Prev</button> </Link>
        </div>
      </div>
    </>
  );
}

export default Contact