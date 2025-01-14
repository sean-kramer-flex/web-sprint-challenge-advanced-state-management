import { FETCH_SMURFS_REQUEST, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, FORM_ERROR } from '../actions'


const initialState = {
  smurfs: [],
  loading: false,
  error: ''
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_SMURFS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          loading: false,
          smurfs: action.payload,
          error: ''
        }
        case FETCH_SMURFS_FAILURE:
          return {
            ...state,
            loading: false,
            smurfs: [],
            error: action.payload
          }
          case ADD_SMURF_SUCCESS:
            return {
              ...state,
              smurfs: [
                ...state.smurfs,
                action.payload
              ]
            }
            case ADD_SMURF_FAILURE:
              return {
                ...state,
                error: action.payload
              }
              case FORM_ERROR:
                return {
                  ...state
                }
          default:
            return state
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary