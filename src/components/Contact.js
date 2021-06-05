import React from 'react';

const About = () => {
    return(
        <div>
            <section className="page-section" id="contact">
                <div className="container">
                {/* <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About Us</h2>
                    <h3 className="section-subheading oneliner">Hectaways Business Solutions - our expertise at your service. </h3>
                    <h4 className="section-subheading">We are more than an accounting and consultancy firm. </h4>
                    </div>
                </div> */}
                {/* <div className="row"> */}
                    <div className="col-md-12 mt-5">
                        <div className="card shadow-lg ">
                        <div className="card-body ">
                            <h5 className="card-title">Contact Us</h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <div className="card-text">
                             <p><i className="fas fa-map-marker-alt fa-1x"></i> #2-316, Veera Bhavan, Jai Jawan Road, Adiudupi - 576103, Udupi, Karnataka </p>
                             <p><i className="fas fa-envelope fa-1x m-2"></i>hectaways@outlook.com </p>
                             <p> <i className="fas fa-phone-alt fa-1x m-2"></i>+919480465486, +919482540295, +919481648997, +917259654657  </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </div>
    );
}

export default About;