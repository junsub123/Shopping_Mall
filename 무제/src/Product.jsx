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
    cursor: pointer;
`

const PutButton = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    }
`

// 정규표현식으로 천단위마다 콤마(,) 찍음
function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function Product({img, title, price}) {

    const ImgStyle = {
        width: "160px",
        height: "170px",
    };

    const [list, setList] = useState([]);
    const [count, setCount] = useState(1);
    const [_price, setPrice] = useState(price);

    return(
        <StyledDiv>
            <img src={img} style={ImgStyle} alt={title} /><br />
            <span>{title}</span><br />
            <span style={{
                color: '#be2e22',
            }}>{priceToString(_price)}원</span><br />
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
            </QunButton><br />
            
            <PutButton onClick={(setCount) => {
                if(count !== 0){
                    alert(`${title} ${count}개를 장바구니에 담았습니다.`)
                    setList([{
                        img,
                        title,
                        price,
                        count
                    }])
                    console.log(list);
                }else{
                    alert('수량을 정해주세요.')
                }
                return null
            }}>장바구니 담기</PutButton>
        </StyledDiv>
    )
}

export default Product;