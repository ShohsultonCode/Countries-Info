import React, { useEffect, useState } from 'react';
import "./style.css"
const baseUrl = "https://restcountries.com/v3.1/all"
const index = () => {
   const [countries, setCountries] = useState([])


   const fetchCountryData = async () => {
      const response = await fetch(baseUrl)
      const countries = await response.json()
      setCountries(countries)
   }
   const CountryInfo = (()=>{
      
   })

   useEffect(() => {
      fetchCountryData()
   }, [])
   return (
      <>

         <div className='wrapper'>
            <div className='container  d-flex justify-content-around align-items-center flex-wrap '>
               {countries.map((e, id) => {
                  const { name, population, region, capital, flags } = e
                  return (

                     <>
                        <div key={id} className={`card`}>
                           <img className="card-img-top" src={flags.png} alt={name} />
                           <div className="card-body">
                           <h3 className='card-title mb-2'>{name.common}</h3>
                              <h4 className='card-text'>Population: <span>{population}</span></h4>
                              <h4 className='card-text'>Region: <span>{region}</span></h4>
                              <h4 className='card-text'>Capital: <span>{capital}</span></h4>
                           </div>
                        </div>
                     </>
                  )  
               })}
            </div>
         </div>
      </>
   );
}

export default index;
