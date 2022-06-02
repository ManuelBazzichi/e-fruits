import "./Navbar-Footer.css";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";

function Navbar() {
  return (
    <nav className="navbar d-flex flex-nowrap">
      <div className="container-fluid">
        <a className="navbar-brand" href=" # ">
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
            src={Cart}
            width={26}
            height={26}
            className="d-inline-block align-top me-4"
            alt="Logo"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;