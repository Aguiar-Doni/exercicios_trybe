import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_ERROR } from "../reducers/characterReducer";

export const serachBegin = () => (
  { type: SEARCH_BEGIN }
);

export const serachSuccess = (character) => (
  { 
    type: SEARCH_SUCCESS,
    character,
  }
);

export const serachError = (error) => (
  {
    type: SEARCH_ERROR,
    error,
  }
);

export function thunkCharacter(name) {
  return async (dispatch) => {
    try {
      dispatch(serachBegin());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(serachSuccess(data));
    } catch (error) {
        dispatch(serachError(error));
    }
  };
};