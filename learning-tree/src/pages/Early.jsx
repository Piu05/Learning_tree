import { React, useState } from "react";
import "../css/Early.css";
import early from "../pics/early.gif";
import { Link } from "react-router-dom";

function Early() {
  const [check1, setIsChecked1] = useState(false);
  const [check2, setIsChecked2] = useState(false);
  const [check3, setIsChecked3] = useState(false);
  return (
    <>
      <div className="main">
        <div className="heading">EARLY STAGE</div>
        <div className="early-box">
          <div className="early-content">
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked1((check1) => !check1)}
              />
              Basics
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              
            </ul>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked2((check2) => !check2)}
              />
              Arrays
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
            </ul>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked3((check3) => !check3)}
              />
              Linked List
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/DS_intro.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  DSA Itroduction
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img className="early-img" src={early} alt="early stage" />
          </div>
        </div>
        {check1 && check2 && check3 ? (
        <Link to="/inter">  <button className="next-button">Next</button></Link>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}

export default Early;
