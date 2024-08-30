// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  locations: [],
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER_TO_LOCATION':
      // Check if the location already exists
      const locationExists = state.locations.some(location => location.name === action.payload.locationName);

      if (locationExists) {
        // Update existing location
        return {
          ...state,
          locations: state.locations.map(location =>
            location.name === action.payload.locationName
              ? { ...location, characters: [...location.characters, action.payload.character] }
              : location
          ),
        };
      } else {
        // Add new location
        return {
          ...state,
          locations: [
            ...state.locations,
            { name: action.payload.locationName, characters: [action.payload.character] },
          ],
        };
      }

    default:
      return state;
  }
}

// Create Redux store
const store = createStore(reducer);

export default store;
