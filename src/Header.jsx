import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsSearch,BsCart} from 'react-icons/bs';
import Location from "./header/Location";
import Searchbar from "./header/Searchbar";
import Cart from './header/Cart';

const StyledHeader = styled.header`
    text-align: right;
`

function Header(event) {
    return(
        <StyledHeader>

            {/* 쇼핑몰 로고 */}
            <a href="/"><img src="img/logo.png"  style={{
                width: '200px',
                height: '90px',
                marginRight: '38%',
            }}/></a>

            <Searchbar />

            <Cart />

        </StyledHeader>
    )
}

export default Header;