import React from "react";
import { Container } from "react-bootstrap";
import "../Navbar/navbar.scss"
import { ImHome, ImCart } from 'react-icons/im';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <Container>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img src="data:image/jpeg;base64,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" width= '40'height= '40' className="logo" ></img>
            <a class="navbar-brand" href="#">
              Shopmandu
            </a>
          </div>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                <ImHome/> 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <ImCart/>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FaUserAlt/>
                </a>
              </li>
            </ul>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
