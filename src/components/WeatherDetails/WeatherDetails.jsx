import React from 'react'
import './WeatherDetails.css'
import { Row, Col } from 'react-bootstrap'
import SearchBar from './SearchBar'
import WeatherDetailsCard from './WeatherDetailsCard'

const WeatherDetails = ({setCity, searchLocation, weather}) => {
    return <div className="weather">
        <Row className='justify-content-center mt-4'>
        <Col xl={4} lg={6} md={8} sm={10} xs={12}>
          <div className='weather-display-card'>
            <SearchBar setCity={setCity} searchLocation={searchLocation}/>
            {weather && <WeatherDetailsCard data={weather} />}
          </div>
        </Col>
      </Row>
    </div>
}

export default WeatherDetails