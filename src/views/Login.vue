<template>
  <div class="form-wrap">
      <form class="login">
        <p class="login-register">
          Don't have an account?
          <router-link class="router-link" :to="{ name: 'Register' }">Register</router-link>
        </p>
        <h2 >Login to Website</h2>
        <p style="margin-bottom: 20px; color: red; font-size: 12px;">{{ errormsg }}</p>
        <!-- <v-text-field
          solo
          label="Email"
          v-model="email"
          prepend-inner-icon="mdi-email"
          clearable
          clear-icon="mdi-close-circle"
          @click:clear="clearMessage"
          required></v-text-field>
        <v-text-field
          solo
          label="Password"
          v-model="password"
          prepend-inner-icon="mdi-lock"
          type="password"
          clearable
          clear-icon="mdi-close-circle"
          @click:clear="clearMessage"
          required></v-text-field> -->
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <v-icon class="icon" style="left:10px;">mdi-email</v-icon>
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <v-icon class="icon" style="left:10px;">mdi-lock</v-icon>
          </div>
        </div>
        <router-link class="forgotpassword" :to="{ name: 'ForgotPassword' }">
          Forgot your Password?
        </router-link>
        <v-btn :loading="loading" rounded depressed @click.prevent="login">Sign In</v-btn>
        <div class="angle"></div>
      </form>
    <div class="background"></div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      errormsg: '',
      loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential
          console.log(user)
          this.$router.push({ name: 'Home' })
          this.loading = false
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
          this.errormsg = error.message
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 30px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;
      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus {
            outline: none;
          }
        }
        .icon {
          width:12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forgotpassword {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url('../assets/background.png');
    width: 100%;
    height: 100%;
    @media (min-weight: 900px) {
      display: initial;
    }
  }
}
</style>
