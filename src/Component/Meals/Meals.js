import React, { Fragment } from 'react'
import MealsSummary from './MealSumary'
import AvailableMeals from './AvilableMeals'
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals