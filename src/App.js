import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Main from './Main';
import Header from "./header/Header";
import Cart from './header/Cart';
import Login from './header/Login'
import Signup from './header/Signup';
import Footer from './Footer';
import Myinfo from './Myinfo';
// import products from './products.json';

const StyledHeader = styled.header`
    text-align: right;
`

export default function App(props) {
  return (
    <div>
      
      <div>
        <Helmet>
          <title>숍핑몰</title>
        </Helmet>
      </div>

      <StyledHeader>

        <Header />

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
