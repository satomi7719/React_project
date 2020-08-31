import React from "react";
import {Layout} from './Layout'
import Footer from './Footer';
import AccMenu from './Accordion';

const Faq = () => (
  <React.Fragment>  
    <Layout>
      <AccMenu />
      <Footer />
    </Layout>
  </React.Fragment>
);

export default Faq;
