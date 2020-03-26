import moment from "moment";
const initialState = {};

const experimentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXPERIMENTS_LOADED": {
      const monthdates = action.payload.map(day =>
        parseInt(moment(day.date).format("D"))
      );
      return {
        ...state,
        experiments: action.payload,
        experimentDays: monthdates
      };
    }
    case "UPDATE_EDIT_EXP": {
      const tempArr = [...state.experiments].filter(
        item => item._id !== action.payload._id
      );
      return {
        ...state,
        experiments: [...tempArr, action.payload]
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default experimentReducer;
