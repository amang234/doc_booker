import React from "react";
import image from "../images/aboutimg.jpg";

import Rated from "../images/rated.png"
const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Our project aims to revolutionize the way patients interact with healthcare providers by introducing an intuitive and user-friendly doctor's dashboard. Designed with both patients and healthcare institutions in mind, our platform streamlines the process of scheduling appointments, ensuring that patients can easily find and book time with the right healthcare professionals based on real-time availability. Behind the scenes, we empower hospitals and clinics to efficiently manage and share doctors' schedules, making healthcare more accessible and transparent. Our commitment to enhancing the patient-care provider relationship is at the heart of everything we do, and we are dedicated to continuously improving and expanding our services to meet the evolving needs of our community.
            </p>
          </div>
        </div>
      </section>
      <div style={{
        margin: "auto",
        marginTop: "20px",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        <img
          src={Rated}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
        />
      </div>

    </>
  );
};

export default AboutUs;
