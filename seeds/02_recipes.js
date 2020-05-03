
exports.seed = async function(knex) {
  await knex( "Recipes" ).insert( [
    { Name: "Toast", Ingredients: "Bread", Amount: "As much as you want sugar", Steps: "1) Place bread in toaster 2) Select desired toast level 3) Press toaster start button 4) Done when toaster pops"  },
    { Name: "Boiled water", Ingredients: "Water", Amount: "As much as you want sugar", Steps: "1) Place water in pot up to 3/4 full 2) Select high heat 3) Do not watch, but stay close 4) Done when boiling" },
    { Name: "Ice", Ingredients: "Water", Amount: "As much as you want sugar", Steps: "1) Place water in ice tray or other container 2) Put in freezer 3) Done when frozen" }
  ] )
}
