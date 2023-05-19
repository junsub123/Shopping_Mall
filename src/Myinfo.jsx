import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    text-align: center;
    width: 100px;
    height: 40px;
    background-color: white;
    color: #3B1C1C;
    margin-bottom: 15px;
    border: 0.2px solid grey;
    cursor: pointer;
    margin-top: 20px;
    margin-left 60px;
`

const StyledDiv = styled.div`
    width: 100%;
    height: 300px;
`



export default function Myinfo() {
    return(
        <div>
            <h2>내 정보</h2>
            <hr /><br />

            <div style={{display: 'flex'}}>
                <StyledDiv>
                    <StyledButton>개인정보 수정</StyledButton>
                    <StyledButton>배송지 수정</StyledButton><br /><br />
                    
                    <StyledButton>주문내역</StyledButton>
                    <StyledButton>상품후기</StyledButton><br /><br />
                    
                    <StyledButton>상품 문의</StyledButton>
                    <StyledButton>쿠폰 입력</StyledButton><br /><br />
                </StyledDiv>

                <StyledDiv style={{textAlign:'center'}}>
                    <h2>적립금</h2>
                    <h3>{0}원</h3><br /><br />

                    <h2>쿠폰</h2>
                    <h3>{0}개</h3><br />
                </StyledDiv>
            </div>

        </div>
    )
}