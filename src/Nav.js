import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import pic from "./externals/Trickle_logo.png";
function Nav() {
  const [show, handleshow] = useState(false);

  // jha url pr rhoge uske aage profile page ka link ayega aur profile page open hoga
  // const history= useHistory(fal
  const navigate = useNavigate();

  const transtionNavbar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transtionNavbar);

    return () => window.removeEventListener("scroll", transtionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="Nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src={pic}
          width="20%"
          alt="Trickle Logo"
        />
      </div>
    </div>
  );
}

export default Nav;

// useHistory ke jgh useNavigate ho gya hai
