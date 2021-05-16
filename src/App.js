import React from 'react';
import logo from './assets/img/logo1.png';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Whyus from './components/Whyus';
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title : 'Threads',
      caption : 'Illustration'
    },
    {
      title : 'Explore',
      caption : 'Graphic Design'
    },
    {
      title : 'Finish',
      caption : 'Identity'
    },
    {
      title : 'Lines',
      caption : 'Branding'
    },
    {
      title : 'Southwest',
      caption : 'Website Design'
    },
    {
      title : 'Window',
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
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={logo} style={{'display': 'inline-block'}} width="40" alt=""/>Hectaways Business Solutions</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation" id="menuButton" onClick={displayMenu}>
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive" onClick={hideMenuItem}>
        <ul className="navbar-nav text-uppercase mr-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#whyUs">Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
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
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Know More</a>
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
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Hectaways Business Solutions 2021</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;