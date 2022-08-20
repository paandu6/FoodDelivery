
import classes from './MealItemForm.module.css'
import MealItemInput from './MealItemInput'
import React, { useRef } from 'react'


function MealItemForm(props){
    const inputref=useRef()

    function FormSubmitHandler(event){
        event.preventDefault();
        const enteredamount=inputref.current.value
        const enteredamountnumber= +enteredamount;
        if(enteredamount.trim().length === 0 || enteredamountnumber <1 || enteredamountnumber >5){
            return
        }
        props.OnAddToCart(enteredamountnumber)
    }

    return(
        <form className={classes.form} onSubmit={FormSubmitHandler}>
            <MealItemInput label='Amount'
            ref={inputref}
            input={{
                id:'amount_'+props.itemid,
                type:'number',
                defaultValue:1,
                step:1,
                min:1,
                max:5
            }}/>
            <button > +ADD</button>
            
        </form>
    )
}
export default MealItemForm