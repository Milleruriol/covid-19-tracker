//import React from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {

  const[countries, setCountries]=useState([]);

useEffect(() => {
const getCountriesData =  async() => {
        await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response)=>response.json())
        .then((data)=>{
              const countries = data.map((country)=>(
              {
              name:country.country,
              value:country.countryInfo.iso2
              }
                                                    ));
    setCountries(countries);
  })
}
getCountriesData();
}, []);

const onCountryChange=(event)=>
{
  const countryCode = event.target.value;
  console.log(countryCode);
  //setCountry(countryCode); we need to chck this info
}

  return (
    <div className="app">
      <div className='app__header'>
        <h1>COVID-19 TRACKER</h1>
      <FormControl className='app__dropdown'>
        <Select variant='outlined' onChange={onCountryChange} value=''>  
        <MenuItem value='wordlwide'>Wordlwide</MenuItem>          
          {countries.map((country) =>(<MenuItem value={country.value}>{country.name}</MenuItem>))}
        </Select>
      </FormControl>
      </div>
    
      {/*header*/}
      {/* */}
      {/*title+ section input dropdown field */}
      {/*infobox */}
      {/*infobox */}
      {/*infobox */}
      {/*table */}
      {/*graph */}
      {/*map */}

    </div>
  );
}

export default App;
