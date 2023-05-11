import React,{useState} from "react";
import styled from 'styled-components';
import Product from "./Product";
import 다운로드 from './다운로드.jpeg';

const StlyedBody = styled.body`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

function Body(props) {

    const [price, setPrice] = useState(0);

    return(
        <StlyedBody>
            <Product
                image="https://gdimg.gmarket.co.kr/1172196521/still/600?ver=1553663241"
                title="쌀과자" 
                price="3,200원"
            />
            <Product
                image="http://cookieforest1.imghost.cafe24.com/cookieforest/pie/pie12.jpg"
                title="칸쵸" 
                price="1,200원"
            />
            <Product
                image="https://image.newsis.com/2020/06/24/NISI20200624_0000550571_web.jpg"
                title="새우깡" 
                price="2,000원"
            />
            <Product
                image="https://static.coupangcdn.com/image/retail/images/2272115309250827-7ef60742-b5fb-4f51-a08c-dfa779e49c8f.jpg"
                title="과자종합 세트" 
                price="12,000원"
            />
            <Product
                image="https://oneroommaking.com/web/product/big/202012/7c21f51c1b88a8b9b880203d3e2b17cf.jpg"
                title="과자집" 
                price="200,000,000원"
            /> <br />
            <Product
                image="https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/8834932052257-1c6cd1f7-8c39-43a4-bb6d-b1277da352e7.jpg"
                title="사과" 
                price="23,000원"
            />
            <Product
                image="https://pbs.twimg.com/media/D5-JfyiUcAAN5rv.jpg"
                title="수박" 
                price="20,000원"
            />
            <Product
                image="https://shop.biumfood.com/upload/images/20200410094658_249534.jpg"                
                title="오렌지" 
                price="3,000원"
            />
            <Product
                image="http://img.danawa.com/prod_img/500000/776/493/img/9493776_1.jpg?shrink=500:500&_v=20190916173147"
                title="샤인머스캣" 
                price="30,000원"
            />
            <Product
                image="https://static4.depositphotos.com/1020804/365/i/950/depositphotos_3653163-stock-photo-mango-with-section-on-a.jpg"
                title="애플망고" 
                price="21,000원"
            />
        </StlyedBody>
    )
}

export default Body;