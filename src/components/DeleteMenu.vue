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
import axo from '../common/mainaxios'

export default {
  name: 'updatemenu',
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      image: undefined
    }
  },
  methods: {
    closeDialogd() {
      this.$store.dispatch('setDialogdCancleAction', false)
      console.log(this.$store.state.dialogd)
    },
    deleteMenu() {
      axo.post('', {
        id: 'string'
      }, {
        headers: {
          Authorization: 'Bearer bearerToken'
        }
      })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
