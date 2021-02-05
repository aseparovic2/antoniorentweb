import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class About extends Component {
  render() {
    return (
        <section className="about-section pt-115 pb-115">
        <div className="container">
          <div className="down-arrow-wrap text-center">
            <Link to="#" className="down-arrow"><i className="fal fa-arrow-down" /></Link>
          </div>
          <div className="section-title about-title text-center mb-20">
            <h2>Welcome to Antonio Rent - professional boat hiring service in Vela Luka at the island of Korčula</h2>
          </div>
          
        </div>
      </section>
    );
  }
}

export default About;
