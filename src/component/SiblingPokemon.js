import React from "react"
import { connect } from "react-redux"

const SiblingPokemon = (props) => {
  const pokemonData = props.pokerManLikst.data.pokemon
  const pickedPokemon = pokemonData.find((item) => {
    return item.number === props.location.state.id
  })
  return (
    <div className="InnerContainer">
      <div className="descriptionItem">
        <h2 className="InnerNumber">{pickedPokemon.number}</h2>
        <p className="InnerDescription">{pickedPokemon.description}</p>
      </div>
      <div>
        <img src={pickedPokemon.image} className="ImageSize" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokerManLikst: state.pokerMan.pokerMan,
})

export default connect(mapStateToProps)(SiblingPokemon)
