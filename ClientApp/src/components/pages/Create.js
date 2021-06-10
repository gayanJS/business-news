import React from 'react';
import Cards from '../Cards'
import Footer from '../Footer';
import './Create.css';
import NewsList from '../NewsCreate/components/NewsList';
import Navbar from '../Navbar';

function Create() {
  return (
    <>
    <Navbar />
      <div className="container">
      <NewsList />
    </div>
    {/* <Cards />  */}
    
       <Footer />
    </>
  );
}

export default Create;