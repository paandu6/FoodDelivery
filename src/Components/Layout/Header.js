import { Fragment } from "react";
import classes from './Header.module.css'
import meanlsImage from '../../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
function Header(){
    return(
        <Fragment>
            <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={meanlsImage} alt='A Full Of Delicious Food'/>
            </div>
        </Fragment>
    )
}
export default Header