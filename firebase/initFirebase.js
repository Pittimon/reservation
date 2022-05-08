import firebase from 'firebase/app'

const clientCredentials = {
  apiKey: 'AIzaSyAVHih_gdbnTw1SDQwPsPDrvgcpER894Q4',
  authDomain: 'reservation-1137b.firebaseapp.com',
  projectId: 'reservation-1137b',
  storageBucket: 'reservation-1137b.appspot.com',
  messagingSenderId: '434110369528',
  appId: '1:434110369528:web:abef19c64f56be7f60350d',
  measurementId: 'G-JWPVHMEF7H'
}

console.log(clientCredentials)

const initFirebase = () => {
  firebase.initializeApp(clientCredentials)
}

export default initFirebase
