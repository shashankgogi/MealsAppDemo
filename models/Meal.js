class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imgUrl,
    duration,
    ingredins,
    steps,
    isGlutenFree,
    isVegan,
    isVegitarian,
    isLactosFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imgUrl = imgUrl;
    this.duration = duration;
    this.ingredins = ingredins;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegitarian = isVegitarian;
    this.isLactosFree = isLactosFree;
  }
}
export default Meal;
