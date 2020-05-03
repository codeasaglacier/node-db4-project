
exports.seed = async function(knex) {
  await knex( "Recipes" ).truncate()
  await knex( "Ingredients" ).truncate()
}
