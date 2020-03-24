const initialState = {};

const experimentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXPERIMENTS_LOADED": {
      return { ...state, experiments: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default experimentReducer;
