<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
<div>
  <v-card color="#eeeeee">
    <v-container >
      <v-row>
        <v-col align="center" justify="center">
          <v-card width="570px">
            <v-card-subtitle class="brown darken-2 white--text">สถานะการจอง</v-card-subtitle>
            <v-container class="white">
              <v-row  v-for="(itemrow, row) in $store.state.cinema.filter(arr => arr.col === 1)" :key="row">
                <v-col md="2" class="mx-0 pa-1 body-2" v-for="(item, id) in $store.state.cinema.filter(arr => arr.row === itemrow.row)" :key="id">
                  <p>{{ item.seat }} :
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
          <Reservation/>
        </v-row>
      <v-row>
        <Administrator v-if="this.$store.state.adminui"/>
      </v-row>
    </v-container>
  </v-card>
</div>
</v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import Administrator from '../components/Administrator.vue'
import Reservation from '../components/Reservation.vue'

export default {
  name: 'Reserve',

  components: {
    Administrator,
    Reservation
  },
  async created() {
    const snapshot = await firebase.firestore().collection('reserve').get()
    const cinema = snapshot.docs.map((doc) => {
      return doc.data()
    })
    this.$store.dispatch('setCinemaAction', cinema)
    console.log(this.$store.state.cinema)
  }
}
</script>
