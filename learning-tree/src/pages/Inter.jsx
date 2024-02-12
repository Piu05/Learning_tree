import { React, useState } from "react";
import "../css/Inter.css";
import inter from "../pics/intermediate.gif";

function Inter() {
  const [check1, setIsChecked1] = useState(false);
  const [check2, setIsChecked2] = useState(false);
  const [check3, setIsChecked3] = useState(false);
  return (
    <>
      <div className="main">
        <div className="heading">INTERMEDIATE STAGE</div>
        <div className="inter-box">
          <div className="inter-content">
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
            <img className="inter-img"src={inter} alt="intermediate stage" />
          </div>
        </div>
        {check1 && check2 && check3 ? (
          <button className="next-button">Next</button>
        ) : (
          <div />
        )}
        <button className="prev-button">Prev</button>
      </div>
    </>
  );
}

export default Inter;
