import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Nav from './pages/nav/Nav';
import Carousel from './pages//carousel/Carousel';
import Shop from './pages/shop/Shop';
import Footer from './pages/footer/Footer';
import './App.css';
import { useSelector } from 'react-redux';
import { selectToken } from './pages/login/LoginSlice';

function App() {
  
  const token = Cookies.get('token');
  const accessToken =useSelector(selectToken);
  const navigate = useNavigate();

  useEffect( () => {
    !token && navigate('/login');
  }, [accessToken, navigate])

  return (
    <div>
      <Nav />
      <Carousel />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
