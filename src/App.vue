<template>
  <div>
      <Navigation v-if="!navigation" />
        <router-view/>
      <Footer v-if="!navigation" />
  </div>
</template>

<script>

export default {
  name: 'App',
  // components: { Navigation, Footer },
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
.error {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>
