<template>
                <v-card>
                  <v-card-title class="text-h5 brown darken-2">
                    ต้องการยกเลิกจองหรือไม่
                  </v-card-title>
                  <v-card-text class="mt-3">
                    ถ้าต้องการกดใช่ ไม่ต้องการกดไม่
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="brown darken-2"
                      text
                      @click="cancelSoldSeat(seatId)"
                    >
                      ใช่
                    </v-btn>
                    <v-btn
                      color="brown darken-2"
                      text
                      @click="fnDialog"
                    >
                      ไม่
                    </v-btn>
                  </v-card-actions>
                 </v-card>
</template>
<script>

export default {
  data() {
    return {
      showid: '',
      dialog2: true,
      loading: false
    }
  },
  methods: {
    //  fnCancle(id) {
    //   console.log(id)
    //   this.loading = true
    //   this.$store.dispatch('setDialogCancleAction', !this.dialog2)
    cancelSoldSeat(seat) {
      console.log(seat)
      this.$store.dispatch('cancleSoldSeatAction', seat)
      this.$store.dispatch('cancelReserveSeatAction', seat)
      const d = !this.dialog2
      this.$store.dispatch('setDialogCancleAction', d)
    },
    fnDialog() {
      const d = !this.dialog2
      this.$store.dispatch('setDialogCancleAction', d)
      console.log(d)
    }
  },
  props: {
    seatId: {
      type: Object
    }
  }
}
</script>
<style lang="">

</style>
