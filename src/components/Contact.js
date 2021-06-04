import React, {Component} from 'react';
class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
      handleSubmit(e) {
        e.preventDefault()
        const { name, email, phone, message } = this.state
        let templateParams = {
          from_name: email,
          to_name: 'hectaways@outlook.com',
          phone: phone,
          message_html: message,
         }
        //  emailjs.send(
        //   'gmail',
        //   'template_XXXXXXXX',
        //    templateParams,
        //   'user_XXXXXXXXXXXXXXXXXXXX'
        //  )
         this.resetForm()
    }
    resetForm() {
        this.setState({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                            <p className="help-block text-danger" value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}></p>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}/>
                            <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." value={this.state.phone}
                            onChange={this.handleChange.bind(this, 'phone')}/>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}></textarea>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Contact;