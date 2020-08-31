import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Reserve = () => (

<div>
  <h1 className="mt-4 mb-3">Hotels Reservations</h1>
    <img className="img-fluid rounded mb-4" src={ require('../img/royalhawaiianheader.jpg')} alt="" />
      <div className="row">
        <div className="col-lg-4 mb-4">  
          <div className="card h-100">
            <h4 className="card-header">THE ROYAL HAWAIIAN</h4>
              <img className="card-img-top" src={ require('../img/RoyalHawaiianCard.jpg')} alt="Card image" />
                <div className="card-body">
                <p className="card-text">The royal Hawaiian, a luxury collection resort will keep you entertained &amp; immersed in a cultural adventure throughout your stay.</p>
                </div>
                <div className="card-footer">
                <center><a href="#" className="btn btn-primary">Reserve Now</a></center>
                </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">  
          <div className="card h-100">
            <h4 className="card-header">THE SHERATON WAIKIKI</h4>
            <img className="card-img-top" src={ require('../img/sharaton.jpg')} alt="Card image" />
            <div className="card-body">
              <p className="card-text">Book your next tropical island getaway at Sheraton Waikiki to experience stylishly-designed hotel accommodations and spacious oceanfront rooms in Hawaii.</p>
            </div>
            <div className="card-footer">
              <center><a href="#" className="btn btn-primary">Reserve Now</a></center>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">  
          <div className="card h-100">
            <h4 className="card-header">MOANA SURFRIDER</h4>
            <img className="card-img-top" src={ require('../img/moanasurf.jpg')} alt="Card image" />
            <div className="card-body">
              <p className="card-text">Book your stay at Moana Surfrider, A Westin Resort &amp; Spa, Waikiki Beach to benefit from elegant hotel rooms and a stellar beachfront location in Honolulu.</p>
            </div>
            <div className="card-footer">
              <center><a href="#" className="btn btn-primary">Reserve Now</a></center>
            </div>
          </div>
        </div>
      </div>
</div>
     
    );
    export default Reserve;