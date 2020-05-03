const express = require( "express" )

const ingredientsModel = require( "../models/ingredients_model" )

const router = express.Router( {
  mergeParams: true
} )

router.get( "/ingredients/:id/recipes", async ( req, res, next ) => {
  try {
    res.json( await ingredientsModel.getRecipesByIngredient( req.params.ingredient ) )
  } catch ( err ) {
    next( err )
  }
} )

module.exports = router