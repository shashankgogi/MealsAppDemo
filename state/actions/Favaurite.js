export const TOGGLE_FAVAURITE = "TOGGLE_FAVAURITE";
export const SAVE_FILTERS = "SAVE_FILTERS";

export const favauriteToggleAction = (id) => {
  return { type: TOGGLE_FAVAURITE, mealId: id };
};

export const saveFilterSettings = (filterSettings) => {
  return { type: SAVE_FILTERS, filters: filterSettings };
};
