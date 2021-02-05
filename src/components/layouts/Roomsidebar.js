import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Roomsidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      name: '',
      email: '',
      contact: 0,
      service: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)



  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  resetForm =() => {
    this.setState({
      date: '',
      name: '',
      email: '',
      phone: 0,
      service: '',
      message: ''})
   }

  handleSubmit = (event) => {
    event.preventDefault()


    let templateParams = {
      from_name: event.target.email.value,
      to_name: 'antoniorentvelaluka@gmail.com',
      date: event.target.date.value,
      service: this.props.name,
      name: event.target.name.value,
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
      <div className="room-booking-form">
        <h5 className="title">Check Availability</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="date">Date</label>
            <input required type="date" placeholder="20-6-2020" name="date" id="date" value={this.state.date} onChange={this.handleChange}/>
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="name">Name</label>
            <input required type="text" placeholder="Please enter your name" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="Email">Email</label>
            <input required type="email" placeholder="Please enter your email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="contact">Phone Number</label>
            <input  type="number" placeholder="Please enter your number" name="contact" id="contact" value={this.state.contact} onChange={this.handleChange}/>
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="service">Service</label>
            <input disabled type="text" placeholder={this.props.name} name="service" id="service"/>
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="message">Message</label>
            <input  type="textarea" placeholder="" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
          </div>
          
          <div className="input-group">
            <button type="submit" className="main-btn btn-filled">check availability</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Roomsidebar;
