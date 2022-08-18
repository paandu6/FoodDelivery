import classes from './Cart.module.css'
import Modal from './Modal'
import ModalDummy from './ModalDummy'
function Cart(props){
    const cartItems=<ul className={classes['cart-items']}>{[{id:'c1',name:'Pizza',price:99,}].map((items)=>{
        return(
        <li>{items.name}</li>
        )
    })}</ul>
    return(
        <ModalDummy> 
        {cartItems}
        <div >
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>99</span>
                
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Cancel</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
        </ModalDummy>
    )
}
export default Cart