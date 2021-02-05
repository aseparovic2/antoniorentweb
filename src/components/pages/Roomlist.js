import React, { Component } from 'react'
import Header from '../layouts/Headerfour';
import Footerthree from '../layouts/Footerthree';
import { Link } from 'react-router-dom';

import arkos from '../../assets/img/arkos1.jpg';
import saver from '../../assets/img/08.jpg';
import adp from '../../assets/img/adp.jpg';
import passara from '../../assets/img/pasara4601.jpg';
import vis from '../../assets/img/vis.jpg';
import hvar from '../../assets/img/hvar.jpg';
import lastovo from '../../assets/img/lstovo.jpg';
import korčula from '../../assets/img/korčula.jpg';



class Roomlist extends Component {

   roomlistPosts = [
    [
      {
        photo: arkos,
        title: 'Arkos 647 sundeck',
        url: '/details/boats/0',
        btn: 'More details',
        desc: 'Arkos is a boat of exceptional maritime capabilities. It is 6.5 meters long and 2.2 meters wide with 150hp engine. Arkos can accommodate 8 to 9 people and its cruising speed is 25 mph',
    },
    {
        photo: saver,
        title: 'Saver 550 open ',
        url: '/details/1',
        btn: 'More details',
        desc: 'Saver 550 Open is a great boat for up to 6 people. The boat is 5.5 meters long and 1.7 meters wide so there is plenty of space in bow and aft sundecks for cruising and sunbathing. The engine is 115 hp',
    },
    {
      photo: adp,
      title: 'ADP Ris 500 PRO',
      url: '/details/2',
      btn: 'More details',
      desc: 'ADP Ris 500 PRO is an excellent family rubber boat. It is very agile and fast and with its 115hp engine it reaches a speed of over 30mph. It is 5 meters long , 1.2 meters wide and can accomodate up to 8 people.',
    },
    {
      photo: passara,
      title: 'Passara',
      url: '/details/3',
      btn: 'More details',
      desc: 'Pasara is an old traditional Dalmatian boat created for short excursions and true enjoyment of the sea. It is powered by a 5hp engine that can be operated by anyone, even people without a license.',
    },
   ],[
      {
        photo: vis,
        title: 'Vis & Modra špilja(Blue Cave)',
        url: '/details/4',
        btn: 'More details',
        desc: 'A trip to the island of Vis is one of our most popular excursions. The trip includes a visit to the natural phenomenon of the Blue Cave, the town of Komiža, Stiniva bay and much more ',
    },
    {
        photo: lastovo,
        title: 'Lastovo & Lastovsko otočje',
        url: '/details/5',
        btn: 'More details',
        desc: 'Trip to Lastovo island is a great place for nature and outdoor lovers. It offers numerous secluded bays where you can swim, sunbathe and snorkel, observe the underwater world and nature.',
    },
    {
      photo: hvar,
      title: 'Hvar & Pakleni otoci',
      url: '/details/6',
      btn: 'More details',
      desc: 'The island of Hvar is one of the most beautiful islands on the Dalmatian coast. It is the island that has the most sunny hours in Croatia. A trip to the island of Hvar includes a visit to Palmižana, Pakleni islands, and old town of Hvat itself.',
  },
  {
    photo: korčula,
    title: 'Korčula',
    url: '/details/7',
    btn: 'More details',
    desc: 'A trip around the island of Korcula is a great choice for exploring our island by boat. You will explore all the small bays and islets of which there are many on Korcula.',
}
    ]
  ];
  

  constructor(props){
    super(props) 
  
    this.state = {
      data: [],
      index: 0,
      title: "",
      nav1: null,
    }


  }

  getData() {
    let lastQueryParam = window.location.href.split("/").pop();
    if(lastQueryParam === "boats") {
      this.setState({
           index:0,
           title: "Boat Rental"
         })
    }else {
      this.setState({
        index:1,
        title: "Boat Trips"
      })
    }
   
     
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps,prevState) {
    const locationChanged =  this.props.location ;
    if(locationChanged !== prevProps.location) this.getData()
  // INCORRECT, will *always* be false because history is mutable.
  
  }
  render() {
    return (
      <div>
        <Header/>
        {/*====== BREADCRUMB PART START ======*/}
        <section  className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/04.jpg)'}}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>Antonio rent - vela luka</span>
              <h2 className="page-title">{this.state.title}</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li className="active">{this.state.title}</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== ROOM-LIST START ======*/}
        <section className="room-section room-list-style pt-120 pb-120">
          <div className="container">
            <div className="room-list-loop">
            {this.roomlistPosts[this.state.index].map((item, i) => (
              <div key={i} className="room-box mb-30">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-5 col-md-10">
                    <div className="room-img-wrap">
                      <div className="room-img" style={{backgroundImage: "url("+ item.photo + ")"}} />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-10">
                    <div className="room-desc">
                      <div className="row align-items-center">
                        <div className="col-sm-8">
                          <ul className="icons">
                              <li><i className="fal fa-anchor" /> </li>
                              <li><i className="fal fa-grip-lines-vertical" /></li>
                              <li><i className="fal fa-swimming-pool" /></li>
                              <li><i className="fal fa-umbrella-beach" /></li>
                              <li><i className="fal fa-sun" /></li>
                              <li><i className="fal fa-male" /></li>
                          </ul>
                          <h4 className="title"><Link to={item.url}>{item.title}</Link></h4>
                          <p>
                          {item.desc}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <div className="text-sm-center">
                            <Link to={item.url} className="book-btn">{item.btn}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            </div>
          </div>
        </section>
        {/*====== ROOM-LIST END ======*/}
        <Footerthree />
      </div>

    );
  }
}

export default Roomlist;
