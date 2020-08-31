import React from "react";
import Carousel from './Carousel';
import MyCards from './ReactCards';
import {Layout} from './Layout'
import Footer from './Footer';
import MapText from './HompageTextAndMap';

const Home = () => (
  <React.Fragment>
    <Carousel />
    <Layout>
      <MapText />
      <MyCards />
      <Footer />
    </Layout>
  </React.Fragment>
);

export default Home;