import {

} from './types'
import firebase from 'firebase'

export const createUser = () => {
  return (dispatch) => {
    // check for current user
    if (firebase.auth().currentUser) {
      return ///prompt
    }


    
  }
}