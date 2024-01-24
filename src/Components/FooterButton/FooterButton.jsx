import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./footerButton.css";

const FooterButton = ({ link, val }) => {
  return (
    <>
      <Link target="_blank" rel="noopener noreferrer" to={link}>
        <button className="footer-button">{val}</button>
      </Link>
    </>
  );
};

FooterButton.propTypes = {
  link: PropTypes.string,
  val: PropTypes.string,
};

export default FooterButton;
