import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import appwrite from "../assets/appwrite.png";
const Footer = () => {
  return (
    <div
      style={{ marginBottom: 0 }}
      className="footer-copyright px-3 bg-dark  d-flex justify-content-between align-items-center"
    >
      <p className="pt-3">
        © 2021 Copyright: Quiz <br />
        <a
          href="https://www.instagram.com/shreyventure/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff" }}
        >
          <BsInstagram className="mx-2 social-icon" />
        </a>
        <a
          href="https://github.com/shreyventure"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff" }}
        >
          <BsGithub className="mx-2 social-icon" />
        </a>
        <a
          href="https://twitter.com/ShreyasShrawage"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff" }}
        >
          <BsTwitter className="mx-2 social-icon" />
        </a>
      </p>
      <a
        href="https://appwrite.io/"
        className="py-3"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="social-icon"
          src={appwrite}
          alt="AppWrite"
          width="120px"
        />
      </a>
    </div>
  );
};

export default Footer;
