import React from 'react';

const About = () => {
    return(
        <div>
            <section className="page-section" id="about">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About Us</h2>
                    <h3 className="section-subheading oneliner">Hectaways Business Solutions - our expertise at your service. </h3>
                    <h4 className="section-subheading">We are more than an accounting and consultancy firm. </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg ">
                        <div className="card-body ">
                            <h5 className="card-title">Our Story</h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p className="card-text">Hectaways Business Solutions is an accounting and consultancy firm offering a full spectrum of accounting, auditing, and tax service with its headquarters in the temple city Udupi, Karnataka. </p>
                            <p className="card-text">Our team comprises young, energetic, experienced professionals who provide a wide range of services, including taxation, GST returns, accounting, bookkeeping, payroll management, and management consultancy to corporate houses, owner-managed firms, trusts, societies, and individuals. We expertise in both traditional services and modern tech-enabled services. </p>
                            <p className="card-text">Our firm is structured to ensure that each client receives personal, one-on-one attention from our professionals. We seek to enhance the business performances of our clients. </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="card shadow-lg ">
                        <div className="card-body ">
                            <h5 className="card-title">Connect Us</h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <div className="card-text">
                             <p><i className="fas fa-map-marker-alt fa-1x"></i> #2-316, Veera Bhavan, Jai Jawan Road, Adiudupi - 576103, Udupi, Karnataka </p>
                             <p><i className="fas fa-envelope fa-1x m-2"></i>hectaways@gmail.com 
                              <i className="fas fa-phone-alt fa-1x m-2"></i>1234567890 
                             <i className="fab fa-whatsapp fa-1x m-2"></i>1234567890 </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default About;