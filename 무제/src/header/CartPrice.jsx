import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    text-align: center;
    width: 250px;
    height: 35px;
    background-color: gold;
    color: #3B1C1C;
    margin-bottom: 20px;
    border: 1px solid black;
    cursor: pointer
`

export default function CartPrice({ totalPrice }) {

    const navigate = useNavigate();

    return(
        <div
                    style={{width: '40%'}}>

                    <div style={{display: 'flex',}}>
                        <div style={{width: '50%',
                                    padding: '20px'}}>
                            <p>총 주문 금액</p>
                            <p>할인 금액</p>
                            <p>배송비</p>
                        </div>
                        <div style={{padding: '20px',
                                    width: '50%',
                                    textAlign: 'right'}}>
                            <p>{0}원</p>
                            <p>{0}원</p>
                            <p>{0}원</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center'}}>
                        <h3>총 결제 금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalPrice}원</h3>
                        <StyledButton onClick={() => {
                            alert("주문을 성공했습니다, 주문해주셔서 감사합니다!");
                            navigate('/');
                        }}>주문하기</StyledButton>
                    </div>
                </div>
    )
}