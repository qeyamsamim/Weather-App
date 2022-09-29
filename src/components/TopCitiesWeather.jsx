import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import './TopCitiesWeather.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTemperatureThreeQuarters, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'

const TopCitiesWeather = ({data}) => {
    return data.map((city) => 
        <Col key={city.id} xs={12} sm={6} lg={4} className='p-2'>
            <Card className='card-background border-0'>
                <div className="img-container">
                    <Card.Img variant="top" src={`assets/${city.name}.jpg`} className='city-image' alt={`${city.name} weather`} />
                </div>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{ new Date().toLocaleDateString('en-EN', {'weekday' : 'long'}) }</Card.Title>
                        </Col>
                        <Col>
                            <Card.Title className='float-end'><FontAwesomeIcon icon={ faLocationDot } /> {city.name}</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7} sm={7} xs={7}>
                            <h6 className='mb-2 mt-3'>{city.weather[0].main}</h6>
                            <p className='mb-0'><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> {Math.round(city.main.temp)} &deg;C</p>
                            <p className='mb-0'><FontAwesomeIcon icon={faDroplet} /> {Math.round(city.main.humidity)} %</p>
                        </Col>
                        <Col md={5} sm={5} xs={5}>
                            <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TopCitiesWeather