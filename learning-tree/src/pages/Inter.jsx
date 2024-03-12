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
        <div className="comment-box">
            <p className="comment-text">
              Click on the sub-topics to read and check the topic box once completed
            </p>
          </div>
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
                  target="blank"
                >
                  Stack(A)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Stack_LL.cpp"
                  target="blank"
                >
                  Stack(LL)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Infix_Postfix.cpp"
                  target="blank"
                >
                  Infix to Postfix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/Postix_Evaluation.cpp"
                  target="blank"
                >
                  Postfix Evaluation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Stack/StackPractice.cpp"
                  target="blank"
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
                  target="blank"
                >
                  Queue(A)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/Queue_LL.cpp"
                  target="blank"
                >
                  Queue(LL)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/CircularQueue.cpp"
                  target="blank"
                >
                  Circular Queue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/PriorityQueue.cpp"
                  target="blank"
                >
                  Priority Queue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Queue/DEqueue.cpp"
                  target="blank"
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
                  target="blank"
                >
                  Diagonal Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/SparseMatrix.cpp"
                  target="blank"
                >
                  Sparse Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/SymmetricMatrix.cpp"
                  target="blank"
                >
                  Symmetric Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/TridiagonalMatrix.cpp"
                  target="blank"
                >
                  Tridiagonal Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/LowerTriangularMatrix.cpp"
                  target="blank"
                >
                  Lower Triangular Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/UpperTriangularMatrix.cpp"
                  target="blank"
                >
                  Upper Triangular Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Matrices/ToeplitzMatrix.cpp"
                  target="blank"
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
