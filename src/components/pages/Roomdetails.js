import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Headerfour from '../layouts/Headerfour';
import Footerthree from '../layouts/Footerthree';
import Roomsidebar from '../layouts/Roomsidebar';
import { Link } from 'react-router-dom';

import arkos from '../../assets/img/arkos1.jpg';
import arkos1 from '../../assets/img/arkos2.jpg';
import arkos2 from '../../assets/img/arkos3.jpg';
import saver from '../../assets/img/08.jpg';
import saver1 from '../../assets/img/10.jpg';
import saver3 from '../../assets/img/saver3.jpg';
import saver4 from '../../assets/img/saver4.jpg';
import saver5 from '../../assets/img/saver5.jpg';
import adp from '../../assets/img/adp.jpg';
import adp1 from '../../assets/img/1adp.jpg';
import passara from '../../assets/img/pasara4601.jpg';
import vis from '../../assets/img/vis.jpg';
import vis1 from '../../assets/img/vis1.jpg';
import vis2 from '../../assets/img/vis2.jpg';
import hvar from '../../assets/img/hvar.jpg';
import hvar1 from '../../assets/img/hvar1.jpg';
import hvar2 from '../../assets/img/hvar2.jpg';
import lastovo from '../../assets/img/lstovo.jpg';
import lastovo1 from '../../assets/img/lastovo1.jpg';
import lastovo2 from '../../assets/img/lastovo2.jpg';
import korčula from '../../assets/img/korčula.jpg';
import korčula1 from '../../assets/img/korčula1.jpg';
import korčula2 from '../../assets/img/korčula2.jpg';
import trip from '../../assets/img/trip.jpg'

class Roomdetails extends Component {

