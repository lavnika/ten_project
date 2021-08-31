import React from 'react';
import '../../App.css';
import Cards from '../Cards';
// import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Carousels from '../Carousels';
import Containers from '../Containers';
import Accordion from '../FAQ';

function Home() {
  return (
    <>
      <Cards />
      <Containers />
      <Accordion />
      <Carousels />
      <Footer />
    </>
  );
}

export default Home;
