import React from 'react';
import styled from 'styled-components';
import { BsSearch, BsCart, BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const StyledInput = styled.input`
    width: 300px;
    height: 95%;
    font-size: 16px;
    border: none;
    outline: none;
`

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: white;
    cursor: pointer;
`

const CartButton = styled.button`
    width: 50px;
    text-align: center;
    border: none;
    background-color: white;
    margin-left: 220%;
`

export default function Header() {

    const style = {
        textDecoration: 'none',
        color: 'black',
        marginLeft: '10px',
    }

    let isLogin = false;

    return (
        <div style={{marginBottom: '70px',}}>
            <div style={{
                marginRight: '18%',
                marginTop: '5px',
            }}> 
            {isLogin === false ? <><NavLink to="/login" style={style} isLogin={isLogin}>로그인</NavLink>
            <NavLink to="/signup" style={style}>회원가입</NavLink>
            <NavLink to="/" style={style}>고객센터</NavLink><br /></> : 
            <><NavLink to="/login" style={style} isLogin={isLogin}>로그아웃</NavLink>
            <NavLink to="/" style={style}>고객센터</NavLink><br /></>}
                

                {/* 쇼핑몰 로고 */}
                <NavLink to="/"><img src="img/logo.png" alt="logo" style={{
                    width: '200px',
                    height: '90px',
                    marginRight: '30%',
                }} /></NavLink>

            </div>

            <div style={{
                marginBottom: '40px',
                display: 'flex'
            }}>

                {/* 검색바 */}
                <div style={{
                    textAlign: 'center',
                    marginLeft: '38%',
                    border: '2px solid gold',
                    width: '344px'
                }}>
                    <StyledInput type="text" placeholder="  원하시는 상품을 검색해보세요." />
                    <StyledButton><BsSearch /></StyledButton>
                </div>

                {/* 카트 아이콘 */}
                <NavLink to="/cart"><CartButton onChange={() => {

                }}>
                    <BsCart style={{
                        width: '40px',
                        height: '40px',
                    }} /><br />
                </CartButton></NavLink>
                
                {/* 사람 아이콘 */}
                <NavLink to="/myinfo"><CartButton>
                    <BsFillPersonFill style={{
                        width: '40px',
                        height: '40px',
                    }} /><br />
                </CartButton></NavLink>
            </div>
            <hr />
        </div>
    )
}