import { React, useState } from "react";
import "../css/Advanced.css";
import advanced from "../pics/advanced.gif";
import { Link } from "react-router-dom";

function Advanced() {
  const [check1, setIsChecked1] = useState(false);
  const [check2, setIsChecked2] = useState(false);
  const [check3, setIsChecked3] = useState(false);
  return (
    <>
      <div className="main">
        <div className="heading">ADVANCED STAGE</div>
        <div className="comment-box">
            <p className="comment-text">
              Click on the sub-topics to read and check the topic box once completed
            </p>
          </div>
        <div className="advanced-box">
          <div className="advanced-content">
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked1((check1) => !check1)}
              />
              Trees
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/Tree.cpp"
                  target="blank"
                >
                  Theory
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/BinaryTreeIntro.cpp"
                  target="blank"
                >
                 Binary Tree Theory
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/BinaryTree.cpp"
                  target="blank"
                >
                 Binary Tree
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/BinarySearchTree.cpp"
                  target="blank"
                >
                  Binary Search Tree(BST)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/BST_Pre.cpp"
                  target="blank"
                >
                  BST Preorder
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/AVLTree.cpp"
                  target="blank"
                >
                  AVL Tree
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Trees/2-3Trees.cpp"
                  target="blank"
                >
                  2-3 Trees
                </a>
              </li>
              
            </ul>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked2((check2) => !check2)}
              />
              Search & Sort
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/LinearSearch.cpp"
                  target="blank"
                >
                  Linear Search
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/BinarySearch.cpp"
                  target="blank"
                >
                  Binary Search
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Merging.cpp"
                  target="blank"
                >
                  Merging
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                >
                  Merge Sort
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                >
                  Insertion Sort
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Arrays/Sorting.cpp"
                  target="blank"
                >
                  Sorting Operations
                </a>
              </li>
              
            </ul>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => setIsChecked3((check3) => !check3)}
              />
              Important Topics
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Heap/Heap.cpp"
                  target="blank"
                >
                  Heap
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Recursion/TowerOfHanoi.cpp"
                  target="blank"
                >
                  Tower Of Hanoi
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Piu05/DSA_Learning/blob/main/Structures/Struct_with_function.cpp"
                  target="blank"
                >
                  Struct vs Class
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img className="adv-img"src={advanced} alt="advanced stage" />
          </div>
        </div>
        {check1 && check2 && check3 ? (
        <Link to="/contact"><button className="next-button">Next</button></Link> 
        ) : (
          <div />
        )}
        <Link to="/inter"><button className="prev-button">Prev</button></Link>
      </div>
    </>
  );
}

export default Advanced;
