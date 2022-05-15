<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-card class="f-flex align-center rounded-lg mx-2" height="650"
      style="top: 50px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;" flat>
      <v-btn @click="timerfn" x-large flat icon><v-icon>mdi-bell</v-icon></v-btn>
      <p justify="center">The bell can press in {{ timeCount }} secs. {{ timerCount }}</p>
      <span class="number">{{ hbd }} {{ now }} {{ distance }}</span>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'Time',

  components: {
  },
  data() {
    return {
      timeCount: 15,
      count: true,
      timerCount: 15,
      distance: '',
      now: '',
      hbd: 'Jan 12, 2000'
    }
  },
  methods: {
    timerfn: {
      handler(count) {
        if (count === true) {
          setTimeout(() => {
            this.timeCount -= 1
          }, 1000)
        }
      },
      immediate: true
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.count = false
            this.timerCount -= 1
          }, 1000)
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  }
}

// mounted() {
//   this.now = new Date(this.hbd)
//   this.distance()
// },
// methods: {
//   timeCount() {
//     const now = new Date()
//     const distance = 'hbd' - 'now'
//     return distance
//   }
// }
</script>
