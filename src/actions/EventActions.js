import {
  CREATE_EVENT
} from './types'
import firebase from 'firebase'

export const createEvent = (event) => {
  return (dispatch) => {
    firebase.firestore().collection('events')
    .add(event).then(() => {
      dispatch({
        type: CREATE_EVENT,
        payload: event
      })
    }).catch((err) => {
      dispatch({
        type: CREATE_EVENT,
        paylaod: err
      })
    })
  }
}