import { Fragment, forwardRef } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = forwardRef(function Meals(props, ref) {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals ref={ref}/>
    </Fragment>
  );
});

export default Meals;
