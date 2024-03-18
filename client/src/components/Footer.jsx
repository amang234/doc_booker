import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Logo from  "../images/logof.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
        <div className="social">
       
       <img src= {Logo} alt="logo" 
            style={{
              height :"54px",
              width : "120px"
            }}
          />
    
         <div>
         <h3>Social links</h3>
          <ul>
            <li className="facebook" 
                           
            > 
              <a
                href="https://www.facebook.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="youtube">
              <a
                href="https://www.youtube.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
         </div>
        </div>
          <div className="footer-links">
            <h3>Departments</h3>
            <ul>
              <li>
                <NavLink to={"#"}>Eye Care</NavLink>
              </li>
              <li>
                <NavLink to={"#"}>Skin</NavLink>
              </li>
              <li>
                <NavLink to={"#"}>Pathology</NavLink>
              </li>
              <li>
                <NavLink to={"#"}>Dental</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <NavLink to={"#"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>

            </ul>
          </div>
      
        </div>
        <div className="footer-bottom">
        © DocBook 2024. All rights reserved 
        </div>
      </footer>
    </>
  );
};

export default Footer;
