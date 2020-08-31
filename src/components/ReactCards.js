import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cards.css'
import {Grande, LuauDancers, News, Shopping, VacationSuitcase, Resturants} from '../img';

const MyCards = () => {
  const cardInfo = [
    {
      image: VacationSuitcase,
      title: "Plan Your Trip!",
      text: "Keep up to date with new destination and product developments that will help you book inspired vacations for your clients!",
      url: "#"
    },
    {
      image: News,
      title: "Hawaii News",
      text: "Click here for breaking news, severe weather forecasts and traffic updates.",
      url: "#"
    },
    {
      image: Grande,
      title: "Local Gifts",
      text: "Whether you’re looking for Hawaiian-made handicrafts to remember your trip by or high-end fashion labels you can’t find at home, Honolulu is a shopper’s paradise; you may even want to pack an extra suitcase for all the treasures you’ll find.",
      url: "#"
    },
    {
      image: LuauDancers,
      title: "Local Activities",
      text: "We believe that every visitor to Hawaii should experience our unique paradise and spirit of aloha, and as we connect you to 795 local tours and activities, you will support our island community while enjoying the best Hawaii has to offer.",
      url: "#"
    },
    {
      image: Resturants,
      title: "Resturants",
      text: "From traditional Hawaiian cuisine to refined New American fare and a variety of Asian cuisines, the choices are as vast as the landscape. No matter where you eat, a cup of locally grown coffee is the perfect way to finish off any meal on the island of Hawaii.",
      url: "#"
    },
    {
      image: Shopping,
      title: "Shopping",
      text: "If a little retail therapy is on your vacation to-do list, Oahu’s diverse shopping centers have you covered. There’s something for everyone and every budget, whether you’re looking to splurge on luxury goods, need locally made souvenirs for family and friends back home or you’re a bargain shopper on the hunt.",
      url: "#"
    }
  ];
  
  const renderCard = (card, index) => {
    return (
      
      
      <Card style={{width: '21rem', padding: '5px' }} key={index} className="box">
        <Link to={card.url}>
          <Card.Img variant="top" src={card.image} />
        </Link>
        <Card.Body>
          <Link to={card.url}>
            <Card.Title>{card.title}</Card.Title>
          </Link>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
}

export default MyCards;