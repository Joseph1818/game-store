import React from "react";
import "./AboutUs.scss";
import Navbar from "../components/navbar";
import DanImg from "./images/Dan_pic.jpg";

const About = () => {
  return (
    <div className="main__aboutUs">
      <Navbar />
      <div className="wrapper__aboutUs">
        <div className="aboutUs__img">
          <img className="about__img_img" src={DanImg} alt="" />
          <h4 className="aboutUs__img__h4">Dan Umba - CEO</h4>
        </div>
        <div className="aboutUs__Text">
          <h1 className="Text__h1">Notre Mission</h1>
          <p className="">
            Welcome to Console Kingdom! We are passionate about everything
            related to video games, speakers, and electronic accessories. Our
            vision is to create a kingdom where every tech enthusiast finds
            their happiness, whether they are gamers, audiophiles, or fans of
            innovative gadgets. We also offer a curated selection of speakers
            and electronic accessories to enhance your multimedia experience.
          </p>
          <p>
            {" "}
            At Console Kingdom, we believe that video games are more than just
            entertainment—they are a form of art, a way to connect with others,
            and a source of inspiration. We are committed to providing a wide
            range of games, consoles, and accessories to meet the needs of all
            players, from beginners to experts. But our kingdom doesn't stop at
            video games.
            <p>
              Whether you're looking for speakers to elevate your sound or
              high-tech gadgets to simplify your daily life, Console Kingdom is
              here to offer the best solutions. Our mission is simple: to
              provide high-quality products, exceptional customer service, and a
              unique shopping experience. We want every visit to Console Kingdom
              to be an exciting adventure where you discover new possibilities
              and find exactly what you are looking for.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
