import React, { Component } from 'react';
import Slider from "react-slick";

import tesimg1 from '../../../assets/img/avatar.jpg';


const testimonialPosts = [
  {
    photo: tesimg1,
    name: 'Aida Benghazi',
    desc: 'The boat is very well maintained, we had a great experience. Antonio was very responsive and available for any question and flexible on the rental period. We had a good price and offers great value. We will rent again for sure.',
  },
  {
    photo: tesimg1,
    name: 'Markus Forman',
    desc: 'We have had the boat for the second year and are always very satisfied!Its the right boat for having fun, you can easily pull two tubes or water skis!So the boat is only to be recommended!',
  },
  {
    photo: tesimg1,
    name: 'Franck Dumble',
    desc: 'My family and I took a trip to the blue cave. The speedboat picked us up just below our house and we spent an unforgettable day. I definitely recommend Antonio and especially this trip',
  },
  {
    photo: tesimg1,
    name: 'Donald Geller',
    desc: 'We took a speedboat and were driving around the island of Korcula. The boat is professionally equipped and we really enjoyed the sea.',
  },
];
class Testmonials extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };
    return (
      <section className="testimonial-section pb-115 pt-115">
          <div className="container">
            <div className="section-title text-center mb-80">
              <span className="title-tag">testimonials</span>
              <h2>Client Feedback</h2>
            </div>
            {/* testimonials loop  */}
            <Slider className="row testimonial-slider" {...settings}>
            {testimonialPosts.map((item, i) => (
              <div key={i} className="col-lg-12">
                <div className="testimonial-box">
                  <div className="client-img">
                    <img src={item.photo} alt="" />
                    <span className="check"><i className="fal fa-check" /></span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>
                  {item.desc}
                  </p>
                </div>
              </div>
              ))}
            </Slider>
          </div>
        </section>
    );
  }
}

export default Testmonials;
