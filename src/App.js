import React from 'react';
import Pokemon from "./Pokemon";

class App extends React.Component {
  state = {
    showPokemonDescription: false
  };
  showPokemonDescription = () => {
    this.setState({
      showPokemonDescription: true
    });
  };
  render() {
    const { showPokemonDescription } = this.state;
    return (
      <div>
        {!showPokemonDescription && (
          <button onClick={this.showPokemonDescription}>
            Show Charmander Description
          </button>
        )}
        {showPokemonDescription && <Pokemon />}
      </div>
    );
  }
}
export default App;