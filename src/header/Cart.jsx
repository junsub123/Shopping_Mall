import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Product2 from '../Product2';

const StyledDiv = styled.div`

`

const StyledButton = styled.button`
    text-align: center;
    width: 250px;
    height: 35px;
    background-color: gold;
    color: #3B1C1C;
    margin-bottom: 20px;
    border: 1px solid black
`

function Cart(props) {

    const navigate = useNavigate();

    return (
        <>
            <h2>장바구니</h2>
            <hr />
            <div style={{ display: 'flex', }}>
                <StyledDiv style={{ width: '60%', }}>

                    <Product2
                        img="http://cookieforest1.imghost.cafe24.com/cookieforest/pie/pie12.jpg"
                        title="칸쵸"
                        price={1200}
                    />

                    <Product2
                        img="https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/8834932052257-1c6cd1f7-8c39-43a4-bb6d-b1277da352e7.jpg"
                        title="사과(박스)"
                        price={23000}
                    />

                    <Product2
                        img="https://shopping-phinf.pstatic.net/main_8403495/84034955612.1.jpg?type=f300"
                        title="헬스장"
                        price={500000000}
                    />

                </StyledDiv>
                <StyledDiv
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
                            <p>{}원</p>
                            <p>{}원</p>
                            <p>{}원</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', }}>
                        <h3>총 결제 금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{10101010}원</h3>
                        <StyledButton onClick={() => {
                            alert("주문을 성공했습니다.");
                            navigate('/');
                        }}>주문하기</StyledButton>
                    </div>
                </StyledDiv>
            </div>
        </>
    )
}

export default Cart;