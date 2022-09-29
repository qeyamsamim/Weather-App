import React from 'react'
import { Col } from 'react-bootstrap'
import './WeatherForecastDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons'

const WeatherForecastDetails = ({data}) => {
    const dayInWeek = (dt = new Date().getTime()) => {
        return new Date(dt).toLocaleDateString('en-EN', {'weekday' : 'long'})
    }
    
    return data.list.map((data, index) => {
        const date = new Date(data.dt_txt.replace(' ', 'T'))
        const hours = date.getHours()
        if (hours === 12) {
            return <Col xl={2} lg={2} md={4} xs={6} key={index} className='px-1 mb-2'>
                <div className='weather-display-card background p-1'>
                    <div className="text-center">
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className="weather-img" />
                        <h5>{dayInWeek(data.dt * 1000)}</h5>
                    </div>
                    <div className='px-3'>
                        <p className='mb-0'>{data.weather[0].main}</p>
                        <p><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> {Math.round(data.main.temp)} &deg;C</p>
                    </div>
                </div>
            </Col>
        }
    })
}

export default WeatherForecastDetails