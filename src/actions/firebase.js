import * as types from '../../src/constants/actionTypes'
import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1-IV82RKxBGYnb-5mQjr7LnA7WnzPrWE",
  authDomain: "youmerpg-56f2e.firebaseapp.com",
  databaseURL: "https://youmerpg-56f2e.firebaseio.com",
  projectId: "youmerpg-56f2e",
  storageBucket: "youmerpg-56f2e.appspot.com",
  messagingSenderId: "838078933848"
};
firebase.initializeApp(config);

export function watchAuthStatus() {

  return dispatch => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch({
          type: types.LOGIN,
          payload: user
        });
      }
      else {
        dispatch({
          type: types.LOGOUT
        });
      }
    });
  };
}

export function login(email, password) {

  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
      // Sign-in successful.
      dispatch({
        type: types.LOGIN,
        payload: user
      });
    }).catch(function(error) {
      // TODO: Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      // ...
    });
  };
}

export function logout() {

  return dispatch => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      dispatch({
        type: types.LOGOUT
      });
    }).catch(function(error) {
      // An error happened.
      // TODO: Handle Errors here.
      console.log(error.code);
      console.log(error.message);
    });
  };
}

export function register() {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
      dispatch({
        type: types.LOGIN,
        payload: user
      });
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };
}
