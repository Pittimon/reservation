<template lang="">
    <div sm="12" md="6" class="mx-auto mt-6">
        <v-card width="570px">
            <v-card-subtitle color="" class="brown darken-2 white--text">เจ้าหน้าที่ Admin ยืนยัน
            </v-card-subtitle>
            <v-container class="white">
              <v-row  v-for="(itemrow, row) in $store.state.cinema.filter(arr => arr.col === 1)" :key="row">
                <v-col md="2" class="mx-0 pa-1 body-2" v-for="(item, id) in $store.state.cinema.filter(arr => arr.row === itemrow.row)" :key="id">
                  <v-btn v-if="item.reserved" block
                     @click="cancelPopup(item)">
                      <v-icon size="38" color="red">mdi-seat</v-icon>
                  </v-btn>
                  <v-btn v-else color="success" block disabled>
                      <v-icon size="38">mdi-seat-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-dialog
              :retain-focus="false"
              persistent
              v-model="$store.getters.dialogc"
              width="500">
              <Dialogc :seatId='$store.getters.seatobj'/>
              </v-dialog>
            <v-footer height="40" class="white">
              <p class="subtitle-2 brown--text pt-1">Administrator</p>
            </v-footer>
          </v-card>
    </div>
</template>
<script>
// import firebase from 'firebase/app'
import Dialogc from './Dialogc.vue'

export default {
  data() {
    return {
      objprop: {},
      c: false
    }
  },
  methods: {
    soldSeat(seat) {
      this.$store.dispatch('soldSeatAction', seat)
    },
    cancelPopup(seat) {
      const d = !this.c
      this.$store.dispatch('setDialogCancleAction', d)
      // console.log(seat)
      const objprop = seat
      this.$store.dispatch('setPropObjAction', seat)
      console.log(objprop)
    }
  },
  components: {
    Dialogc
  }
}
</script>
<style>
</style>
