import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import './App.css';
import Details from './pages/detailsPage';
import Nav from './pages/header';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
