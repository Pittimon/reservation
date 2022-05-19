<template>
    <v-card outlined center class="align-center" style="border: 1px solid #fff">
      <div class="text-center mx-5 my-5">
        <v-file-input
          label="Pic Menu"
          filled
          prepend-icon="mdi-camera"
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
          <v-btn class="mr-5" @click="updateMenu" outlined color="#704232">confirm</v-btn>
          <v-btn class="ml-5" @click="closeDialogu"  outlined color="error">cancle</v-btn>
        </div>
      </div>
    </v-card>
</template>
<script>
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid'
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
    closeDialogu() {
      this.$store.dispatch('setDialoguCancleAction', false)
    },
    async updateMenu() {
      if (this.image) {
        const metadata = {
          contentType: this.image.type
        }
        this.loading = true
        console.log(this.image)
        const ref = firebase.storage()
          .ref()
          .child(uuidv4())
        if (this.image) {
          await ref.put(this.image, metadata)
          this.imageUrl = await ref.getDownloadURL()
        } else {
          this.imageUrl = null
        }
      }
      console.log(this.imageUrl)
      axo.put(`/${this.id}`, {
        thumbnail: this.imageUrl,
        name: this.name,
        description: this.description,
        price: parseInt(this.price, 10)
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await Token()}`
        }
      })
        .then((response) => {
          console.log(response.data)
          this.loading = false
          this.$store.dispatch('setDialoguCancleAction', false)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
<style>
</style>
