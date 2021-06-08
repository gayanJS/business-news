import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <h2>Business Information means information, which relates to customers or the business of Company including without limitation, sales and rate information, software, business plans and operating strategies, Product information, and material identifying an association with the Company. Business Information does not include information that (i) relates to direct or indirect compensation payable, paid or provided to GA under the Agreement; (ii) is or becomes part of the public domain or is publicly available through no act or omission or through no breach of any contract;(iii) is known at the time of disclosure without an obligation to keep it confidential, as evidenced by documentation in possession at the time of such disclosure; (iv) becomes rightfully known from another source; or (v) is similar to Business Information which is independently owned and developed by GA.</h2>



      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;