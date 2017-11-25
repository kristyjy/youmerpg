import * as types from '../constants/actionTypes';
import initialState from '../state/initialState';

export default function(state = initialState.firebase, action) {

  switch (action.type) {

    case types.LOGIN:
      return Object.assign({...state}, {user: action.payload});

    case types.LOGOUT:
      return Object.assign({...state}, {user: null});

    default:
      return state;
  }
}
