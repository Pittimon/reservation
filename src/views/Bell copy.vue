<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBar/>
  </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
  name: 'Bell',

  components: {
    SideBar
  }
}
</script>
