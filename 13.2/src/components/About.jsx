import React from 'react';
import aboutImg from '../Images/pokedexAbout.png';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <p>The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.</p>
        <img className="aboutImg" src={ aboutImg } alt="About"/>
      </div>
    );
  }
}

export default About;