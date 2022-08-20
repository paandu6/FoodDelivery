import MealItemForm from './MealitemForm'
import classes from './MealsItems.module.css'
import CartContext from '../../../storage/cartContext'
import { useContext } from 'react'

function MealsItems(props){
    const ctx =useContext(CartContext)

    // const price = `$${props.price.toFixed(2)}`
    function AddToCart(enteredamountnumber){
        ctx.AddItem({
            name:props.name,
            price:props.price,
            amount:enteredamountnumber,
            id:props.id
        })
        console.log(enteredamountnumber)
    }
    
    return(
        <li className={classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm itemid={props.id} OnAddToCart={AddToCart}/>
            </div>
        </li>
    )
}
export default MealsItems
