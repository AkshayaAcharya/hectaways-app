import React from 'react'
import Modal from './Modal';
class  Portfolio extends React.Component{
  constructor() {
    super();
    this.state = {
      show: false,
      contentTitle: ''
    };
    // this.showModal = this.showModal.bind(this);
    // this.setContent = this.setContent.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (title) => {
    this.setState({ show: true, contentTitle: title});
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  disableClose = () => {
    this.setState({ show: false });
  }


  render(){
    return (
      <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
          </div>
        </div>
        <div className="row pt-5">
        {
          this.props.portfolioLinks && this.props.portfolioLinks.map(({ title }, index) => 
              <div className="col-md-4 col-sm-6 portfolio-item portfolio-arrow" key={index} >
                  <div className="shadow portfolio-caption" onClick={()=>this.showModal(title)} >
                      <h4>{ title }</h4>
                      <p className="text-muted"><i className="fas fa-angle-double-down fa-1x fa-inverse portfolio-arrow" ></i></p>
                  </div>
              </div>
          )
        }
        </div>
      </div>
        <Modal show={this.state.show} handleClose={this.hideModal} contentTitle={this.state.contentTitle}>
        </Modal>
    </section>
  )
  }  
}

export default Portfolio;