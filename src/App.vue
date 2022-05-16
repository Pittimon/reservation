<template>
  <div>
      <SideBar v-if="!navigation" />
      <div style="margin-left: 120px;">
      <router-view/>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  },
  data: () => {
    return {
      navigation: null
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgotPassword') {
        this.navigation = true
        return
      } this.navigation = false
    }
  },
  created() {
    this.checkRoute()
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const { uid } = user
        console.log(uid)
        this.$store.dispatch('setUserAction', uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.google.com/specimen/Quicksand");

* {
  font-family: 'Quicksand', sans-serif
}
/* .error {
  text-align: center;
  font-size: 12px;
  color: red;
} */
</style>
