<template>
  <v-card outlined center class="align-center" style="border: 1px solid #fff">
    <v-card-title class="text-h5">
      Delete this menu?
    </v-card-title>
    <v-card-text>are you sure you want to delete this menu.</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="error"
        text
        @click="closeDialogd"
      >
        No
      </v-btn>
      <v-btn
        color="#704232"
        text
        @click="deleteMenu"
      >
        Sure
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
// import axios from 'axios'
import axo from '../common/mainaxios'
import Token from '@/common/getToken'

export default {
  name: 'updatemenu',
  props: {
    uid: String
  },
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      image: undefined,
      id: this.uid
    }
  },
  methods: {
    closeDialogd() {
      this.$store.dispatch('setDialogdCancleAction', false)
      console.log(this.$store.state.dialogd)
    },
    async deleteMenu() {
      console.log(this.id)
      /*       const options = {
        method: 'DELETE',
        url: 'https://us-central1-reservation-1137b.cloudfunctions.net/api/menu',
        params: { id: this.uid },
        headers: { Authorization: `Bearer ${await Token()}` }
      }

      axios.request(options).then((response) => {
        console.log(response.data)
        this.$store.dispatch('setDialogdCancleAction', false)
        this.$router.go()
      }).catch((error) => {
        console.error(error)
      }) */
      await axo.delete('', {
        headers: {
          Authorization: `Bearer ${await Token()}`
        },
        params: {
          id: this.uid
        }
      })
        .then((response) => {
          console.log(response.data)
          this.$store.dispatch('setDialogdCancleAction', false)
          this.$router.go()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
