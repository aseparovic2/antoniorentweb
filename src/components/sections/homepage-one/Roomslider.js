import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

import roomimg1 from '../../../assets/img/08.jpg';
import roomimg2 from '../../../assets/img/arkos1.jpg';
import roomimg3 from '../../../assets/img/10.jpg';
import roomimg4 from '../../../assets/img/adp.jpg';
import roomimg5 from '../../../assets/img/sea.jpg';

const roomimgPosts = [
  {
    photo: roomimg1,
  },
  {
    photo: roomimg2,
  },
  {
    photo: roomimg3,
  },
  {
    photo: roomimg4,
  },
  {
    photo: roomimg5,
  },
];

class Roomslider extends Component {
    constructor(props) {
    super(props);
    this.state = {
        nav1: null,
        nav2: null
    };
    }

    componentDidMount() {
    this.setState({
        nav1: this.slider1,
        nav2: this.slider2
    });
    }
  render() {
   
    return (
        <section className="room-slider">
        <div className="container-fluid p-0">
          <Slider className="row rooms-slider-one" asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          slidesToShow={3}
            slidesToScroll={1}
            fade={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={4000}
            arrows={false}
            dots={false}
            centerMode={true}
            centerPadding={'6%'}
            responsive={ [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '15%',
                    },
                },
            ]
          }
          >
            {roomimgPosts.map((item, i) => (
            <div key={i} className="col">
              <div className="slider-img" style={{backgroundImage: "url("+ item.photo + ")"}}>
              </div>
            </div>
            ))}
          </Slider>
        </div>
        
      </section>
    );
  }
}

export default Roomslider;
