import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function AccMenu() {
  return (
    <div>
        <h1 className="mt-4 mb-3">HAWAII FREQUENTLY ASKED QUESTIONS
        </h1>
    <div className="AccMenu">

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            What is the time difference from the continental US?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hawaii follows Hawaii Standard Time (GMT-10 hours). 
              Since Hawaii does not observe Daylight Savings Time, during the majority of the year (March-November), Hawaii is six (6) hours behind Eastern Standard Time and three (3) hours behind Pacific Standard Time. 
              During non-DST months Hawaii is five and two hours behind each respective time zone.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            How do I get from one island to another?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>There are three carriers offering Hawaii interisland flights. 
              They are Hawaiian Airlines, Island Air and Molukele Airlines. 
              Each offers numerous daily flights and all service the largest islands of Oahu, Maui, Kauai and the Big Island of Hawaii. 
              Hawaiian and Mokulele offer service to the smaller islands of Molokai and Lanai. 
              Except for service between Maui, Molokai and Lanai, there is no passenger ferry service between the islands.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            What languages are spoken in Hawaii?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hawaii’s official language is both English and Hawaiian, but English is the most common. 
              Other languages such as Chinese, Japanese, and Portuguese, are often spoken too. 
              Here are some common Hawaiian words to know when visiting Hawaii. 
              Pidgin, a hybrid island language, can also be heard throughout Hawaii. 
              And while it may be tempting to start rambling off your own pidgin words – trust us when we say, ‘Leave dat kine talk to the locals who can speak it mo’bettah than you can brah.’
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    </div>
  );
}

export default AccMenu;




{/* // const Accordionn = () => (


// <div>
//         <h1 className="mt-4 mb-3">HAWAII FREQUENTLY ASKED QUESTIONS
//         </h1>
//         <div className="mb-4" id="accordion" role="tablist" aria-multiselectable="true">
//           <div className="card">
//             <div className="card-header" role="tab" id="headingOne">
//               <h5 className="mb-0">
//                 <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is the time difference from the continental US? </a>
//               </h5>
//             </div>
//             <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
//               <div className="card-body">
//                 Hawaii follows Hawaii Standard Time (GMT-10 hours). Since Hawaii does not observe Daylight Savings Time, during the majority of the year (March-November), Hawaii is six (6) hours behind Eastern Standard Time and three (3) hours behind Pacific Standard Time. During non-DST months Hawaii is five and two hours behind each respective time zone.
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-header" role="tab" id="headingTwo">
//               <h5 className="mb-0">
//                 <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How much money will I need per day?
//                 </a>
//               </h5>
//             </div>
//             <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
//               <div className="card-body">
//                 Food is a lot pricier on the islands whether you buy it and cook at your place or go out to eat for your meals.  There are budget-friendly places available for accommodations as well as restaurants.  We tend to stay at places with a small kitchen so we can eat both breakfast and some dinners at “home” then pack our lunch to go while we go adventuring around the island.  A ballpark amount might be, and this is including accommodations at a small B&amp;B and food at non-pricey restaurants, $200.00/day for two people.
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-header" role="tab" id="headingThree">
//               <h5 className="mb-0">
//                 <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What languages are spoken in Hawaii?</a>
//               </h5>
//             </div>
//             <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
//               <div className="card-body">
//                 Hawaii’s official language is both English and Hawaiian, but English is the most common. Other languages such as Chinese, Japanese, and Portuguese, are often spoken too. Here are some common Hawaiian words to know when visiting Hawaii. Pidgin, a hybrid island language, can also be heard throughout Hawaii. And while it may be tempting to start rambling off your own pidgin words – trust us when we say, ‘Leave dat kine talk to the locals who can speak it mo’bettah than you can brah.’
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );

//   export default Accordionn; */}