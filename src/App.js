import React from 'react';
const Pokemon = React.lazy(() => import('./Pokemon'))

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
        {showPokemonDescription && 
          <React.Suspense fallback={<p>...Loading</p>}>
            <Pokemon />
          </React.Suspense>
        }
      </div>
    );
  }
}
export default App;