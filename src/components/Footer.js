import appwrite from "../assets/appwrite.png";
const Footer = () => {
  return (
    <div class="footer-copyright px-3 bg-dark fixed-bottom d-flex justify-content-between align-items-center">
      <p className="pt-3">© 2021 Copyright: Quiz</p>
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
