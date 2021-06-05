import React from 'react';
import logo from './assets/img/logo3.png';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Whyus from './components/Whyus';
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title : 'Income Tax',
      caption : 'Illustration'
    },
    {
      title : 'GST',
      caption : 'Graphic Design'
    },
    {
      title : 'Accounting & Book Keeping',
      caption : 'Identity'
    },
    {
      title : 'Payroll Management',
      caption : 'Branding'
    },
    {
      title : 'Statutory Compliance',
      caption : 'Website Design'
    },
    {
      title : 'Management Consultancy',
      caption : 'Photography'
    }
  ]
  function displayMenu(e) {
    document.getElementById("navbarResponsive").classList.toggle("show");
  }
  function hideMenuItem(){
    document.getElementById("navbarResponsive").classList.toggle("show");
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={logo} style={{'display': 'inline-block'}}  alt=""/>Hectaways Business Solutions</a>
      <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation" id="menuButton" onClick={displayMenu}>
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive" onClick={hideMenuItem}>
        <ul className="navbar-nav text-uppercase m-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#whyUs">Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To </div>
        <div className="intro-heading">Hectaways Business Solutions</div>
        <div className="intro-tagline-heading">Our Expertise at your Service</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#whyUs">Know More</a>
      </div>
    </div>
  </header>
  <Whyus />
  <Portfolio portfolioLinks={portfolioLinks}/>
  <About  />
  <Team />
  <Contact />
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <span className="copyright text-center">Copyright &copy; Hectaways Business Solutions 2021</span>
        </div>
        {/* <div className="col-md-4"> */}
          {/* <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul> */}
        </div>
        {/* <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  </footer>
    </div>
  );
}

export default App;
