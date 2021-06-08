import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Section from '../Section';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
       <Navbar />
      <Section />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;