import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Body from './Body';
import Header from "./header/Header";
import Cart from './header/Cart';
import Login from './header/Login'
import Signup from './header/Signup';
import Footer from './Footer';

const StyledHeader = styled.header`
    text-align: right;
`

export default function App(props) {
  return (

      <div>
        <StyledHeader>

          <Header />

        </StyledHeader>

            <div style={{
        margin: '0 17% 0 18%',
      }}>
            
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
            
            </div>
          
          <Footer />

      </div>

  );
}
