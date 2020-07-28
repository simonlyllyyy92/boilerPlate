import React from "react"
import { connect } from "react-redux"
import { getPokerMan } from "../redux/PokerMan/action"

class PokerMan extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPokerMan()
  }

  handleOnClick = (props) => {
    this.props.history.push({
      pathname: "/pokemanDetail",
      state: { id: props.number, image: props.image },
    })
  }

  render() {
    return this.props.loadingStatus ? (
      <div>Loading...</div>
    ) : (
      <>
        <h1 className="header">My Pokemon</h1>
        <div className="container">
          <div className="directory">
            {this.props.pokerManLikst.data.pokemon.map((item) => {
              return (
                <div className="pokemonItem">
                  <div className="pokemonTitle">{item.name}</div>
                  <div
                    className="pokemonImage"
                    onClick={() => this.handleOnClick(item)}
                  >
                    <img src={item.image} width="200" height="200" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPokerMan: () => dispatch(getPokerMan()),
})

const mapStateToProps = (state) => ({
  pokerManLikst: state.pokerMan.pokerMan,
  loadingStatus: state.pokerMan.loading,
})

export default connect(mapStateToProps, mapDispatchToProps)(PokerMan)
