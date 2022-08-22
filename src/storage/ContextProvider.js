import CartContext from "./cartContext"
import { useReducer } from "react"


const defaultvalue={
    items:[],
    totalamount:0,
}

function cartreducer(state,action){
    if(action.type === 'ADD'){

        const updatedamount =state.totalamount + action.item.amount * action.item.price

        const existingitemindex = state.items.findIndex(item =>(
            item.id === action.item.id
        ))
        let  updateditems
        const existingitem = state.items[existingitemindex]
        if(existingitem){
            const updateditem={
                ...existingitem,
                amount:existingitem.amount + action.item.amount
            }
            updateditems =[...state.items]
            updateditems[existingitemindex]=updateditem

        }else{
            updateditems=state.items.concat(action.item);
        }
        return{
            items:updateditems,
            totalamount:updatedamount
        }
    }
    if(action.type='REMOVE'){
        const existingitemindex = state.items.findIndex(item =>(
            item.id === action.id
        ))
        const existingitem = state.items[existingitemindex]
        const updatedtotalamount =state.totalamount -existingitem.price
        let updateditems;
        if(existingitem.amount ===1){
            updateditems=state.items.filter(item => item.id !== action.id)
        }else{
            const updateditem ={...existingitem, amount: existingitem.amount-1}
            updateditems=[...state.items]
            updateditems[existingitemindex]=updateditem
        }
        return{
            items:updateditems,
            totalamount:updatedtotalamount
        }
    }
    return defaultvalue
}
function ContextProvider(props){
    const[state,cartdispatch]=useReducer(cartreducer,defaultvalue)

    function AddToCartHandler(item){
        cartdispatch({type:'ADD',item:item})
    }

    function removetocartHandler(id){
        cartdispatch({type:'REMOVE',id:id})
    }
    const CtxItems={
        items:state.items,
        totalamount:state.totalamount,
        AddItem:AddToCartHandler,
        RemoveItem:removetocartHandler
    }
    return(
        <CartContext.Provider value={CtxItems}>
            {props.children}
        </CartContext.Provider>
    )
}

export default ContextProvider