  data = [
    {
      title:"Arkos 647 sundeck",
      pictures:[
        {
          original: arkos,
          thumbnail: arkos,
        },
        {
          original: arkos1,
          thumbnail: arkos1,
        },
        {
          original: arkos2,
          thumbnail: arkos2,
        },
      ],
      description: "Arkos is a boat of exceptional maritime capabilities. It is 6.5 meters long and 2.2 meters wide with 150hp engine. Arkos can accommodate 8 to 9 people and its cruising speed is 25 mph.At the front there is a large attractive sunbathing platform while at the rear there is a step to go down to the sea. The boat is equipped with excellent equipment from which we single out the Garmin gps. The boat also contains a cabin where you can leave all your belongings or lie down. Certainly It is great for daily trips to islands Lastovo, Vis (Blue Cave), or Hvar, and for exploring the whole Korčula island.You can rent it with a skipper for an extra 60€/day or you can rent it bareboat if you have a valid license. With the boat, on request you can get water skies and a tube so you will be able to enjoy yourself to the fullest."
    },
    {
      title:"Saver 550 open",
      pictures:[
        {
          original: saver,
          thumbnail: saver,
        },
        {
          original: saver1,
          thumbnail: saver1,
        },
        {
          original: saver4,
          thumbnail: saver4,
        },
        {
          original: saver5,
          thumbnail: saver5,
        },
        {
          original: saver3,
          thumbnail: saver3,
        },
      ],
      description: "Saver 550 Open is a great boat for up to 6 people. The boat is 5.5 meters long and 1.7 meters wide so there is plenty of space in bow and aft sundecks for cruising and sunbathing. The engine is 115 hp and it is more than enough for this type of boat so you can easily reach any destination you desire. It is great for daily trips to islands Lastovo, Vis (Blue Cave), or Hvar, and for exploring the whole Korčula island.The boat has all the equipment you need on the sea.You can rent it with a skipper for an extra 60€/day or you can rent it bareboat if you have a valid license. With the boat, on request you can get water skies and a tube so you will be able to enjoy yourself to the fullest."
    },
    {
      title:"ADP Ris 500 PRO",
      pictures:[
        {
          original: adp,
          thumbnail: adp,
        },
        {
          original: adp1,
          thumbnail: adp1,
        },
        {
          original: adp,
          thumbnail: adp,
        }
      ],
      description: "ADP Ris 500 PRO is an excellent family rubber boat. It is very agile and fast and with its 115hp engine it reaches a speed of over 30mph. It is 5 meters long , 1.2 meters wide and can accomodate up to 8 people. It has all the necessary equipment from which we single out the garmin gps. ADP is a great choice for excursions around the island of Korcula or even for excursions to nearby islands.You can rent it with a skipper for an extra 60€/day or you can rent it bareboat if you have a valid license. With the boat, on request you can get water skies and a tube so you will be able to enjoy yourself to the fullest."
    },
    {
      title:"Passara",
      pictures:[
        {
          original: passara,
          thumbnail: passara,
        },
        {
          original: passara,
          thumbnail: passara,
        }
      ],
      description: "Pasara is an old traditional Dalmatian boat created for short excursions and true enjoyment of the sea. It is powered by a 5hp engine that can be operated by anyone, even people without a license. It is 5 meters long and 2 wide and has all the necessary equipment. This boat is a great choice to explore the bays around Vela Luka"
    },
    {
      title:"Vis & Modra špilja(Blue Cave)",
      pictures:[
        {
          original: vis,
          thumbnail: vis,
        },
        {
          original: vis1,
          thumbnail: vis1,
        },
        {
          original: vis2,
          thumbnail: vis2,
        },
        {
          original: trip,
          thumbnail: trip,
        }
      ],
      tripPlan: [
       ' 1) Departure from Korčula island with speedboat and driving to the island of Vis (1.5 h)',
                      '2)Arrival at Biševo and visit to the Blue Cave',
                     ' 3) Visit to the Komiža town (lunch)',
                      '4) Visit to stiniva bay',
                      '5) A visit to a Green Cave (on request)',
                     '6) Driving back to the island of Korčula'
      ],
      description: "A trip to the island of Vis is one of our most popular excursions. The trip starts early in the morning from the island of Korčula where you are departing by speedboat. It includes a visit to the island of Vis and the island of Biševo, home of the Blue Cave. The Blue Cave is a real natural phenomenon. Due to specific shapes during the day cave is colored in crystal clear blue color. Besides Blue Cave on this trip, you will visit Komiža town. One of the best places on the island of Vis. In the afternoon you will take a swim in Stiniva bay where you can find one of the best beaches in Croatia."
    },
    {
      title:"Lastovo & Lastovsko otočje",
      pictures:[
        {
          original: lastovo,
          thumbnail: lastovo,
        },
        {
          original: lastovo1,
          thumbnail: lastovo1,
        },
        {
          original: lastovo2,
          thumbnail: lastovo2,
        },
        {
          original: trip,
          thumbnail: trip,
        }
      ],
      description: "Trip to Lastovo island is a great place for nature and outdoor lovers. It offers numerous secluded bays where you can swim, sunbathe and snorkel, observe the underwater world and nature. The trip starts in the morning from Korčula island with the speedboat. When we reach Lastovo, a panoramic ride through the beautiful bays of the island of Lastovo follows.After that, you will get free time for swimming and diving in one of the bays. After swimming, we drive to a beautiful hidden harbor (Porto Rosso) where you can have lunch. In the afternoon you will have more time to explore the beauties of the island of Lastovo. Finally, after a wonderful day, we will return to Korčula island with a lot of good memories.",
      tripPlan: [
        ' 1) Departure from Korčula island with speedboat and driving to the island of Lastovo (1 h)',
                       '2)Arrival at Lastovo and panoramic view ride',
                      ' 3) Time for swimming and diving in one of the bays of Lastovo',
                       '4) Porto Rosso',
                       '5) Exploring more bays in Lastovo(national park,Zaklopatica bay,Ubli bay)',
                      '6) Driving back to the island of Korčula'
       ]
    },
    {
      title:"Hvar & Pakleni otoci",
      picture:hvar,
      tripPlan: [
        ' 1) Departure from Korčula island with speedboat and driving to the island of Hvar (1 h)',
                       '2)Arrival on Hvar and visit to the old town',
                      ' 3) Time for swimming and diving in one of the bays of Pakleni islands',
                       '4) Palmižana',
                       '5) Exploring the rest of the bays on the Pakleni islands with occasional bathing breaks',
                      '6) Driving back to the island of Korčula'
       ],
      description: "The island of Hvar is one of the most beautiful islands on the Dalmatian coast. It is the island that has the most sunny hours in Croatia. A trip to the island of Hvar includes a visit to Palmižana, Pakleni islands, and old town of Hvat itself.You will visit some of the most beautiful beaches on Hvar where you can enjoy, relax, swim or dive.This trip is very flexible due to the many sights that Hvar has to offer.So the program is created depending on the wishes of the group.However we are sure that trip to island Hvar will create some of the best memories you will have from Croatia",
      pictures:[
        {
          original: hvar,
          thumbnail: hvar,
        },
        {
          original: hvar1,
          thumbnail: hvar1,
        },
        {
          original: hvar2,
          thumbnail: hvar2,
        },
        {
          original: trip,
          thumbnail: trip,
        }
      ]
    },
    {
      title:"Korčula",
      picture:korčula,
      description: "A trip around the island of Korcula is a great choice for exploring our island by boat. You will explore all the small bays and islets of which there are many on Korcula.Travel includes a visit to the island of Proizd and various other attractions on Korcula. By arrangement with travelers we can organize a traditional Dalmatian lunch in a tavern on half of the island",
       pictures:[
        {
          original: korčula,
          thumbnail: korčula,
        },
        {
          original: korčula1,
          thumbnail: korčula1,
        },
        {
          original: korčula2,
          thumbnail: korčula2,
        },
        {
          original: trip,
          thumbnail: trip,
        }
      ],
      tripPlan: [
        ' 1) Departure from Vela Luka with speedboat and driving to the island of Proizd (15 min)',
                       '2) Free time on Proizd island',
                      ' 3) Driving from one side of the island of Korcula with occasional breaks for swimming and diving',
                       '4) Possibility of lunch or continued exploration of the bays of the island of Korcula',
                      '5) Driving back to the Vela Luka,island of Korčula or at your place-somewhere else on the island'
       ]
    }
  ]

