import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import getWeatherData from '../redux/api/api';

const Card = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city, units);
      setWeather(data);
      setUnits(units);
    };

    fetchWeatherData();
  }, [city, units]);

  return (
    <div className="card_details_wrapper">
      {weather && (
        <div>
          <div className="image_and_icon_wrapper">
            <div className="card_image_wrapper">
              <img src={`${weather.iconURL}`} alt="weather_icon" />
              <small>{weather.description}</small>
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="card_degrees_wrapper">
            <p>{`${weather.name}, ${weather.country}`}</p>
            <small>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</small>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Card;
