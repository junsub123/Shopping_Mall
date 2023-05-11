import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsSearch,BsCart} from 'react-icons/bs';

const StyledHeader = styled.header`
    text-align: right;
`

const StyledInput = styled.input`
    width: 300px;
    height: 100%;
    font-size: 16px;
    border: none;
    outline: none;
`

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: white;
`

function Header(event) {
    return(
        <StyledHeader>
            <div style={{
            }}>
                <a href="/">로그인</a>&nbsp;&nbsp;&nbsp;
                <a href="/">회원가입</a>&nbsp;&nbsp;&nbsp;
                <a href="/">고객센터</a>
            </div>

            <img src="img/logo.png"  style={{
                width: '200px',
                height: '90px',
                marginRight: '38%',
            }}/>

            <div style={{
                textAlign: 'center',
                margin: '0 auto',
                border: '2px solid gold',
                width: '344px'
            }}>
                <StyledInput type="text" placeholder="원하시는 상품을 검색해보세요." />
                <StyledButton><BsSearch /></StyledButton>
            </div>

            <div style={{
                width: '60px',
                textAlign: 'center',
            }}>
                <BsCart style={{
                    width: '50px',
                    height: '50px',
                }} /><br />
                <label>장바구니</label>
            </div>
        </StyledHeader>
    )
}

export default Header;