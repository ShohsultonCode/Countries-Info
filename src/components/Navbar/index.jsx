import React from 'react';
import "./style.css"
import { useState, useEffect } from 'react';
const index = () => {
  const [theme, setTheme] = useState('light');
   
   const toggleTheme = (e) => {
      if (theme === 'light') {
         e.target.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"
         setTheme('dark');
      } else {
         e.target.src = "https://cdn-icons-png.flaticon.com/512/606/606807.png"
         setTheme('light');
      }
   };
   useEffect(() => {
      document.body.className = theme;
   }, [theme]);

   return (
      <>
         <header className={`head ${theme}`}>
            <div className='all'>
               <div className='logo'><h4>Where in the world?</h4></div>
               <div className='theme' >
                  <div className='themes d-flex align-items-center'><img onClick={toggleTheme} src='https://cdn-icons-png.flaticon.com/512/606/606807.png' alt="Dark Theme" /> <h6>Dark Mode</h6></div>
               </div>
            </div>
         </header>

         <div id='search-part' className={`navbar ${theme}`}>
            <div className="container my-5">
               <input type="text" className={`search-input ${theme}` } placeholder="Seacrh for a country..." />
               <div className="form-inline">
                  <select className={theme}>
                     <option disabled selected value="Coutries">Filter  by Region</option>
                     <option>Africa</option>
                     <option>America</option>
                     <option>America</option>
                  </select>
               </div>
            </div>
         </div>
      </>
   );
}

export default index;
