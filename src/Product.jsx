import React,{useState} from "react";
import styled from "styled-components";
import {HiPlusSm, HiMinusSm} from 'react-icons/hi';

const StyledDiv = styled.div`
    width: 160px;
    height: 280px;
    border: 1px solid #3B1C1C;
    text-align: center;
    margin: 0 5px 10px 5px;
    padding: 6px;
    line-height: 25px;
`

const QunButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        background-color : yellow;
        color : black
    }
`

const PutButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        background-color : yellow;
        color : black
    }
`

function Product(props) {
    const url = props.image
    const title = props.title
    const price = props.price

    const ImgStyle = {
        width: "160px",
        height: "170px",
    };

    const [count, setCount] = useState(0);

    return(
        <StyledDiv>
            <img src={url} style={ImgStyle} /><br />
            <span>{title}</span><br />
            {price}<br />
            <QunButton onClick={() => {
                setCount(count + 1)
                }}>
                <HiPlusSm />
            </QunButton>
            {count}
            <QunButton onClick={() => {
                if(count === 0){
                }else{
                    setCount(count - 1)
                }}}>
                <HiMinusSm />
            </QunButton><br />
            
            <PutButton onClick={(setCount) => {
                if(count != 0){
                    alert(`${count}개를 장바구니에 담았습니다.`);
                }else{
                    alert('수량을 정해주세요.');
                }
                return null;
            }}>장바구니 담기</PutButton>
        </StyledDiv>
    )
}

export default Product;