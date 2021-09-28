const express = require('express');
const app = express();
let { recipes } = require('./data');

app.use(express.json());

const deleteIDMiddleWare = (req,res,_next ) => {
  const {id} = req.params
  if(!recipes.some( recipe => recipe.id === +id)){ 
    return res.status(401).json('recipe not found');
  }
  recipes = recipes.filter( recipe => recipe.id !== +id)
  res.status(200).json(recipes);
}

const changeNameMW = (req,res, _next ) => {
  const {id} = req.params
  if(!recipes.some( recipe => recipe.id === +id)){
    return res.status(401).json('recipe not found');
  }
  const newRecipe = {
    id: +id,
    name: req.query.nome,
    ingredientes: req.query.ingredientes,
  }
  recipes = recipes.filter( recipe => recipe.id !== +id)
  recipes.push(newRecipe)
  res.status(200).json(recipes);
}

app.delete('/recipe/:id', deleteIDMiddleWare);

app.get('/recipe/:id', changeNameMW)

app.listen(3000, () => console.log('Servidor Rodando'));