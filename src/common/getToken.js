import firebase from 'firebase/app'
import 'firebase/auth'

export default async () => {
  try {
    const auth = firebase.auth()
    const user = auth.currentUser
    const idToken = await user.getIdToken(true)
    return idToken
  } catch (error) {
    console.log(error)
    return error
  }
}
