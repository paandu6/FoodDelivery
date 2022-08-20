import classes from './MealItemInput.module.css'
import React from 'react'


const MealItemInput=React.forwardRef((props,ref)=>{
    return(
        <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  ref={ref}{...props.input} ></input>
        </div>
    )
})
export default MealItemInput