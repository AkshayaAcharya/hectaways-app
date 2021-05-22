import React from 'react';
const About = () => {
    return(
        <div>
            <section className="page-section" id="about">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted"><span style={{'color':'red'}}>Suggest one line sentence here if can be added</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                        <div className="timeline-image">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-users fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4>Need a heading here for the description below: Section describes why this start up</h4>
                            </div>
                            <div className="timeline-body">
                            <p className="text-muted">Our firm Hectaways Business Solutions is located at Udupi. Our team comprises young and experienced professionals who are adept at providing wide range of services. Our area of expertise includes both traditional services as well as modern IT enabled services. <span style={{color: 'red'}}>Contents are  added here, please go through it mam suggest us for modification</span></p>
                            </div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-image">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-building fa-stack-1x fa-inverse"></i>
                            </span>                        </div>
                        <div className="timeline-panel">
                            {/* <div className="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 className="subheading">An Agency is Born</h4>
                            </div> */}
                            <div className="timeline-body">
                            <p className="text-muted">
                             <p><i class="fas fa-map-marker-alt fa-1x"></i> Veera Bhavan, Jai Jawan Road, Adiudupi - 576106, Udupi, Karnataka</p>
                             <p><i class="fas fa-envelope fa-1x"></i> hectaways@gmail.com</p>
                             <p><i class="fas fa-phone-alt fa-1x"></i> 1234567890</p>
                             <p><i class="fab fa-whatsapp fa-1x"></i> 1234567890</p>
                            </p>
                            </div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-image">
                            <span className="fa-stack fa-4x">
                                <i className="far fa-thumbs-up fa-stack-1x fa-inverse"></i>
                            </span> 
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>

        </div>
    );
}

export default About;