<template>
  <v-navigation-drawer app color="white" right width="290">
    <div id="header" style="position:absolute; top:0px; left:0px; height:50px; right:0px; overflow:hidden;">
    <v-list subheader two-line class="fix">
      <v-list-item>
        <v-list-item-avatar rounded>
          <v-icon color="#704232" size="40">mdi-rabbit</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>Cashier</v-list-item-subtitle>
          <v-list-item-title>MasterA</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </div>
    <div id="content" style="position:absolute; top:80px; bottom:240px; left:0px; right:0px; overflow-x: hidden;" class="element">
    <v-row v-for="(food, i) in $store.state.foodsInCart" :key="i" sm="4" active-class="border">
    <v-col cols="8">
      <v-card flat class="rounded-lg mx-0">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="mx-1">
              {{ food.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="mt-1 mx-1">{{ food.description }}</v-list-item-subtitle>
              <!-- <strong class="mt-3 mx-6">
                {{ menu.price }} bath
              </strong> -->
            <v-card-actions class="mx-1">
              <!-- <v-btn color="#704232" dark class="mx-4" @click="delNum" x-small fab elevation="0">-</v-btn>
              <h4> {{ food.num }}</h4>
              <v-btn color="#704232" dark class="withoutupercase mx-4" @click="addNum" x-small fab elevation="0">+</v-btn> -->
              <h5>x {{ food.num }}</h5>
              <v-spacer></v-spacer>
              <v-btn
                depressed
                @click="delNum(food)"
                small
                class="font-weight-medium"
                ><strong>Remove</strong></v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="2">
      <div class="mt-3 mx-0">
        {{ food.price }}฿
      </div>
    </v-col>
    </v-row>
    </div>
  <div id="footer" style="position:absolute; bottom:0; height:150px; left:0px; right:0px; overflow:hidden;">
    <!-- <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;"> -->
    <v-divider class="mx-4"></v-divider>
    <!-- <v-toolbar color="rgba(0,0,0,0)" flat>
        <strong>Subtotal</strong><v-spacer></v-spacer><strong>30฿</strong>
    </v-toolbar>
    <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n8">
      <span>Tax(10%)</span><v-spacer></v-spacer><span>3฿</span>
    </v-toolbar> -->
    <v-divider class="mx-4"></v-divider>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <strong>Total</strong><v-spacer></v-spacer><strong>{{ $store.state.allOrder.total_price }} ฿</strong>
    </v-toolbar>
    <v-toolbar class="mx-3 mt-2" flat>
      <v-btn
      color="#704232"
      block
      class="white--text"
      :disabled="sending"
      :loading="sending"
      @click="sendOrder"
      >Confirm Order</v-btn>
      <v-dialog
        v-model="sending"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="#704232"
          dark
        >
          <v-card-text class="text-center">
            sending orders
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </div>
  </v-navigation-drawer>
</template>
<script>
import axios from 'axios'
import axo from '../common/mainaxios'
import Token from '@/common/getToken'

export default {
  name: 'Order',
  data() {
    return {
      menus: [
      ],
      num: 1,
      orders: [],
      sending: false
    }
  },
  created() {
    axo.get().then((response) => {
      console.log(response)
      this.menus = response.data
      this.$store.dispatch('setMenuAction', this.menus)
    }).catch((error) => {
      console.error(error)
    })
  },
  methods: {
    delNum(food) {
      console.log('del', food)
      const foods = this.$store.state.foodsInCart
      const myAllOrder = this.$store.state.allOrder
      console.log({ myAllOrder })

      console.log('oldFoods', foods)
      const index = foods.findIndex((object) => {
        return object.id === food.id
      })
      if (food.num > 1) {
        foods[index].num = food.num - 1
        this.$store.dispatch('setAddToCartAction', foods)
      } else {
        foods.splice(index, 1)
        this.$store.dispatch('setAddToCartAction', foods)
      }
      myAllOrder.menu_list.splice(myAllOrder.menu_list.indexOf(food.id), 1)
      console.log({ myAllOrder })
      const total = myAllOrder.total_price - food.price
      myAllOrder.total_price = total
      // myArray.splice (myArray.indexOf('c'), 1)
      // myAllOrder.menu_list.push(menu.id.toString())
      // const x = myAllOrder.total_price
      // console.log(myAllOrder)
      // const total = x + menu.price
      // myAllOrder.total_price = total
      console.log('plus', total)
      this.$store.dispatch('setAllOrderAction', myAllOrder)
    },
    async sendOrder() {
      const myAllOrder = this.$store.state.allOrder
      console.log(myAllOrder.menu_list)
      const options = {
        method: 'POST',
        url: 'https://us-central1-reservation-1137b.cloudfunctions.net/api/order',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${await Token()}` },
        data: { menu_list: myAllOrder.menu_list }
      }
      axios.request(options).then((response) => {
        console.log(response.data)
        this.sending = true
        this.$store.dispatch('setAllOrderAction', {
          menu_list: [],
          total_price: 0
        })
        this.$store.dispatch('setAddToCartAction', [])
      }).catch((error) => {
        console.error(error)
      })
    },
    async confirmOrder(menu) {
      axios.post('https://us-central1-reservation-1137b.cloudfunctions.net/api/order', {
        menu_list: [menu]
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await Token()}`
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error)
      })
    }
  },
  watch: {
    sending(val) {
      if (!val) return
      setTimeout(() => { (this.sending = false) }, 2000)
    }
  }
}
</script>

<style scoped>
.v-card.borderme{
  border: 2px solid #704232 !important;
}

.col-12 {
  padding: 5px !important;
}

.v-btn.widthoutupercase{
  text-transform: none !important;
}

.fix {
  width: 100%;
  z-index: 9999 !important;
  position: fixed;
}

.element {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
}

.element::-webkit-scrollbar {
    display: none;
}

.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #704232 !important;
  border-radius: 20px;
  text-decoration: none;
  color: #704232;
}
.v-list-item-content .v-list-item--active {
  color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list__action-text {
  color: white !important;
}
</style>
