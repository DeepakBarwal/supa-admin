const DarkModeReducer = (state, action) => {
  if (action.type === "LIGHT") {
    return {
      darkMode: false
    }
  }
  else if (action.type === "DARK") {
    return {
      darkMode: true
    }
  }
  else if (action.type === "TOGGLE") {
    return {
      darkMode: !state.darkMode
    }
  }
  else {
    return state;
  }
};

export default DarkModeReducer;