import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVAURITE, SAVE_FILTERS } from "../actions/Favaurite";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favauriteMeals: [],
};

const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVAURITE: {
      const mealIndex = state.favauriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      const favMealArr = [...state.favauriteMeals];

      if (mealIndex >= 0) {
        favMealArr.splice(mealIndex, 1);
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        favMealArr.push(meal);
      }

      return { ...state, favauriteMeals: favMealArr };
    }

    case SAVE_FILTERS: {
      const appliedFiltres = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFiltres.isGluten && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFiltres.isVegan && !meal.isVegan) {
          return false;
        }
        if (appliedFiltres.isVegetarian && !meal.isVegitarian) {
          return false;
        }
        if (appliedFiltres.isLactos && !meal.isLactosFree) {
          return false;
        }
        return true;
      });

      return { ...state, filteredMeals: updatedFilteredMeals };
    }
    default:
      return state;
  }
};

export default MealsReducer;
