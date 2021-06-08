import React from 'react';
import StockView from '../Stock/components/StockView'
import Navbar from '../Navbar';
import Footer from '../Footer';
function Stock() {
  return (
    <>
    <Navbar />
      <StockView/>
      <Footer/>
    </>
  );
}

export default Stock;