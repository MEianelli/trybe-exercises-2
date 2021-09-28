import React from 'react';
import Pokemon from './Pokemon';
import Buttons from './Buttons';
import './Pokeindex.css';

class Pokeindex extends React.Component {
  constructor(props){
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.showAll = this.showAll.bind(this);
    this.state = {
      pokemons: props.pokemons,
      index: 0,
      disableBtn: false,
    }
    this.pokeTypes = [...new Set(this.state.pokemons.map( ({type}) => type))]
    this.state['types'] = this.pokeTypes;
  }

  handleNextClick(){
    this.setState( (old) => {
      let nextIndex = old.index + 1;
      if(nextIndex > old.pokemons.length - 1) nextIndex = 0;
      return {index: nextIndex}
    });
  }

  handleTypeClick({target}){
    const { pokemons } = this.props;
    const { innerHTML } = target;
    const filteredPokemons = pokemons.filter( ({type}) => type === innerHTML);
    const disableBtn = filteredPokemons.length <= 1 ? true : false;
    this.setState( () => (
      {
        pokemons: filteredPokemons,
        index: 0,
        disableBtn
      }
    ));
  }

  showAll(){
    const { pokemons } = this.props;
    const filteredPokemons = pokemons;
    this.setState( () => (
      {
        pokemons: filteredPokemons,
        index: 0,
        disableBtn: false,
      }
    ));
  }


  render() {
   const { pokemons, types, index, disableBtn } = this.state;

    return (
      <div className="pokemons">
        <Pokemon showlink={ true } pokemon={ pokemons[index] }/>
        <div className="buttons">
          <button onClick={ this.showAll }>All</button>
          { types.map( type => 
            <Buttons key={ type } type={ type } handleTypeClick={ this.handleTypeClick }/>
          )}
        </div>
        <button disabled={ disableBtn } onClick={ this.handleNextClick }>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokeindex;