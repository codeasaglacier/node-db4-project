
exports.up = async function(knex) {
  await knex.schema.createTable( "Recipes", ( table ) => {
    table.increments( "Id" )
    table.text( "Name" ).notNull().unique()
    table.text( "Ingredients" ).notNull()
    table.text( "Amount" ).notNull()
    table.text( "Steps" ).notNull()
  } )

  await knex.schema.createTable( "Ingredients", ( table ) => {
    table.increments( "Id" )
    table.text( "Ingredient" ).notNull().unique()
  } )

  // await knex.schema.createTable( "Recipes_Ingredients", ( table ) => {
  //   table.integer( "Recipes_Id" ).references( "Id" ).inTable( "Recipes" )
  //   table.integer( "Ingredients_Id" ).references( "Id" ).inTable( "Ingredients" )
  //   table.primary( [ "Recipes_Id", "Ingredients_Id" ] )
  // } )
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists( "Recipes" )

  await knex.schema.dropTableIfExists( "Ingredients" )
};
