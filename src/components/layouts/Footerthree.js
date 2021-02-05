import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_white.png'


class Footerthree extends Component {
  constructor(props) {
    super(props);
    this.state = {
       redText: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
          isTop: window.scrollY > 300
      });
  }, false);
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const className = this.state.isTop ? 'active' : '';
    return (
      <div>
        {/*====== Back to Top ======*/}
        <Link to="#" className={`back-to-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
          <i className="fal fa-angle-double-up" />
        </Link>
        {/*====== FOOTER START ======*/}
        <footer className="footer-two">
          <div className="footer-widget-area light-theme pt-100 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6 order-1">
                  {/* Site Info Widget */}
                  <div className="widget site-info-widget mb-50">
                    <div className="footer-logo mb-50">
                      <img src={logo} alt="" width='130' />
                    </div>
                    <p>
                      For any type of questions and requests feel free to contact us!
                    </p>
                    <div className="social-links mt-40">
                      <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      <Link to="#"><i className="fab fa-twitter" /></Link>
                      <Link to="#"><i className="fab fa-behance" /></Link>
                      <Link to="#"><i className="fab fa-linkedin" /></Link>
                      <Link to="#"><i className="fab fa-youtube" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-3 order-lg-2">
                  {/* Nav Widget */}
                  <div className="widget nav-widget mb-50">
                    <div>
                      <h4 className="widget-title"> Links</h4>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/offer/boats">Boat Rental</Link></li>
                        <li><Link to="/offer/trips">Boat Trips</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                  {/* Contact Widget */}
                  <div className="widget contact-widget mb-50">
                    <h4 className="widget-title">Contact Us.</h4>
                    <div className="contact-lists">
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-call" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Phone Number</h6>
                          +385 9969 64190
                        </div>
                      </div>
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-message" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Email Address</h6>
                          <Link to="#">antoniorentvelaluka@gmail.com</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== FOOTER END ======*/}
      </div>
    );
  }
}

export default Footerthree;
