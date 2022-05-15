<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container>
    <hello-world/>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },
  data() {
    return {
    }
  }
}
</script>
