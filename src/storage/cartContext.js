import React from "react"

const CartContext=React.createContext(()=>{
    return(
        {
            items:[],
            totalamount:0,
            AddToCart:(item)=>{},
            removecart:(id)=>{}
        }
    )
})
export default CartContext