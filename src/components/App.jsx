import React, { useState, useEffect } from 'react'
// import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import axios from 'axios'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import WeatherForecastDetails from './WeatherForecastDetails'
import TopCitiesWeather from './TopCitiesWeather'
import { FadeLoader } from 'react-spinners'
import Footer from './Footer'

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)
  const [topCitiesWeather, setTopCitiesWeather] = useState([])
  const [spinner, setSpinner] = useState(true)
  const key = process.env.REACT_APP_API_KEY
  const topCities = ['Berlin', 'Paris', 'Tokyo', 'London', 'New York', 'Kabul']

  useEffect(() => {
    topCities.map((city) => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      axios.get(url).then(({data}) => {
        setTopCitiesWeather(prevValue => {
          return [
            ...prevValue,
            data
          ]
        })
        setSpinner(false)
      })
    })
  }, [])

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setSpinner(true)
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      axios.get(url).then(({data}) => {
        setWeather(data)
        setTopCitiesWeather([])
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${data.id}&appid=${key}&units=metric`
        axios.get(forecastUrl).then((forecastData) => {
          setWeatherForecast(forecastData.data)
          setSpinner(false)
        })
      })
    }
  }
  
  return ( <div>
    <Container>
      <WeatherDetails setCity={setCity} searchLocation={searchLocation} weather={weather} />
      <FadeLoader loading={spinner} className='loading-spinner' />
      <Row className='justify-content-center my-lg-5 my-3 mx-1 mx-lg-5'>
        {weatherForecast && <WeatherForecastDetails data={weatherForecast}/>}
        {topCitiesWeather && <TopCitiesWeather data={topCitiesWeather}/>}
      </Row>
    </Container>
    <Footer />
  </div>)
}

export default App