import React, {useState, useEffect} from 'react';
import './Conpage.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

import Converter from '../CurrencyConverter/containers/Converter';



import {getData} from '../CurrencyConverter/setupInitialData';

import {init_Country, primary_c, initial_countries, format_data} from '../CurrencyConverter/setupFunction';


const Conpage = () => {

  const [all_countries, setCountries] = useState([])
  const [currency, setCurrency] = useState([])
  const [primary, setPrimary] = useState([])
  const [isData, haveData] = useState(false)
  const [initialCountry, initCountry] = useState({})
  
  const data = async () => {
  // get all data from countries
    let data = await getData()
  // set currency to the state
    setCurrency(data.currency)
  // set all countries
    setCountries(data.new_countries)
  // filter initial country
    let new_country = 
    init_Country(data.new_countries, data.currency, initial_countries, primary_c)
  // set initial countries
    initCountry(new_country)
  // setPrimary
    setPrimary(primary_c)
  }
    
  useEffect(()=>{
    if(isData) return
    haveData(true)
    data() 
  })
    
  const changeCurrency = (s_currency, name) =>{
    let n_country = initialCountry.map(c => {
      return {
        ...c,
        primary: c.name === name ? true : false,
        currency: {
          primary: s_currency,
          base: c.currency.base
        }
      }
    })

    initCountry(n_country)
    setPrimary(s_currency)
  }
    
  const change = (val) => {
    let n_country = all_countries.filter(c => {
      return c.name === val
    })

    let a = format_data(n_country[0], primary, currency)

    let b = initialCountry.concat({...a})
    initCountry(b)
  }




  return (
   
   <div>
     <Navbar />
            <Converter 
              countries={all_countries}
              currency={currency} />  
              
               <Footer />  
               
  </div>

  );

  
}

export default Conpage;
