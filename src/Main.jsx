import React from "react";
import styled from 'styled-components';
import Banner from "./Banner";
import Product from './Product';
import products from "./products.json";

const StlyedBody = styled.body`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

function Main(props) {
  return (
    <StlyedBody>

      {/* <Banner /> */}

      {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
          />
        )
      })}

    </StlyedBody>
  )
}

export default Main;