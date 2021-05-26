import React from 'react';
import leader from '../assets/img/leader.png';
import lead4 from '../assets/img/lead4.png';
import lead2 from '../assets/img/lead2.png';
import lead3 from '../assets/img/lead3.png';
const Team = () => {
    return( 
        <section className="bg-light page-section" id="team">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 className="section-subheading oneliner">We're a growing team of accounting experts and thought leaders — full of personality, work ethics dedicated to enhancing our clients' business performances.</h3>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="team-member">
                <img className="mx-auto rounded-circle" src={leader} alt=""/>
                <h4>Karthik</h4>
                {/* <p className="text-muted">Lead Designer</p> */}
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
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="team-member">
                <img className="mx-auto rounded-circle" src={lead2} alt=""/>
                <h4>Hithesh</h4>
                {/* <p className="text-muted">Lead Marketer</p> */}
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
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="team-member">
                <img className="mx-auto rounded-circle" src={lead4} alt=""/>
                <h4>Rakshith</h4>
                {/* <p className="text-muted">Lead Marketer</p> */}
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
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="team-member">
                <img className="mx-auto rounded-circle" src={lead3} alt=""/>
                <h4>Abhishek</h4>
                {/* <p className="text-muted">Lead Developer</p> */}
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
            </div>
            </div>
            {/* <div className="row">
            <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">Few sentences here </p>
            </div>
            </div> */}
        </div>
        </section>
    );
}

export default Team;