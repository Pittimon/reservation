<template>
  <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Create Your Account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="First Name" v-model="firstname" />
            <v-icon class="icon">mdi-account</v-icon>
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" v-model="lastname" />
            <v-icon class="icon">mdi-account</v-icon>
            <user class="icon" />
          </div>
          <div class="input">
            <input type="text" placeholder="Phone" v-model="phone" />
            <v-icon class="icon">mdi-account</v-icon>
            <user class="icon" />
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <v-icon class="icon">mdi-email</v-icon>
            <email class="icon" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <v-icon class="icon">mdi-lock</v-icon>
            <password class="icon" />
          </div>
          <div v-show="error" class="error">{{ this.errorMsg }}</div>
        </div>
        <v-btn rounded depressed @click.prevent="register">Sign Up</v-btn>
        <div class="angle"></div>
      </form>
    <div class="background"></div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import email from '../assets/Icon/email.svg'
import password from '../assets/Icon/password.svg'
import user from '../assets/Icon/user.svg'

// import db from '../firebase/initFirebase'

export default {
  name: 'Register',
  components: {
    email,
    password,
    user
  },
  data() {
    return {
      fistname: null,
      lastname: null,
      phone: null,
      email: null,
      password: null,
      error: null,
      errorMsg: null,
      id: this.$store.getters.state.user
    }
  },
  methods: {
    async register() {
      if (this.email !== '' || this.password !== '' || this.firstname !== '' || this.lastname !== '' || this.phone !== '') {
        this.error = false
        this.errorMsg = ''
        const firebaseAuth = await firebase.auth()
        await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
        // const result = await createUser
        // const dataBase = db.collection('users').doc(result.user.uid)
        // await dataBase.set({
        //   firtname: this.firstname,
        //   lastname: this.lastname,
        //   username: this.username,
        //   email: this.email
        // })
        this.$router.push({ name: 'Home' })
      }
      this.error = true
      this.errorMsg = 'Please fill out all the fields!'
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
  max-width: 350px;
}
</style>
