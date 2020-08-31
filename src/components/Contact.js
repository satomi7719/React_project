import React from "react";
import {Layout} from './Layout'
import Footer from './Footer';
import Contact from './ContactComponent';

const ContactUs = () => (
  <React.Fragment>  
    <Layout>
      <Contact />
      <Footer />
    </Layout>
  </React.Fragment>
);

export default ContactUs;
