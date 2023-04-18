import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import logo from '../photo/logo.png';
import Card from './card';
import { fetchCities, selectCitiesData } from '../redux/cities/citiesSlice';

const Home = () => {
  const cities = [
    'Istanbul',
    'london',
    'new york',
    'tokyo',
    'new jersey',
    'Amsterdam',
    'los angeles',
    'Vancouver',
    'toronto',
    'Barcelona',
  ];

  const dispatch = useDispatch();
  const weatherData = useSelector(selectCitiesData);

  const [filter, setFilter] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    const fetchCitiesData = async () => {
      dispatch(fetchCities(filteredCities));
    };

    fetchCitiesData();
  }, [dispatch, filteredCities]);

  const getData = async (cityname) => {
    localStorage.setItem('cityname', JSON.stringify(cityname));
  };

  const handleFilterChange = (e) => {
    const inputFilter = e.target.value.toLowerCase();
    const filtered = cities.filter((city) => city.toLowerCase().includes(inputFilter));
    setFilter(inputFilter);
    setFilteredCities(filtered);
  };

  return (
    <main>
      <div className="home_wrapper">
        <div className="header_wrapper">
          <img src={logo} alt="logo" />
          <h1>Weather App</h1>
        </div>
        <h2 className="small_title">Forecast by City</h2>
        <div className="filter_wrapper">
          <input
            type="text"
            placeholder="Enter City Name"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
        <div className="cards_wrapper">
          {weatherData.map((weather, index) => (
            <Link to="/details" key={uuidv4()}>
              <div
                className="card"
                role="button"
                tabIndex={0}
                onClick={() => getData(filteredCities[index])}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    getData(filteredCities[index]);
                  }
                }}
                style={{ color: 'black' }}
              >
                <Card city={filteredCities[index]} weather={weather} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
