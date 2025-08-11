import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { GiAllSeeingEye } from "react-icons/gi";
import "./Home.css";

const Footer = () => {
  return (
    <footer>
      <section className="ftag">
        <p>We change the Universe</p>
      </section>

      <section className="network">
        <p>Join our Network</p>
        <section>
          <FaInstagram class="icons instagram" />
          <FaXTwitter class="icons twitter" />
          <AiOutlineDiscord class="icons discord" />
          <GiAllSeeingEye class="icons  eye" />
        </section>
      </section>
    </footer>
  );
};

export default Footer;
