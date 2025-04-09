const express = require('express');
const { createRecipes, getRecipes, getRecipe, updateRecipes, deleteRecipes } = require('../controllers/testController');

// create a new router
const testRouter = express.Router();

testRouter.post('/', createRecipes);
testRouter.get('/', getRecipes);
testRouter.get('/:id', getRecipe);
testRouter.put('/:id', updateRecipes);
testRouter.delete('/:id', deleteRecipes);

module.exports = testRouter;