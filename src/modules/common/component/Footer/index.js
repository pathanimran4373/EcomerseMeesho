import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div class="footer">
      <div class="list">
        <h1>Shop Non-Stop on Meesho</h1>
        <p>
          Trusted by more than 1 Crore Indians <br />
          Cash on Delivery | Free Delivery
        </p>
      </div>

      <div class="list">
        <h1>Careers</h1> <br />
        <p>Become a supplier</p> 
        <p>Our Influencer program</p>
        <p>Hall of Fame</p>
      </div>

      <div class="list">
        <h1>Legal and Policies</h1> <br />
        <p>Meesho Tech Blog</p>
        <p>Notices and Returns</p>
      </div>

      <div class="list">
        <h1>Reach Out Us</h1> <br />
        <div className="icons">
          <span className="fc">
            <i className="fa-brands fa-square-facebook"></i>
          </span>
          <span className="inst">
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span className="twt">
            <i className="fa-brands fa-square-twitter"></i>
          </span>
          <span className="yt">
            <i className="fa-brands fa-youtube"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
