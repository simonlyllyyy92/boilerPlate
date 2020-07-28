import React from "react"

import PokerMan from "./component/PokerMan"
import SiblingPokemon from "./component/SiblingPokemon"

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={PokerMan} />
        <Route path="/pokemanDetail" component={SiblingPokemon} />
      </Switch>
    </div>
  )
}

export default App
