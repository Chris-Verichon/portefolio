import data from '../data';

const initialState = {
  myData: data,
};

const personalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default personalReducer;
