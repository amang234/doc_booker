import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
   <>
     <section className="hero">
      <div className="hero-content">
        <h1>
        Book your next
        <br/>
            healthcare<br/>
            appointment
        </h1>
        <p style={{
          color  : "#A97DEE"
        }}>
        Need a consultation regarding your treatment or diagnosis? I'm
           AIways ready to provide you with professional healthcare
        </p>
        <div className="btnCon">
        <button style={{
          color : "white",
          backgroundColor : "#7428EA",
          borderRadius : "25px",
          padding : "1rem",
          width : "10rem",
          fontWeight : "bold",
          marginTop : "2px",
          border : "none"
        }}>Meet our Specialist</button>
        <button style={{
          color : "white",
          backgroundColor : "#7428EA",
          borderRadius : "25px",
          padding : "1rem",
          fontWeight : "bold",
          margin : "2px",
          border : "none"
        }}> <FaArrowRight/> </button>
        </div>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
       
      </div>
      
    </section>
    
   </>
  );
};

export default Hero;
