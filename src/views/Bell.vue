<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container>
      <v-card class="f-flex align-center rounded-lg mx-2" height="650"
      style="top: 50px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;" flat>
        <v-row jusify="center">
          <v-col cols="12" md="12">
            <v-card
            class="f-flex align-center rounded-lg mx-2" height="350" flat>
            <v-list-item class="text-center mt-10" active-class="border">
              <v-list-item-content>
                    <v-icon size="300" color="#704232">mdi-bell</v-icon>
              </v-list-item-content>
            </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="12" md="12" jusify="center">
            <v-card flat class="rounded-lg mx-5">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h4 brown--text">
                  Table No.1
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">Press the bell to call waiter/waitress</v-list-item-subtitle>
                <strong class="mt-3">
                  rest for 15 sec
                </strong>
              </v-list-item-content>
            </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Bell',

  components: {
  },
  methods: {
  },
  data() {
    return {}
  }
}
</script>
