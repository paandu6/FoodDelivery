import CartIcon from "./CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../storage/cartContext"
import { useContext, useEffect,useState } from "react"
function HeaderCartButton(props){
    const[effectclass,seteffectclass]=useState(false)
    

    const cartctx = useContext(CartContext);
    const totalnumberofitems= cartctx.items.reduce((cur,item)=>{
        return cur+item.amount
    },0)
    const buttonclass = `${classes.button} ${effectclass ? classes.bump:''}`
    const {items}=cartctx
    useEffect(()=>{
    if(cartctx.items.length===1){
        return
    }
    seteffectclass(true)
    const timer =setTimeout(()=>{
        seteffectclass(false)
    },300)
    return()=>{
        clearTimeout(timer)
    }
    },[items])
    return(
        <button className={buttonclass} onClick={props.onClick}>
            <span className={classes.icon}>
            <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalnumberofitems}</span>
        </button>
    )
}
export default HeaderCartButton