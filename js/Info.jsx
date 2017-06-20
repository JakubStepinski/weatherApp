import React from "react";
import ReactDOM from "react-dom";

class Info extends React.Component {
    render() {
        const view = <div className='weather'>
            <h2>Weather data downloaded from <a style={{ color: 'navy' }} href='https://openweathermap.org/' target='_blank'>OpenWeatherMap</a></h2>
            <br />
            <h2>Temperature in Celsius Degree</h2>
            <br />
            <h2>Home page checks the weather using geolocation</h2>
        </div>;
        return <div className='main container'>
            {view}
        </div>;
    }
}
module.exports = Info;