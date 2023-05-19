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

    const [count, setCount] = useState(1);
    const [_price, setPrice] = useState(price);

    return(
        <StyledDiv price={_price}>
                <img src={img} style={ImgStyle} alt={title} />
                <StyledSpan>{title}</StyledSpan>
            <QunButton onClick={() => {
                setCount(count + 1)
                setPrice(_price + price)
                }}>
                <HiPlusSm />
            </QunButton>
            {count}
            <QunButton onClick={() => {
                if(count === 0){
                }else{
                    setCount(count - 1)
                    setPrice(_price - price)
                }}}>
                <HiMinusSm />
            </QunButton>
            <StyledSpan style={{
                fontSize: '18px',
                color: '#be2e22',
                marginLeft: '40px',
            }}>{_price}원</StyledSpan>
        </StyledDiv>
    )
}

export default Product2;