import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footerthree from '../layouts/Footerthree';
import About from '../sections/homepage-one/About';
import Mainbanner from '../sections/homepage-two/Banner';
import Roomslider from '../sections/homepage-one/Roomslider';//komponenta sa slikama
import Textblock from '../sections/homepage-two/Textblock';
import Textblock1 from '../sections/homepage-two/Textblock1';

import Testimonial from '../sections/homepage-one/Testimonials';

class Hometwo extends Component {
  render() {
    return (
      <div>
        <Headerfour />
        <Mainbanner/>
        <About/>
        <Textblock/>
        <Textblock1/>
        <Testimonial/>
        <Footerthree />
      </div>
    );
  }
}

export default Hometwo;
