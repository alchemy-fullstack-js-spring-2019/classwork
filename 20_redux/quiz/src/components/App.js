import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllPokemon from '../containers/pokemon/AllPokemon';
import PokemonById from '../containers/pokemon/PokemonById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllPokemon} />
        <Route exact path="/:id" component={PokemonById} />
      </Switch>
    </Router>
  );
}
