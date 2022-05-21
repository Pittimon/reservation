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
import firebase from 'firebase/app'
import 'firebase/firestore'

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
    async reserveSeat(seatre) {
      console.log(seatre)
      const snapshot = firebase.firestore().collection('reserve')
      const getsnapshot = await snapshot.get()
      const showdata = getsnapshot.docs.map((doc) => {
        return doc
      })
      console.log(showdata)
      const cinema = showdata.filter((obj) => {
        return obj.data().seat === seatre.seat
      })
      console.log(cinema[0].id)
      await snapshot.doc(cinema[0].id).update({
        reserved: true,
        user: this.$store.state.user
      })
      this.$store.dispatch('setDialogConfirmAction', false)
      this.$router.go()
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
