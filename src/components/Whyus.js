import React from 'react';
const Whyus = () => {
    return(
        <section className="page-section" id="whyUs">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Why Choose Us</h2>
                <h3 className="section-subheading  oneliner">We believe in providing timely, reliable, efficient, and seamless accounting and consultancy solutions to our clients and helping them achieve their business goals.</h3>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                <span className="fa-stack fa-4x fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-handshake fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Professionalism</h4>
                <p className="text-muted">By combining our expertise, experience, and the energy of our staff, each client receives close personal and professional attention. We take special care to maintain constant communication and always respond promptly and professionally to our clients.</p>
                </div>
                <div className="col-md-4">
                <span className="fa-stack fa-4x fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Data Security</h4>
                <p className="text-muted">We guarantee a comprehensive range of protection and confidentiality of our client's data.  Privacy of individual client data will be respected in accordance with the laws and regulations.</p>
                </div>
                <div className="col-md-4">
                <span className="fa-stack fa-4x fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-rupee-sign fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Cost</h4>
                <p className="text-muted">In the emerging competitive world, all businesses must comply with applicable statutes at minimum cost. Abiding by this, We deliver timely, efficient, cost-effective services tailored to the specific needs of our clients. </p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Whyus;