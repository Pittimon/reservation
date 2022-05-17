<template>
    <v-card outlined center class="align-center" style="border: 1px solid #fff">
      <div class="text-center mx-5 my-5">
        <v-file-input
          label="Pic Menu"
          filled
          prepend-icon="mdi-camera"
          @change="onFileChange"
          v-model="image"
          type="file"
        ></v-file-input>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            label="Menu"
            required
          ></v-text-field>

          <v-text-field
            v-model="description"
            label="Details"
            required
          ></v-text-field>

          <v-text-field
            v-model="price"
            label="Price"
            required
          ></v-text-field>
        </v-form>
        <div class="text-center">
          <v-btn class="mr-5" @click="updateOrder" outlined color="#704232">confirm</v-btn>
          <v-btn class="ml-5" @click="closeDialogu"  outlined color="error">cancle</v-btn>
        </div>
      </div>
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
    closeDialogu() {
      this.$store.dispatch('setDialoguCancleAction', false)
    },
    updateOrder() {
      axo.post('', {
        thumbnail: 'this.imageUrl', name: 'this.name', description: 'this.description', price: 'this.price'
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error)
      })
      this.$store.dispatch('setDialoguCancleAction', false)
    },
    onFileChange(file) {
      if (file) {
        this.imageUrl = URL.createObjectURL(file)
        URL.revokeObjectURL(file) // free memory
      } else {
        this.imageUrl = null
      }
      console.log(this.imageUrl)
    }
  }
}
</script>
<style>
</style>
