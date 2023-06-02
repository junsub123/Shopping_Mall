import React,{useState} from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Main from './Main';
import Cart from './header/Cart';
import Login from './header/Login'
import Signup from './header/Signup';
import Footer from './Footer';
import Myinfo from './Myinfo';
import Header from './header/Header';
// import products from './products.json';

const StyledHeader = styled.header`
    text-align: right;
`

export default function App(props) {

  const [serach, setSerach] = useState('');

  function onChange(e) {
    e.preventDefault();
    setSerach(e.target.value);
  };

  return (
    <div>
      
      <div>
        <Helmet>
          <title>숍핑몰</title>
        </Helmet>
      </div>

      <StyledHeader>

      <Header serach={serach} onChange={onChange} />

      </StyledHeader>

      <div style={{
        margin: '0 17% 0 18%',
      }}>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/myinfo' element={<Myinfo />} />
        </Routes>

      </div>

      <Footer />

    </div>

  );
}
