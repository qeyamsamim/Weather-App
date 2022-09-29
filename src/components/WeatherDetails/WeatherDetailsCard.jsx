import React from 'react'
import { faTemperatureThreeQuarters, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import './WeatherDetailsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'

const WeatherDetails = ({data}) => {
    return <div className="weather">
        <Row>
            <h2 className="mt-3">Weather in {data.name}</h2>
        </Row>
        <Row>
            <Col>
                <h1 className="temp mt-2"><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> {Math.round(data.main.temp)} &deg;C</h1>
                <div className="mt-3">
                    <h6 className="description">{data.weather[0].main}</h6>
                    <h6 className="humidity"><FontAwesomeIcon icon={faDroplet} /> {data.main.humidity} %</h6>
                    <h6 className="wind"><FontAwesomeIcon icon={faWind} /> {data.wind.speed} km/h</h6>
                </div>
            </Col>
            <Col className='text-center'>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} className="weather-img" />
            </Col>
        </Row>
    </div>
}

export default WeatherDetails