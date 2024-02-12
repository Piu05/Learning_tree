import React, { useState } from "react";
import "../css/Home.css";
import logo from "../pics/treelogo.gif";
import seed from "../pics/seed.png";
import seedbox from "../pics/seedbox.jpg";
import seedling from "../pics/seedling.png";
import { Link } from "react-router-dom";

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
            <img className="seed-box" src={seedbox}/>
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
              <Link to="/Early">
            <button className="next-button"> Next </button>
            </Link>):(<div/>)}
          </div>
        </div>
      </>
    );
}
export default Home;
