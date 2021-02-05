import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footerthree from '../layouts/Footerthree';
import * as emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

class Contact extends Component {

   constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
      contact: '',
      reason: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)



  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  resetForm =() => {
    this.setState({
      fullname: '',
      email: '',
      contact: '',
      reason: '',
      message: ''})
   }

  handleSubmit = (event) => {

    
    event.preventDefault()


    let templateParams = {
      from_name: event.target.email.value,
      to_name: 'antoniorentvelaluka@gmail.com',
      service: event.target.reason.value,
      name: event.target.fullname.value,
      contactNumber: event.target.contact.value,
      message: event.target.message.value,
     }
     console.log(templateParams)

     emailjs.send(
      'service_jikcswn',
      'template_kjq8gxq',
       templateParams,
      'user_FUzrs6nJUyxgxBXR651rZ'
     )
     this.resetForm()
     alert("Your request is sent succeessfuly. We will contact you as soon as possible.")
    
  }
  render() {
    return (
      <div>
        <Headerfour />
        {/*====== BREADCRUMB PART START ======*/}
        <section className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/04.jpg)'}}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>antonio rent - vela luka</span>
              <h2 className="page-title">Contact us</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== CONTACT PART START ======*/}
        <section className="contact-part pt-115 pb-115">
          <div className="container">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="row justify-content-center">
                
                <div className="col-lg-4 col-sm-6 col-10">
                  <div className="info-box">
                    <div className="icon">
                      <i className="flaticon-phone" />
                    </div>
                    <div className="desc">
                      <h4>Phone Number</h4>
                      <p>+ 385 996964190 </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-10">
                  <div className="info-box">
                    <div className="icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="desc">
                      <h4>Email Address</h4>
                      <p>antoniorentvelaluka@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Mapts */}
            <div className="contact-maps mb-30">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.6267594194073!2d16.71373281573804!3d42.96506927915089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a71da17ccfcb7%3A0xedf60476bbdaa08a!2sObala%202%2C%2020270%2C%20Vela%20Luka!5e0!3m2!1shr!2shr!4v1612535660625!5m2!1shr!2shr" width="600" height="450" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-user" /></span>
                      <input required type="text" placeholder="Your full name" name="fullname" id="fullname" value={this.state.fullname} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-envelope" /></span>
                      <input required type="email" placeholder="Enter email address" name="email" id="email"  value={this.state.email} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-phone" /></span>
                      <input type="text" placeholder="Add phone number"  name="contact" id="contact" value={this.state.contact} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-book" /></span>
                      <input required type="text" placeholder="Add reason of contact" name="reason" id="reason" value={this.state.reason} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group textarea mb-30">
                      <span className="icon"><i className="far fa-pen" /></span>
                      <textarea type="text" placeholder="Enter messages" defaultValue={""} name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="main-btn btn-filled">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*====== CONTACT PART END ======*/}
        <Footerthree />
      </div>

    );
  }
}

export default Contact;
