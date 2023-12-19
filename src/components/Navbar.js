import React from "react";
import TourYourselfLogo from '../images/TourYourselfLogo.webp';
import '../stylesheets/Navbar.css'


function NavigationBar () {

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand" href="#home"><img src={TourYourselfLogo} alt="logo" className="LogoNav"/></a>
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="#home">Places <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news/news.html">Social Media</a>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;