
exports.seed = async function(knex) {
  await knex( "Ingredients" ).insert( [
    { Ingredient: "Bread" },
    { Ingredient: "Water" }
  ] )
};
