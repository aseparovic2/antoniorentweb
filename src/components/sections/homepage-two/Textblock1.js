import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'
import image from '../../../assets/img/vis.jpg';


class Textblock1 extends Component {
  render() {
    return (
        <section className="text-block pt-115 pb-115">
            <div className="container">
                <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
            <div className="row align-items-center justify-content-center">
                 <div className="col-lg-5 col-md-8 col-sm-10">
                <div className="block-text">
                    <div className="section-title mb-20">
                    <h2>Wide Range Of Trips</h2>
                    </div>
                    <p>
                    We also offer various day trips by boat. The place of departure is flexible (on the island of Korcula)
                     and some of the destinations are the island of Vis and the Blue Cave, the island of Lastovo,
                      the island of Hvar, etc.
                    </p>
                    <Link to="/offer/trips" className="main-btn btn-filled mt-40">Check Trips</Link>
                </div>
                </div> 
                <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                <div className="col-lg-7">
                <div className="text-img text-center text-lg-left mb-small">
                    <img src={image} alt="" />
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

export default Textblock1;
