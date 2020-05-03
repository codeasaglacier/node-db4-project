const express = require( "express" )

const recipesModel = require( "../models/recipes_model" )

const router = express.Router( {
  mergeParams: true
} )

router.get( '/', async ( req, res, next ) => {
  try {
    res.json( await recipesModel.getRecipes() )
  } catch ( err ) {
    next( err )
  }
} )

router.get( '/:id/shoppingList', async ( req, res, next ) => {
  try {
    res.json( await recipesModel.getShoppingList( req.params.id ) )
  } catch ( err ) {
    next( err )
  }
} )

router.get( '/:id/instructions', async ( req, res, next ) => {
  try {
    res.json( await recipesModel.getInstructions( req.params.id ) )
  } catch ( err ) {
    next( err )
  }
} )


module.exports = router