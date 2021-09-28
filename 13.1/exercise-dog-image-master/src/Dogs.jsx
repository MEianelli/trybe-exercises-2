import React from 'react';

class Dogs extends React.Component {
  constructor() {
    super();
    this.fetchDogs = this.fetchDogs.bind(this);
    this.handleAddDog = this.handleAddDog.bind(this);
    this.state = {
      currentDog: '',
      loading: true,
      allDogs: [],
    }
  }

  async fetchDogs() {
    this.setState({ loading: true }, async () => {
      const requestNewDog = await fetch('https://dog.ceo/api/breeds/image/random');
      const requestJson = await requestNewDog.json();
      this.setState(() => ({ currentDog: requestJson.message, loading: false }));
    });
  }

  componentDidMount() {
    this.fetchDogs();
  }

  renderDogImg(dog) {
    return (
      <img className="dogsImg" src={ dog } alt="DOG" />
    );
  }

  handleAddDog() {
    this.setState(({ allDogs, currentDog }) => ({ allDogs: [...allDogs, currentDog] }))
    this.fetchDogs();
  }

  render() {
    const { loading, allDogs, currentDog } = this.state;
    const loadingDiv = <p className="loadingDiv">Loading...</p>;
    return (
      <div className="dogContainer">
        {allDogs.map(dog => this.renderDogImg(dog)) }
        <div>{ loading ? loadingDiv : this.renderDogImg(currentDog) }</div>
        <button onClick={ this.handleAddDog }>MORE DOGS</button>
      </div>
    );
  }
}

export default Dogs;