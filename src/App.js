import React from 'react';
import styled from 'styled-components';
import { Route, Routes, NavLink } from 'react-router-dom';
import {BsCart} from "react-icons/bs";
import Body from './Body';
import Searchbar from "./header/Searchbar";
import Cart from './header/Cart';
import Login from './header/Login'
import Signup from './header/Signup';

const StyledHeader = styled.header`
    text-align: right;
`

const StyledButton = styled.button`
    width: 65px;
    text-align: center;
    margin-right: 93%;
    border: none;
    background-color: white;
`

const style = {
  textDecoration: 'none',
  color: 'black',
}

function App(props) {



  return (

      <div style={{
        margin: '0 17% 0 18%',
      }}>
        <StyledHeader>

          <div style={{
            marginRight: '40px',
            marginTop: '5px',
          }}>
            <NavLink to="/login" style={style}>로그인</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/signup" style={style}>회원가입</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/" style={style}>고객센터</NavLink>
          </div>

          {/* 쇼핑몰 로고 */}
          <NavLink to="/"><img src="img/logo.png" style={{
            width: '200px',
            height: '90px',
            marginRight: '39%',
          }} /></NavLink>

          <Searchbar />

          <NavLink to="/cart"><StyledButton onChange={() => {

          }}>
            <BsCart style={{
              width: '50px',
              height: '50px',
            }} /><br />
            <label>장바구니</label>
          </StyledButton></NavLink>

        </StyledHeader>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
      </div>

  );
}

export default App;