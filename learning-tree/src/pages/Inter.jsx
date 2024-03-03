import { React, useState } from "react";
import "../css/Inter.css";
import inter from "../pics/intermediate.gif";
import { Link } from "react-router-dom";

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
              Stack
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Stack.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Stack(A)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Stack_LL.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Stack(LL)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Infix_Postfix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Infix to Postfix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Postix_Evaluation.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Postfix Evaluation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/StackPractice.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Practice Qs
                </a>
              </li>
            </ul>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked2((check2) => !check2)}
              />
              Queues
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/Queue.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Queue(A)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/Queue_LL.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Queue(LL)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/CircularQueue.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Circular Queue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/PriorityQueue.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Priority Queue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/DEqueue.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Dequeue
                </a>
              </li>
            </ul>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked3((check3) => !check3)}
              />
              Matrices
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/DiagonalMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Diagonal Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/SparseMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Sparse Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/SymmetricMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Symmetric Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/TridiagonalMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Tridiagonal Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/LowerTriangularMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Lower Triangular Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/UpperTriangularMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Upper Triangular Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/ToeplitzMatrix.cpp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Toeplitz Matrix
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img className="inter-img"src={inter} alt="intermediate stage" />
          </div>
        </div>
        {check1 && check2 && check3 ? (
        <Link to="/advanced"> <button className="next-button">Next</button> </Link> 
        ) : (
          <div />
        )}
        <Link to="/early"><button className="prev-button">Prev</button></Link>
      </div>
    </>
  );
}

export default Inter;
