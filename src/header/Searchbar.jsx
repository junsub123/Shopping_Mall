import React from 'react';
import styled from 'styled-components';
import {BsSearch,BsCart} from 'react-icons/bs';
import Cart from './Cart';

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

function Searchbar() {
    return(
        <div style={{
            textAlign: 'center',
            margin: '0 auto',
            border: '2px solid gold',
            width: '344px'
        }}>
            <StyledInput type="text" placeholder="원하시는 상품을 검색해보세요." />
            <StyledButton><BsSearch /></StyledButton>
        </div>
    )
}

export default Searchbar