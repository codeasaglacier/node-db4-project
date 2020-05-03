const db = require( "../data/config" )


function getRecipes() {
  return db( "recipes" )
    .select( "recipes.id", "recipes.name" )
}

function getShoppingList( id ) {
  return db( "recipes" )
    .where( { id } )
    .select( "recipes.ingredients", "recipes.amount" )
}

function getInstructions( id ) {
  return db( "recipes" )
  .where( { id } )
  .select( "recipes.steps" )
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}