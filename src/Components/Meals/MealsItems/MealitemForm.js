import classes from './MealItemForm.module.css'
import MealItemInput from './MealItemInput'
function MealItemForm(props){
    return(
        <form className={classes.form}>
            <MealItemInput label='Amount'
            input={{
                id:'amount_'+props.itemid,
                type:'number',
                defaultValue:1,
                step:1,
                min:1,
                max:5
            }}/>
            <button> +ADD</button>
        </form>
    )
}
export default MealItemForm