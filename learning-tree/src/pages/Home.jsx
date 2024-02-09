import React, { useState } from "react";
import "../css/Home.css";
import logo from "../pics/treelogo.gif";
import seed from "../pics/seed.png";
import seedling from "../pics/seedling.png";

function Home(){
    const[isOver,setIsOver]=useState(false);
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
          <div className="home-body">
            <p className="home-text">
              Let's start your DSA journey by planting a seedling{" "}
            </p>
            <div className="seed-box">Seed Box</div>
            <img className="seed" src={seed} alt="seed" />
            <img
              className="seedling"
              src={seedling}
              alt="seedling"
              onAnimationEnd={() => {setIsOver((isOver)=>(!isOver))}}
            />
          </div>
          <div className="home-footer">
            <div className="soil"></div>
            {isOver?
            (
            <button className="next-button"> Next </button>):(<div/>)}
          </div>
        </div>
      </>
    );
}
export default Home;
