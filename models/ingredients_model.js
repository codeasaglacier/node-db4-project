const db = require( "../data/config" )


function getRecipesByIngredient( ingredient ) {
  return db( "ingredients" )
    .join( "recipes", "recipes.ingredients", "ingredients.name" )
    .where( "name", ingredient )
    .select( "recipes.name" )
}


module.exports = {
  getRecipesByIngredient
}