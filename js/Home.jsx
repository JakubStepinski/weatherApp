import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Downloading',
            city: '',
            country: '',
            iconUrl: '',
            temp: '',
            conditions: ''
        }
        this.setPosition();
    }
    setPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.downloadWeather);
        } else {
            this.setState({
                text: 'Geolocation is not supported by this browser.'
            });
        }
    }
    downloadWeather = (position) => {
        const lat = position.coords.latitude.toFixed(2);
        const lon = position.coords.longitude.toFixed(2);
        fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=cd161b511514f1f903899c55b1960d09',
            {
                headers: {
                    'Origin': ''
                }
            })
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error('Error 404');
                }
            })
            .then(data => {
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    iconUrl: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
                    temp: Math.round(data.main.temp - 273.15),
                    conditions: data.weather[0].description
                });
            })
            .catch(err => {
                console.log(err)
            });
    }
    render() {
        let view = <div className='weather'>
            <h1>
                {this.state.text}
            </h1>
        </div>;
        if (this.state.city) {
            view = <div className='weather'>
                <h1>Weather in {this.state.city}, {this.state.country}</h1>
                <div className='temp'>
                    <img src={this.state.iconUrl} />
                    <div>{this.state.temp}&deg;C</div>
                </div>
                <h2>{this.state.conditions}</h2>
            </div>;
        }
        return <div className='main container'>
            {view}
        </div>;
    }
}
module.exports = Home;