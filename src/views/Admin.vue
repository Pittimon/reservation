<template lang="">
    <v-app :style="{background: $vuetify.theme.themes.dark.background}">
        <v-container>
            <v-card class="align-center rounded-lg mx-auto" height="1500px" width="1700px"
            style=" margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;" flat>
            <v-row jusify="center" cols="12" sm="6">
                <v-col flat class="rounded-lg mx-5">
                    <v-card outlined center class="align-center px-5 py-5 my-5 mx-5" style="min-height: 500px; min-width: 500px; border: 1px solid #fff">
                    <div class="text-center">
                    <v-file-input
                    label="Pic Menu"
                    accept="image/*"
                    filled
                    prepend-icon="mdi-camera"
                    v-model="image"
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
                    <v-btn :loading="loading" @click="createMenu" depressed dark color="#704232">confirm</v-btn>
                    </div>
                    </div>
                    </v-card>
                </v-col>
                <v-col flat class="rounded-lg mx-5">
                    <v-card outlined center class="align-center px-5 py-5 my-5 mx-5" style="min-height: 500px; min-width: 500px; border: 1px solid #fff">
                        <v-row>
                    <v-col v-for="(menu, i) in menus" :key="i" cols="12" sm="6">
                    <v-card flat class="rounded-lg mx-5" height="200px">
                    <v-list-item three-line>
                    <v-list-item-content>
                    <v-list-item-title class="text-h5">
                    {{ menu.order }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-1">{{ menu.note }}</v-list-item-subtitle>
                    <strong class="mt-3">
                  {{ menu.price }} bath
                    </strong>
                </v-list-item-content>
                </v-list-item>
            <v-card-actions class="px-4">
              <v-btn color="#db6060" block dark class="withoutupercase mb-2">Close order</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
                    </v-card>
                </v-col>
            </v-row>
            </v-card>
            </v-container>
    </v-app>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase/app'
import { v4 as uuidv4 } from 'uuid'
import Token from '../common/getToken'
import 'firebase/storage'
import axo from '../common/mainaxios'

export default {
  name: 'Admin',
  data() {
    return {
      menus: [
      ],
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      image: '',
      loading: false
      // url: ''
    }
  },
  async mounted() {
    const token = await Token()
    console.log(token)
  },
  async created() {
    /* const options = {
      method: 'GET',
      url: 'https://us-central1-reservation-1137b.cloudfunctions.net/api/order',
      headers: {Authorization: 'Bearer bearerToken'}
    }; */

    // axios.get('https://us-central1-reservation-1137b.cloudfunctions.net/api/order', {
    //   headers: {
    //     Authorization: `Bearer ${await Token()}`
    //   }
    // }).then((response) => {
    //   this.menus = response.data
    //   // this.getnameMenu(response.data.menu_list)
    //   console.log(this.menus)
    // }).catch((error) => {
    //   console.error(error)
    // })
    const options = {
      method: 'GET',
      url: 'https://us-central1-reservation-1137b.cloudfunctions.net/api/order',
      headers: { Authorization: `Bearer ${await Token()}` }
    }
    axios.request(options).then((response) => {
      console.log(response.data)
      const data = { ...response.data }
      console.log(data)
      const x = [
        {
          id: '',
          menu_list: []
        }
      ]
      response.data.forEach((el, index) => {
        el.menu_list.forEach((ele) => {
          this.getData(ele)
        })
        const a = {
          id: el.id,
          menu_list: el.menu_list
        }
        console.log(a)
        console.log(index)
        console.log(el.menu_list)
      })
      console.log(x)
    }).catch((error) => {
      console.error(error)
    })
  },
  methods: {
    async createMenu() {
      if (this.image) {
        const metadata = {
          contentType: this.image.type
        }
        this.loading = true
        console.log(this.image)
        const ref = firebase.storage().ref().child(uuidv4())
        if (this.image) {
          const file = await ref.put(this.image, metadata)
          console.log(file)
          this.imageUrl = await ref.getDownloadURL()
        } else {
          this.imageUrl = null
        }
        console.log(this.imageUrl)
        axo.post('', {
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
            this.name = ''
            this.description = ''
            this.price = ''
            this.image = ''
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        axo.post('', {
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
            this.name = ''
            this.description = ''
            this.price = ''
            console.log('no photo')
          })
          .catch((error) => {
            console.error(error)
            console.log('no photo')
          })
      }
    }
  },
  async getnameMenu(ele) {
    axios.get('https://us-central1-reservation-1137b.cloudfunctions.net/api/order/menu'`${ele}`, {
      headers: {
        Authorization: `Bearer ${await Token()}`
      }
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  async getData() {
    const options = {
      method: 'GET',
      url: 'https://us-central1-reservation-1137b.cloudfunctions.net/api/order/menu'`${this.menus.menu_list}`
    }
    axios.request(options).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }
}
</script>
<style lang="" scoped>
</style>
