import React,{useState} from "react";
import styled from "styled-components";
import {HiPlusSm, HiMinusSm} from 'react-icons/hi';

const StyledDiv = styled.div`
    width: 97%;
    height: 135px;
    border: 0.1px solid #3B1C1C;
    text-align: left;
    margin-bottom: 5px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const QunButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        background-color : yellow;
        color : black
    }
    margin: 0 15px 0 15px;
`

const StyledSpan = styled.span`
    margin: 20px;
`

function Product2({img, title, price}) {

    const ImgStyle = {
        width: "120px",
        height: "130px",
    };
    
    return(
        <StyledDiv price={price}>
                <input type="checkbox" value={false} />
                <img src={img} style={ImgStyle} alt={title} />
                <StyledSpan>{title}</StyledSpan>
            <StyledSpan style={{
                fontSize: '18px',
                color: '#be2e22',
                marginLeft: '40px',
            }}>{price}원</StyledSpan>
        </StyledDiv>
    )
}

export default Product2;