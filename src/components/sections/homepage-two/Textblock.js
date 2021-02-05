import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'
import image from '../../../assets/img/08.jpg';


class Textblock extends Component {
  render() {
    return (
        <section className="text-block pt-115 pb-115">
            <div className="container">
                <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-7">
                <div className="text-img text-center text-lg-left mb-small">
                    <img src={image} alt="" />
                </div>
                </div>
                <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                <div className="col-lg-5 col-md-8 col-sm-10">
                <div className="block-text">
                    <div className="section-title mb-20">
                    <h2>Wide Range Of Boats</h2>
                    </div>
                    <p>
                    In our offer we have boats for every taste. 
                    If you like speed and comfort then speedboats are what you need. 
                    If you are for slow rides and relaxation on calm seas then pasara is the right choice for you
                    </p>
                    <Link to="/offer/boats" className="main-btn btn-filled mt-40">Check Boats</Link>
                </div>
                </div>
                </ReactWOW>
            </div>
            </ReactWOW>
            </div>
        </section>
        
    );
  }
}

export default Textblock;
