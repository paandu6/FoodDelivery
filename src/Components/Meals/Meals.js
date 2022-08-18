import { Fragment } from "react";
import MealsList from "./MealList";
import MealsSummary from "./MealsSummary";

function Meals(){
    return(
        <Fragment>
            <MealsSummary />
            <MealsList />
        </Fragment>
    )
}

export default Meals