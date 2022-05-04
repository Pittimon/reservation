<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBar/>
    <v-container>
    <hello-world/>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    SideBar,
    HelloWorld
  },
  data() {
    return {
    }
  }
}
</script>
