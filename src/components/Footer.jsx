import React from "react";
import { Card } from "react-bootstrap";
import "../assets/footer.css";

function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          About <span>Diego Chavarría</span>
        </h3>

        <p class="footer-links">
          <a target="_blank" href="https://github.com/Dialcha">
            Github
          </a>
        </p>

        <p class="footer-company-name">© 2020 Diego Chavarría</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>Medellín - Colombia</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+57 3012928144</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:diego.chavarriap@gmail.com">
              diego.chavarriap@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the developer</span>
          Developer with knowledge of React, Redux, Angular, NodeJS, Java, SQL
          and PL / SQL
        </p>
        <div class="footer-icons">
          <a target="_blank" href="https://www.instagram.com/chdiego1/">
            <i class="fa fa-instagram"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/diegochavarriap">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
