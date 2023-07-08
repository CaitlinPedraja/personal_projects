import React from "react";
import git from '../images/github.png'
import link from "../images/linkedin.png"
export const Contact = () => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  };
  return (
    <>
     <div className="contact_container">
      <div className="about_box">
        <h1>Contact Us</h1>
        
        <div className="button_container">
        <button
        id="git-image"
        role="link"
        onClick={ () => openNewTab("https://github.com/CaitlinPedraja")}
       >
           <img src={git}  />
        </button>
        <button
        role="link"
        onClick={ () => openNewTab("https://www.linkedin.com/in/caitlin-pedraja")}>
         <img src={link}  />
        </button>
        </div>
    </div>
    </div>
    </>
  );
};