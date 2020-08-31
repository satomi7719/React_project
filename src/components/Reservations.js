import React from "react";
import {Layout} from './Layout'
import Footer from './Footer';
import Reserve from './Reserve';

const Reservations = () => (
  <React.Fragment>  
    <Layout>
      <Reserve />
      <Footer />
    </Layout>
  </React.Fragment>
);

export default Reservations;