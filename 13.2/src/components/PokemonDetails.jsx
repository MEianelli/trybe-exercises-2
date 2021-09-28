import React from 'react';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      a: '',
    }
  }

  handleChange({target}){
    if(target.checked){
      this.savetoLocalStorage(target.value);
    } else{
      this.removeLocalStorage(target.value);
    }
    this.setState( () => ({a: ''}));
  }

  savetoLocalStorage(id){
    const favsString = window.localStorage.getItem('favorites');
    const favsArray = JSON.parse(favsString);
    if(!favsArray.includes(id)) favsArray.push(id);
    window.localStorage.setItem('favorites',JSON.stringify(favsArray));
  }

  removeLocalStorage(id){
    const favsString = window.localStorage.getItem('favorites');
    const favsArray = JSON.parse(favsString);
    if(favsArray.includes(id)){
      const index = favsArray.indexOf(id);
      favsArray.splice(index,1);
    }
    window.localStorage.setItem('favorites',JSON.stringify(favsArray));
  }

  render() {
    const { match: {params: {pokeid}} } = this.props;
    const { pokemons } = this.props;
    const pokemon = pokemons.find( ({id}) => id === +pokeid); 
    const favsString = window.localStorage.getItem('favorites');
    const favsArray = JSON.parse(favsString);   

    return (
      <div>
        <h2> { pokemon.name } Details </h2>
        <Pokemon pokemon={ pokemon } showLink={ false }/>
        <p>More Info</p>
        <a href={ pokemon.moreInfo } target="_blank" rel="noreferrer">Details</a>
        <br/>
        <label htmlFor="favorite">
          Salvar como favorito?
          <input 
            id="favorite" 
            type="checkbox" 
            value={ pokemon.id } 
            onChange={ this.handleChange }
            checked={ favsArray.includes(pokemon.id.toString()) }
            />
        </label>
      </div>
    );
  }
}

export default PokemonDetails;