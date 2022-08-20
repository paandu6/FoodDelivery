import classes from './Cart.module.css'
import Modal from './Modal'
import { useContext } from 'react'
import CartContext from '../../storage/cartContext'
import CartItem from './CartItem'

function Cart(props){
    const cartctx = useContext(CartContext)
    const totalamount = `$${cartctx.totalamount.toFixed(2)}`
    const hasitems=cartctx.items.length>0
    function RemoveHandler(id){
        cartctx.RemoveItem(id)
    }
    function AddHandler(item){
        cartctx.AddItem({...item,amount:1})
    }

    const cartItems=(<ul className={classes['cart-items']}>{cartctx.items.map((item)=>(
        <CartItem key={item.is} name={item.name} price={item.price} amount={item.amoun}
        onRemove={RemoveHandler.bind(null,item.id)}
        onAdd ={AddHandler.bind(null,item)}
        />
    ))}</ul>)
    return(
        <Modal onClick={props.onClick}> 
        {cartItems}
        <div >
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalamount}</span>
                
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Cancel</button>
                {hasitems && <button className={classes.button}>Order</button>}
            </div>
        </div>
        </Modal>
    )
}
export default Cart