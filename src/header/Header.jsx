import React from 'react';
import styled from 'styled-components';
import { BsSearch, BsCart, BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png'

const StyledInput = styled.input`
    width: 280px;
    height: 40px;
    font-size: 16px;
    border: none;
    outline: none;
`

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    text-align: right;
    background-color: white;
    cursor: pointer;
`

const CartButton = styled.button`
    width: 50px;
    text-align: center;
    border: none;
    background-color: white;
`

export default function Header({serach,onChange}) {

    const style = {
        textDecoration: 'none',
        color: 'black',
        marginLeft: '10px',
    }

    let isLogin = false;

    return (
        <div style={{}}>
            <div style={{
                marginRight: '18%',
                marginTop: '8px',
            }}> 

            <NavLink to="/login" style={style} isLogin={isLogin}>로그인</NavLink>
            <NavLink to="/signup" style={style}>회원가입</NavLink>
            <NavLink to="/" style={style}>고객센터</NavLink><br />

            </div>

            <div style={{
                marginBottom: '20px',
                display: 'flex',
            }}>

                {/* 쇼핑몰 로고 */}
                <NavLink to="/"><img src={logo} alt="logo" style={{
                    marginLeft: '250px',
                    width: '90px',
                    height: '90px',
                }} /></NavLink>
                <NavLink to="/" style={{textDecoration: 'none',
                                        color: 'black',}}>
                <h2 style={{marginTop: '30px'}}>숍핑몰</h2>
                </NavLink>
                
                {/* 검색바 */}
                <div style={{
                    textAlign: 'center',
                    margin: 'auto',
                    border: '2px solid gold',
                    width: '344px',
                    height: '42px',
                    borderRadius: '10px 10px 10px 10px'
                }}>
                    <StyledInput type="text" placeholder="검색어를 입력해주세요" value={serach} onChange={onChange} />
                    <StyledButton><BsSearch /></StyledButton>
                </div>
                <div style={{marginRight: '290px'}}>
                {/* 카트 아이콘 */}
                <NavLink to="/cart"><CartButton onChange={() => {

                }}>
                    <BsCart style={{
                        width: '30px',
                        height: '30px',
                        marginTop: '30px',
                        cursor: 'pointer'
                    }} /><br />
                </CartButton></NavLink>
                
                {/* 사람 아이콘 */}
                <NavLink to="/myinfo"><CartButton>
                    <BsFillPersonFill style={{
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer'
                    }} /><br />
                </CartButton></NavLink>
                </div>
            </div>
            <hr />
        </div>
    )
}