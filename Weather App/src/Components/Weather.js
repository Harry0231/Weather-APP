import React, { useState, useEffect } from "react";
import "./css/Style.css";


const Weather = () => {
  const [city, setCity] = useState('');

  const [search, setSearch] = useState("vadodara");


  useEffect(() => {
    // const fetchApi = async () => {
    //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=05b9810693a86183b24ccf1266c42ef5`;
    //   const response = await fetch(url);
    //   const resJSON = await response.json();
    //   setCity(resJSON);
    // };
    // fetchApi();

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=vadodara&units=metric&appid=05b9810693a86183b24ccf1266c42ef5`
    // `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=05b9810693a86183b24ccf1266c42ef5`

    )
      .then((response) => response.json())
      .then((actualData) => setCity(actualData)
       
      )
      .catch((err) => {
         console.log(err.messaage)
        

      });
   }, [search]);
   // console.log(city);
   const show=()=>{
   console.log(search)
   setSearch(search)
   fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=05b9810693a86183b24ccf1266c42ef5`
   )
    .then((response) => response.json())
    .then((actualData) => setCity(actualData)
     
    )
  }
  return (
    <>
      <div className="box">
        <h1 className="heading">Weather-App</h1>
        <div className="inputData">
          <input
            type="search"
            value={search}
            placeholder="Search City..."
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          
        </div>
        <div>
        <button onClick={show} className="button-17">Search</button>
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view">{search}</i>
     
              </h2>
              <h1 className="temp">{city.main.temp}°C </h1>
              <h2 className="temp1">Country-{city.sys.country}</h2>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
