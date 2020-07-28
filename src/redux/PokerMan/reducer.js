const INITIAL_STATE = {
  pokerMan: [],
  loading: true,
}

const pokermanReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_POKERMAN_SUCCESS":
      return {
        ...state,
        pokerMan: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default pokermanReducer
