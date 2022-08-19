import classes from './Cart.module.css'
import Modal from './Modal'
function Cart(props){
    const cartItems=<ul className={classes['cart-items']}>{[{id:'c1',name:'Pizza',price:99,}].map((items)=>{
        return(
        <li>{items.name}</li>
        )
    })}</ul>
    return(
        <Modal onClick={props.onClick}> 
        {cartItems}
        <div >
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>99</span>
                
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Cancel</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
        </Modal>
    )
}
export default Cart