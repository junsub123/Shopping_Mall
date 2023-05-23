import React from 'react';
import CartList from './CartList';
import CartPrice from './CartPrice';

function Cart(props) {
    return (
        <>
            <h2>장바구니</h2>
            <hr />
            <div style={{ display: 'flex', }}>
            
                <CartList />

                <CartPrice />
            </div>
        </>
    )
}

export default Cart;