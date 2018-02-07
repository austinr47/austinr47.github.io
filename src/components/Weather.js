import axios from 'axios';
import React, { Component } from 'react';
import '../css/Weather.css';
require('dotenv').config();

export default class Weather extends Component {
    constructor() {
        super()
        this.state = {
            city: '',
            data: [],
            search: '',
            days: [],
            day: [],
        }
    }
    
    getWeather() {
        axios.get(`http://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_API_TOKEN}&q=85296&days=5`).then(response => {
            let days = response.data.forecast.forecastday
            // console.log(response)
            var fiveDays = days.map((item, index) => {
                function date() {
                    var str = item.date
                        let month = str.split('').splice(5, 5);
                        let day = str.split('').splice(8, 2);
                        let month1 = () => {
                        if(month[0] + month[1] === '01') {
                        return 'Jan'
                        } else if(month[0] + month[1] === '02') {
                        return 'Feb'
                        } else if(month[0] + month[1] === '03') {
                        return 'Mar'
                        } else if(month[0] + month[1] === '04') {
                        return 'Apr'
                        } else if(month[0] + month[1] === '05') {
                        return 'May'
                        } else if(month[0] + month[1] === '06') {
                        return 'Jun'
                        } else if(month[0] + month[1] === '07') {
                        return 'Jul'
                        } else if(month[0] + month[1] === '08') {
                        return 'Aug'
                        } else if(month[0] + month[1] === '09') {
                        return 'Sept'
                        } else if(month[0] + month[1] === '10') {
                        return 'Oct'
                        } else if(month[0] + month[1] === '11') {
                        return 'Nov'
                        } else if(month[0] + month[1] === '12') {
                        return 'Dec'
                        }
                        }
                    return month1() + ' ' + day[0] + day[1];
                }
                return  <div key={index} className="weather-forecast" onClick={() => {this.getDay(item.date)}}>
                            <div className="weather-forecast-date">{date()}</div>
                            <div className="weather-forecast-main">{item.day.condition.text}</div>
                            <div className="weather-forecast-main">{item.day.avgtemp_f}°F</div>
                            <div className="weather-high-low">
                                <div className="weather-forecast-temp-max">H: {item.day.maxtemp_f}°F</div>
                                <div className="weather-forecast-temp-min">L: {item.day.mintemp_f}°F</div>
                            </div>
                        </div>
        })
            this.setState({
                data: response.data,
                days: fiveDays
            })
        })
    }

    getDay(value) {
        axios.get(`http://api.apixu.com/v1/history.json?key=${process.env.REACT_APP_API_TOKEN}&q=85296&dt=${value}`).then(response => {
            var data = response.data.forecast.forecastday[0].hour
            var hours = data.map((item, index) => {
                function date() {
                    var str = response.data.forecast.forecastday[0].hour[index].time
                    let time = str.split('').splice(11, 5);
                    let newTime = (time[0] + time[1] + time[2] + time[3] +time[4]).toString();
                    let theTime = () => {
                    if(newTime === '00:00') {
                      return '12:00 AM'
                    } else if(newTime < '13:00') {
                      return newTime + ' AM'
                    } else if(newTime >= '13:00') {
                      return '0' + (parseInt(newTime, 10) - 12) + ':00 PM'
                    }
                    }
                    return theTime()
                } 
                    return  <div key={index} className="weather-day-main">
                                <div>
                                    <div className="weather-day-time">{date()}</div>
                                    <div className='weather-day-content'>
                                        <img className="weather-day-icon" src={item.condition.icon} alt="icon"/>
                                        <div className="weather-day-right">
                                            <div className="weather-day-temp">{item.temp_f}°F</div>
                                            <div className="weather-day-text">{item.condition.text}</div>
                                            <div className="weather-day-humid">Humidity: {item.humidity}%</div>
                                            <div className="weather-day-feelslike">Feels-like: {item.feelslike_f}°F</div>
                                            <div className="weather-day-rain">Chance of rain: {item.chance_of_rain}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div>______________________</div>
                            </div>
                    },
                )
                this.setState({
                    day: hours
                })
        }, 
        (error) => {
            var hours = <div>No hourly results for this day...please try later</div>
            this.setState({
                day: hours
            })
        }
    )}


    search(value) {
        this.setState({   
            search: value
        })
    }

    render() {
        return (
            <div className='weather-main'>
                <input className='weather-input' placeholder="Enter Zip Code" type='number' minLength='5' onChange={(event) => {this.search(event.target.value)}}/>
                <button className='weather-button' disabled={!this.state.search} onClick={() => {this.getWeather()}}>Get Weather</button>
                <div className='weather-seven-days'>
                    {this.state.days}
                </div>
                <div>
                    {this.state.day}
                </div>
            </div>
        );
    }
}