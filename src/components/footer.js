import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerContainer">
          <div className="scialIcons">
            <a href="">
              <i class="gg-facebook"></i>
            </a>
            <a href="">
              <i class="gg-instagram"></i>
            </a>
            <a href="">
              <i class="gg-twitter"></i>
            </a>
            <a href="">
              <i class="gg-mail"></i>
            </a>
            <a href="">
              <i class="gg-youtube"></i>
            </a>
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <a href="">Acceuil</a>
              </li>
              <li>
                <a href="">Playstation</a>
              </li>
              <li>
                <a href="">Xbox</a>
              </li>
              <li>
                <a href="">Autres Accesoirs</a>
              </li>
              <li>
                <a href="">À propos de nous</a>
              </li>
              <li>
                <a href="">Contactez-nous</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            &copy; {new Date().getFullYear()} Console kingdom Allr rights
            reserved. Powered by
            <span className="designer"> Umba J</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
