import axios from 'axios'

const axo = axios.create({
  baseURL: 'https://us-central1-reservation-1137b.cloudfunctions.net/api/menu'
})

export default axo
