import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import SearchBar from "../searchbar/SearchBar";
import Dropdown from "./Dropdown";

function Navbar({ results, setResults, chosenDrink, setChosenDrink, chosenDrinkId, setChosenDrinkId }) {


  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  const onMouseEnter = () => {
      if(window.innerWidth < 960) {
          setDropdown(false);
      } else {
          setDropdown(true);
      }
  }


  const onMouseLeave = () => {
      if(window.innerWidth < 960) {
          setDropdown(false);
      } else {
          setDropdown(false);
      }
  }


  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <Link 
        to="/" 
        className="navbar-logo" 
        onClick={closeMobileMenu}>
          RyGX

          <i className="fas fa-podcast" />
        </Link>
      </div>

      <SearchBar
        results={results}
        setResults={setResults}
        chosenDrink={chosenDrink}
        setChosenDrink={setChosenDrink}
        chosenDrinkId={chosenDrinkId}
        setChosenDrinkId={setChosenDrinkId}
      />

      <div className="menu-icon" onClick={handleClick}>
        <i className="fas fa-bars" />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li> */}

        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link 
          to="/services" 
          className="nav-links" 
          onClick={closeMobileMenu}>
            Services
            <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>

        {/* <li className="nav-item">
          <Link 
          to="/marketing" 
          className="nav-links" 
          onClick={closeMobileMenu}>
            Marketing
          </Link>
        </li> */}

        <li className="nav-item">
          <Link 
          to="/products" 
          className="nav-links" 
          onClick={closeMobileMenu}>
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contact-us"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact us
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
