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
    default: {
      return { ...state };
    }
  }
};

export default experimentReducer;
