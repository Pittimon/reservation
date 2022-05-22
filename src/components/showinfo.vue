<template v-slot:default="dialog">
  <v-card>
    <v-toolbar
      color="#704232"
      dark
    >User info</v-toolbar>
    <v-card-text>
      <div class="text-h5 pa-6">
        <span>firstname: {{ id.first_name }}</span><br>
        <span>lastname: {{ id.last_name }}</span><br>
        <span>email: {{ id.email }}</span><br>
        <span>phone: {{ id.phone }}</span>
      </div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        text
        @click="closed"
        color="#704232"
      >Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    id: Object
  },
  methods: {
    closed() {
      this.$store.dispatch('setDialogsAction', false)
    }
  }
}
</script>
