import React,{useState} from 'react';
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
    const [_price, setPrice] = useState(0);

    return(
        <>
            <center><h1>장바구니</h1></center>
            <hr />
            <div style={{display: 'flex',}}>
                <StyledDiv style={{width: '60%',}}>
                
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
                style={{width: '40%',
                textAlign: 'center', 
                border: '0.1px solid black',}}>
                    <h3>총 결제 금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{_price}원</h3>
                    <StyledButton onClick={() => {
                        alert("주문을 성공했습니다.");
                        navigate('/');
                    }}>주문하기</StyledButton>
                </StyledDiv>
            </div>
        </>
    )
}

export default Cart;