import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const MapText = () => (

      <div className="row">
        <div className="col-lg-6">
          <h2>Hawaii Welcomes You</h2>
          <p>There are six major islands to visit in Hawaii:</p>
          <ul>
            <li>Kauai</li>
            <li>Oahu</li>
            <li>Molokai</li>
            <li>Lanai</li>
            <li>Maui</li>
          </ul>
          <p>Let us be the first to say aloha and e komo mai (welcome) to The Hawaiian Islands. Before you make your journey to Hawaii, use the information featured in this section to plan your trip and make the most of your time here, from entry requirements and how to get around to weather conditions and resources for travelers with disabilities.</p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src={ require('../img/mapofhawaii.png')}alt="" />
        </div>
      </div>
    );

export default MapText;