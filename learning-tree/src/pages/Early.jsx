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
                  target="blank"
                >
                  DSA Introduction
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/Types.cpp"
                  target="blank"
                >
                  DS Types
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/DStheory/Memory.cpp"
                  target="blank"
                >
                  Memory
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/OOP/Class%2BConstructor.cpp"
                  target="blank"
                >
                  OOP
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Pointers/Pointer%2Breference.cpp"
                  target="blank"
                >
                  Pointer
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
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Array.cpp"
                  target="blank"
                >
                  Basics
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Array_ADT.cpp"
                  target="blank"
                >
                  Array ADT
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Strings.cpp"
                  target="blank"
                >
                  Strings
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Polynomial.cpp"
                  target="blank"
                >
                  Polynomial (A)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Reverse_Array.cpp"
                  target="blank"
                >
                  Reverse Array
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/SetOperations.cpp"
                  target="blank"
                >
                  Set Operations
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Array_Practice.cpp"
                  target="blank"
                >
                  Practice Qs
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
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/LinkedList.cpp"
                  target="blank"
                >
                  Basics
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/LinkedList2.cpp"
                  target="blank"
                >
                  LL Functions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/Polynomial_LL.cpp"
                  target="blank"
                >
                  Polynomial (LL)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/DoublyLinkedList.cpp"
                  target="blank"
                >
                  Doubly LL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/CircularList.cpp"
                  target="blank"
                >
                  Circular List
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/SparseMatrix_LL.cpp"
                  target="blank"
                >
                  Sparse Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Linked_List/LLPractice.cpp"
                  target="blank"
                >
                  Practice Qs
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
