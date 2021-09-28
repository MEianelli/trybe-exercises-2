import { Link } from 'react-router-dom';
import star from '../Images/star.png'
import React from 'react';

class Pokemon extends React.Component {
    constructor(){
        super();
        this.favsArray = [];
    }

    render() {
        const { name, type, averageWeight, image, id } = this.props.pokemon;
        const { showlink } = this.props;
        const favsString = window.localStorage.getItem('favorites');
        this.favsArray = JSON.parse(favsString);      

        return (
            <div className="pokemon">
                <div className="pokemonText">
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    {showlink && <Link to={ `/pokemon/${id}` }>More Info</Link>}
                </div>
                <img className="pokemonImg" src={image} alt={`${name} sprite`} />
                <div>
                    {this.favsArray.includes(id.toString()) && <img width="20" src={ star } alt="star"/>}
                </div>
            </div>
        );
    }
}

export default Pokemon;