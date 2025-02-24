import axios from 'axios';

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'
export const  FORM_ERROR = 'FORM_ERROR'



export const getSmurf = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    console.log("data from get request: ", res.data);
    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message})
  })
}

export const addSmurf = (newSmurf) => dispatch => {

  axios.post("http://localhost:3333/smurfs", newSmurf)
  .then(res => {
console.log('data from addSmurf: ', res);
dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
  })
  .catch(err => {
      console.log(err);
      dispatch({type: ADD_SMURF_FAILURE, payload: "Please fill out form"})
  })

}

export const formError = (error) => {
  return {
    type: FORM_ERROR,
    payload: error
  }
}


//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.