import Card from '../UI/Card';
import classes from './MealList.module.css'
import MealsItems from './MealsItems/MealsItems';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


function MealsList(){
    const MealsData =DUMMY_MEALS.map((meals)=>{
    return(<MealsItems name={meals.name} description={meals.description} price={meals.price} id={meals.id}/>)
    })
    return(
    
        <section className={classes.meals}>
            <Card>
            <ul>
            {MealsData}
            </ul>
            </Card>
        </section>

    )
}

export default MealsList