import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Homepage from './components/Homepage';
import Reservations from './components/Reservations';
import Faq from './components/Faq';
import ContactUs from './components/Contact';

const AppRouter = () => (
  <BrowserRouter>
    <MyNavbar />
    <Switch>
      <Route exact path="/Homepage" component={Homepage} />
      <Route exact path="/Reservations" component={Reservations} />
      <Route exact path="/Faq" component={Faq} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Redirect to="/Homepage"/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
