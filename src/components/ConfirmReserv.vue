<template>
                <v-card>
                  <v-card-title class="text-h5 brown darken-2">
                    ต้องการจองโต๊ะ {{ }} ใช่หรือไม่
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
                      @click="reserveSeat(seatId)"
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
    reserveSeat(seat) {
      console.log(seat)
      this.$store.dispatch('reserveSeatAction', seat)
      this.$store.dispatch('setDialogConfirmAction', false)
    },
    fnDialog() {
      this.$store.dispatch('setDialogConfirmAction', false)
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
