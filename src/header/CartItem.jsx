import React,{useState} from "react";
import styled from "styled-components";

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

const StyledSpan = styled.span`
    margin: 20px;
    width: 22%;
    text-align: center;
`

function CartItem({img, title, price}) {

    const ImgStyle = {
        marginLeft: '3%',
        width: "120px",
        height: "130px",
    };
    
    const [totalPrice, setTotalprice] = useState(0);
    const [isChecked, setIschecked] = useState(false)

    function totalprice(event) {
        setIschecked(event.target.checked)
        isChecked ? setTotalprice(totalPrice - price) : setTotalprice(totalPrice + price)
    }

    return(
        <StyledDiv price={price}>
                <input type="checkbox" value={isChecked} onClick={totalprice} />
                <img src={img} style={ImgStyle} alt={title} />
                <StyledSpan>{title}</StyledSpan>
            <StyledSpan style={{
                fontSize: '18px',
                color: '#be2e22',
                marginLeft: '40px',
            }}>{price}원</StyledSpan>
            {totalPrice}
        </StyledDiv>
    )
}

export default CartItem;