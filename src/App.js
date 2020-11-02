//import React from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import './App.css';
import React, {useState, useEffect} from 'react';
import InfoBox from "./InfoBox";
import Map from './Map';


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
      <div className="app__stats">
          <InfoBox
            // onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            // active={casesType === "cases"}
            // cases={prettyPrintStat(countryInfo.todayCases)}
            // total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            //onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            // active={casesType === "recovered"}
            // cases={prettyPrintStat(countryInfo.todayRecovered)}
            // total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            //onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            // isRed
            // active={casesType === "deaths"}
            // cases={prettyPrintStat(countryInfo.todayDeaths)}
            // total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
   
      {/*table */}
      {/*graph */}
      {/*map */}

    </div>
  );
}

export default App;
