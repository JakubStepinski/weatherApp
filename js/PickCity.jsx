import React from "react";
import ReactDOM from "react-dom";

class PickCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Check the weather for a city',
            city: '',
            country: '',
            iconUrl: '',
            temp: '',
            conditions: ''
        }
    }
    downloadWeather = () => {
        this.setState({
            text: 'Downloading'
        }, this.setData);
    }
    setData = () => {
        fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=' + this.inputCity.value + '&APPID=cd161b511514f1f903899c55b1960d09',
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
                this.setState({
                    text: 'No data',
                    city: ''
                });
                console.log(err)
            });
        return;
    }
    render() {
        let view = <div className='cityWeather'>
            <h1>
                {this.state.text}
            </h1>
        </div>;
        if (this.state.city) {
            view = <div className='cityWeather'>
                <h1>Weather in {this.state.city}, {this.state.country}</h1>
                <div className='temp'>
                    <img src={this.state.iconUrl} />
                    <div>{this.state.temp}&deg;C</div>
                </div>
                <h2>{this.state.conditions}</h2>
            </div>;
        }
        return <div className='main container'>
            <div className='inputWeather'>
                <input ref={input => { this.inputCity = input } } type='text' />
                <button onClick={this.downloadWeather}>Check</button>
            </div>
            {view}
        </div>;
    }
}
module.exports = PickCity;