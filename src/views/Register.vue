<template>
  <div class="form-wrap">
      <v-form class="register" v-model="valid">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Create Your Account</h2>
        <div class="inputs">
            <v-text-field
              solo
              label="First Name"
              v-model="firstname"
              prepend-inner-icon="mdi-account"
              type="text"
              clearable
              clear-icon="mdi-close-circle"
              @click:clear="clearMessage"
              required
              :rules="[
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                v => (v && v.length >= 3) || 'Name must be more than 3 characters',
              ]"></v-text-field>
            <v-text-field
              solo
              label="Last Name"
              v-model="lastname"
              prepend-inner-icon="mdi-account"
              type="text"
              clearable
              clear-icon="mdi-close-circle"
              @click:clear="clearMessage"
              required></v-text-field>
            <v-text-field
              solo
              label="Phone"
              v-model="phone"
              prepend-inner-icon="mdi-phone"
              type="text"
              clearable
              clear-icon="mdi-close-circle"
              @click:clear="clearMessage"
              required
              :rules="[
                v => !!v || 'Phone number is required',
                v => (v && v.length <= 10) || 'Phone number must be less than 10 characters',
                ]"></v-text-field>
            <v-text-field
              solo
              label="Email"
              v-model="email"
              prepend-inner-icon="mdi-email"
              clearable
              clear-icon="mdi-close-circle"
              @click:clear="clearMessage"
              required
              :rules="[
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
              ]"></v-text-field>
            <v-text-field
              solo
              label="Password"
              v-model="password"
              prepend-inner-icon="mdi-lock"
              type="password"
              clearable
              clear-icon="mdi-close-circle"
              @click:clear="clearMessage"
              required
              :rules="[v => !!v || 'Password is required']"></v-text-field>
          <!-- <div class="input">
            <input type="text" placeholder="First Name" v-model="firstname" />
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" v-model="lastname" />
            <v-icon class="icon" style="left:10px;">mdi-account</v-icon>
            <user class="icon" />
          </div>
          <div class="input">
            <input type="text" placeholder="Phone" v-model="phone" />
            <v-icon class="icon" style="left:10px;">mdi-phone</v-icon>
            <user class="icon" />
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <v-icon class="icon" style="left:10px;">mdi-email</v-icon>
            <email class="icon" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <v-icon class="icon" style="left:10px;">mdi-lock</v-icon>
            <password class="icon" />
          </div> -->
          <div v-show="error" class="error">{{ this.errorMsg }}</div>
        </div>
        <v-btn
        type="submit"
        rounded
        depressed
        @click.prevent="register">Sign Up</v-btn>
        <div class="angle"></div>
      </v-form>
    <div class="background"></div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

// import db from '../firebase/initFirebase'

export default {
  name: 'Register',
  data() {
    return {
      fistname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      error: null,
      errorMsg: null,
      id: this.$store.getters.state.user,
      valid: true
    }
  },
  computed: {
    formIsValid() {
      return (
        this.firstname && this.phone && this.email && this.password
      )
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
    },
    clearMessage() {
      this.message = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
  max-width: 350px;
}
</style>
