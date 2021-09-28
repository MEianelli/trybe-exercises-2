import Pokeindex from './components/Pokeindex';
import pokemons from './data';
import About from './components/About';
import Favorites from './components/Favorites';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import React from 'react';


class App extends React.Component {
  componentDidMount(){
    window.localStorage.setItem('favorites', JSON.stringify([]));
  }

  render (){
    return (
    <BrowserRouter >
      <div className="App">
        <h1>Pokedex</h1>
        <ul>
          <li><Link className="mainLinks" to="/">Home</Link></li>
          <li><Link className="mainLinks" to="/about">About</Link></li>
          <li><Link className="mainLinks" to="/favorites">Favorites</Link></li>
        </ul>
        <Switch>
          <Route path="/about" component={ About } /> 
          <Route path="/favorites" render={ (props) => <Favorites {...props} pokemons={ pokemons }/>} /> 
          <Route path="/pokemon/:pokeid" render={ (props) => <PokemonDetails {...props} pokemons={ pokemons }/>} /> 
          <Route path="/" render={ (props) => <Pokeindex {...props} pokemons={ pokemons }/>} /> 
        </Switch>
      </div>
    </BrowserRouter>
    )}
}

export default App;

