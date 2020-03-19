const initialState = { notes: null };

const notesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "NOTES_FETCHED": {
      return { ...state, notes: action.payload };
    }
    case "NOTE_POSTED": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "CLEAR_USER_DATA": {
      return initialState;
    }
    default: {
      return { ...state };
    }
  }
};

export default notesReducer;
