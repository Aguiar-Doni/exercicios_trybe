export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SERACH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';


const INITIAL_STATE = {
    isLoading: false,
    character: '',
}

const characterReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case SEARCH_BEGIN:
        return {
          ...state,
          isLoading: true,
        }
    case SEARCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          character: action.character[0],
        }
    case SEARCH_ERROR:
        return {
          ...state,
          isLoading: false,
          erro: action.error,
        }
    default: return state
  }
}

export default characterReducer;