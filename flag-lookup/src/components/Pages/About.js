import React from "react";
import React_icon from '../React-icon.png';
import css from '../css.png';
import api from '../api.png';

export const About = () => {

  const images = [
    { src: React_icon, alt: 'React-icon' },
    { src: css, alt: 'css' },
    { src: api, alt: 'api' }
  ];

  return (
    <div className="about_container">
      <div className="about_box">
        <h1>Flags of the World</h1>
        <p>
          Easily search for and sort through flags of any country generated from
          REST API.{" "}
        </p>

        {images.map((image, index) => (
        <div className="image_box" key={index}>
          <img src={image.src} alt={image.alt} className="image" />
        </div>
      ))}
      </div>
    </div>
  );
};
