<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
<div>
  <v-card color="#eeeeee">
    <v-container>
      <v-row>
        <v-col sm="12" md="6" class="mx-auto">
          <v-card>
            <v-card-subtitle class="brown darken-2 white--text">สถานะการจอง</v-card-subtitle>
            <v-container class="white">
              <v-row  v-for="(itemrow, row) in $store.state.cinema.filter(arr => arr.col === 1)" :key="row">
                <v-col md="2" class="mx-0 pa-1 body-2" v-for="(item, id) in $store.state.cinema.filter(arr => arr.row === itemrow.row)" :key="id">
                  <p>{{item.seat}} :
                    <span v-if="item.reserved" class="primary--text">จองแล้ว</span>
                    <span v-else class="success--text">ยังว่าง</span>
                  </p>
                </v-col>
              </v-row>
            </v-container>
            <v-footer height="40" class="white">
              <p class="subtitle-2 brown--text pt-1">Home</p>
            </v-footer>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="6">
          <Administrator/>
        </v-col>
        <v-col sm="12" md="6">
          <Reservation/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</div>
</v-app>
</template>

<script>
import Administrator from '../components/Administrator.vue'
import Reservation from '../components/Reservation.vue'

export default {
  name: 'Reserve',

  components: {
    Administrator,
    Reservation
  }
}
</script>
