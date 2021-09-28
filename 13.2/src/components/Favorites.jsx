import React from 'react';
import Pokemon from './Pokemon';

class Favorites extends React.Component {
  render() {
    const { pokemons } = this.props;
    const favsString = window.localStorage.getItem('favorites');
    const favsArray = JSON.parse(favsString);   
    const filtered = pokemons.filter( ({id}) => favsArray.map(Number).includes(id));

    return (
      <div>
        {filtered.map(pokemon => <Pokemon key={ pokemon.id } showlink={ true } pokemon={ pokemon }/>)}
      </div>
    );
  }
}

export default Favorites;