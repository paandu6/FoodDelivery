import classes from './MealItemInput.module.css'
function MealItemInput(props){
    return(
        <div className={classes.input}>
        <label htmlfor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
        </div>
    )
}
export default MealItemInput