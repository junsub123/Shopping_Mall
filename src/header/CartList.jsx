import React,{useState} from "react";
import CartItem from "./CartItem";

export default function CartList() {

    let items = [
        {
            id: 1,
            img: "http://cookieforest1.imghost.cafe24.com/cookieforest/pie/pie12.jpg",
            title: "칸쵸",
            price: 1200,
        },
        {
            id: 2,
            img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/8834932052257-1c6cd1f7-8c39-43a4-bb6d-b1277da352e7.jpg",
            title: "사과(박스)",
            price: 23000,
        },
        {
            id: 3,
            img: "https://shopping-phinf.pstatic.net/main_8403495/84034955612.1.jpg?type=f300",
            title: "헬스장",
            price: 500000000,
        }
    ]

    const [totalprice, setTotalprice] = useState(0);

    return(
        <div style={{ width: '60%', }}>

                    
                    {items.map((items) => {
                        return(
                            <CartItem 
                                key={items.id}
                                title={items.title}
                                img={items.img}
                                price={items.price}
                            />
                        )
                        setTotalprice(totalprice + items.price);
                        console.log(totalprice)
                    })}
                </div>
    )
}