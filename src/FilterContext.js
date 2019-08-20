import React, { useReducer, createContext } from 'react';
const SET_QUERY = 'SET_QUERY';
const RESET_FILTERS = 'RESET_FILTERS';
const SET_RAITING = 'SET_RAITING';

const FilterContext = createContext();

const initialState = {
  raiting: 0,
  query: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_FILTERS:
      return initialState;
    case SET_QUERY:
      return { ...state, query: action.query };
    case SET_RAITING:
      return { ...state, raiting: action.raiting };
    default:
      return state;
  }
};

function FilterContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
}

const FilterContextConsumer = FilterContext.Consumer;

export {
  FilterContext,
  FilterContextProvider,
  FilterContextConsumer,
  SET_QUERY,
  RESET_FILTERS,
  SET_RAITING,
};