  constructor(props){
    super(props) 
  
    this.state = {
      param: [],
      nav1: null,
    }
  }

  getData() {
    let lastQueryParam = window.location.href.split("/").pop();
    if(lastQueryParam === "arkos") {
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
        <Headerfour />
        {/*====== BREADCRUMB PART START ======*/}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-text">
              <span>antonio rent - vela luka</span>
              <h2 className="page-title">Details</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li className="active">{this.data[window.location.href.split("/").pop()].title}</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======
        

        */}
        {/*====== ROOM-DETAILS START ======*/}
        <section className="room-details pt-120 pb-90">
          <div className="container">
            <div className="row">
              {/* details */}
              <div className="col-lg-8">
                <div className="deatils-box">
                  <div className="title-wrap">
                    <div className="title">
                      <h2>{this.data[window.location.href.split("/").pop()].title}</h2>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src="assets/img/room/details.jpg" alt="" />
                  </div>
                  <p>
                  {this.data[window.location.href.split("/").pop()].description}
                  </p>
                { 
                window.location.href.split("/").pop() <= 3 ?
                ( <div className="room-fearures clearfix mt-60 mb-60">
                    <h3 className="subtitle">Equipment</h3>
                    <ul className="room-fearures-list">
                      <li><i className="fal fa-anchor" /> Anchor</li>
                      <li><i className="fal fa-grip-lines" />Additional ropes</li>
                      <li><i className="fal fa-grip-lines-vertical" />Paddles</li>
                      <li><i className="fal fa-swimming-pool" />Bathing ladder</li>
                      <li><i className="fal fa-umbrella-beach" />Bimini</li>
                      <li><i className="fal fa-sun" />Sundeck</li>
                      <li><i className="fal fa-first-aid" />Life jacket</li>
                      {
                        this.data[window.location.href.split("/").pop()].title !== "Passara" ? (
                          <React.Fragment>
                          <li><i className="fal fa-skiing" />Water skiis</li>
                          <li><i className="fal fa-circle" />Water tube</li>
                          <li><i className="fal fa-male" />Skipper available</li>
                          </React.Fragment>
                        ): ( '')
                      }

                      {

                       this.data[window.location.href.split("/").pop()].title !=="Saver 550 open" &&  this.data[window.location.href.split("/").pop()].title !=="Passara" ? (
                          <React.Fragment>
                          <li><i className="fal fa-compass" />GPS</li>
                          </React.Fragment>
                        ): ( '')

                      }
                      
                    </ul>
                  </div>) : 
                  (
                    <div className="room-fearures clearfix mt-60 mb-60">
                    <h3 className="subtitle">Trip plan:</h3>
                    <ul >
                      {/* <li>1) Departure from Korčula island with speedboat and driving to the island of Vis (1.5 h)</li>
                      <li>2) Arrival at Biševo and visit to the Blue Cave</li>
                      <li>3) Visit to the Komiža town (lunch)</li>
                      <li>4) Visit to stiniva bay</li>
                      <li>5) A visit to a Green Cave (on request)</li>
                      <li>6) Driving back to the island of Korčula</li> */}

                      {
                        this.data[window.location.href.split("/").pop()].tripPlan.map((item,index) => {
                          return(
                            <li>{item}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                    
                  )}
                  
                  <div className="room-rules clearfix mb-60">
                    <h3 className="subtitle">Gallery</h3>
                    <ImageGallery items={this.data[window.location.href.split("/").pop()].pictures} />;
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="col-lg-4">
                <Roomsidebar name = {this.data[window.location.href.split("/").pop()].title}/>
              </div>
            </div>
          </div>
        </section>
        {/*====== ROOM-DETAILS END ======*/}
        <Footerthree />
      </div>

    );
  }
}

export default Roomdetails;
