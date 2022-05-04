<template lang="">
    <div>
        <v-card>
            <v-card-subtitle class="brown darken-2 white--text">ลูกค้าจองที่นั่ง</v-card-subtitle>
            <v-container class="white">
              <v-row  v-for="(itemrow, row) in $store.getters.cinema.filter(arr => arr.col === 1)" :key="row">
                <v-col md="2" class="mx-0 pa-1 body-2" v-for="(item, id) in $store.getters.cinema.filter(arr => arr.row === itemrow.row)" :key="id">
                  <v-btn v-if="item.sold" block disabled>
                      <v-icon size="38" color="grey">mdi-seat</v-icon>
                  </v-btn>
                  <v-btn v-else-if="item.reserved" block @click="cancelReserveSeat(item)">
                      <v-icon size="38" color="primary">mdi-seat</v-icon>
                  </v-btn>
                  <v-btn v-else block @click="reserveSeat(item)">
                      <v-icon size="38" color="success">mdi-seat-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-footer height="40" class="white">
              <p class="subtitle-2 brown--text pt-1">Reservation</p>
            </v-footer>
          </v-card>
    </div>
</template>
<script>
export default {
  methods: {
    reserveSeat(seat) {
      this.$store.dispatch('reserveSeatAction', seat)
      console.log(seat)
    },
    cancelReserveSeat(seat) {
      this.$store.dispatch('cancelReserveSeatAction', seat)
      console.log(seat)
    }
  }
}
</script>
<style lang="">
</style>
