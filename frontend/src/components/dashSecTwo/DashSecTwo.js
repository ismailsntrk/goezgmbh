import React, { useContext } from "react";
import "./DashSecTwo.scss";
import back from "../../assets/background.jpg";
import {Link} from 'react-router-dom'
import { LanguageContext } from "../language/Language";

const DashSecTwo = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div style={{ background: `url(${back}) bottom` }} id="sec-two-main">
      <div id="sec-two-cont">
        <div>
        
          <p> {dictionary.secTwoOne}
           <br></br> "{dictionary.secTwoTwo}"
          </p>
        </div>
        <div  id="sec-two-button">
          <Link to="/contact"><button>{dictionary.contact}</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default DashSecTwo;
