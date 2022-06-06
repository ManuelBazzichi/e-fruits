import "./Navbar-Footer.css";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";

function Navbar({ cartItemsNumber, handleShow}) {
  const navigate = useNavigate();

  function handleLanding() {
    navigate("/");
  }
  return (
    <nav className="navbar d-flex flex-nowrap">
      <div className="container-fluid">
        <a className="navbar-brand" href=" # " onClick={handleLanding}>
          <img
            src={Logo}
            width={30}
            height={30}
            className="d-inline-block align-top mx-2"
            alt="Logo"
          />
          <span className="navbar-brand h1">E-Fruits</span>
        </a>
      </div>
      <div className="container-fluid justify-content-end">
        <a href=" # ">
          <img
            onClick={() => handleShow()}
            src={Cart}
            width={26}
            height={26}
            className="d-inline-block align-top me-4"
            alt="Logo"
          />
          <div className="cartNum">{cartItemsNumber}</div> 
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
