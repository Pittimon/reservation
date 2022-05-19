<template>
  <v-navigation-drawer app color="white" right width="290">
    <v-list subheader two-line class="mt-1">
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
    <div height="20">
    <v-row v-for="(menu, i) in menus" :key="i" sm="4">
    <v-col cols="8">
      <v-card flat class="rounded-lg mx-0">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="mx-1">
              {{ menu.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="mt-1 mx-1">{{ menu.description }}</v-list-item-subtitle>
              <!-- <strong class="mt-3 mx-6">
                {{ menu.price }} bath
              </strong> -->
            <v-card-actions class="mx-1">
              <v-btn color="#704232" dark class="mx-4" @click="delNum" x-small fab elevation="0">-</v-btn>
                {{ num }}
              <v-btn color="#704232" dark class="withoutupercase mx-4" @click="addNum" x-small fab elevation="0">+</v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="2">
      <div class="mt-3 mx-0">
        {{ menu.price }}฿
      </div>
    </v-col>
    </v-row>
    </div>
        <!-- <strong class="ml-3">Bills</strong>
        <v-list subheader two-line class="mt-1">
            <v-list-item>
                <v-list-item-avatar rounded color="grey lighten-4">
                    <v-img src="2.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="subtitle-2">Caramel Frappuccino</v-list-item-title>
                    <v-list-item-subtitle>x1
                        <v-btn plain color="#704232" small>Notes
                            <v-icon right>mdi-pencil</v-icon>
                        </v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="caption">10$</v-list-item-action>
            </v-list-item>
        </v-list>
        <v-list subheader two-line class="mt-1">
            <v-list-item>
                <v-list-item-avatar rounded color="grey lighten-4">
                    <v-img src="3.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="subtitle-2">Chocolate Frappuccino</v-list-item-title>
                    <v-list-item-subtitle>x1
                        <v-btn plain color="#704232" small>Notes
                            <v-icon right>mdi-pencil</v-icon>
                        </v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="caption">10$</v-list-item-action>
            </v-list-item>
        </v-list>
        <v-list subheader two-line class="mt-1">
            <v-list-item>
                <v-list-item-avatar rounded color="grey lighten-4">
                    <v-img src="3.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="subtitle-2">Late Frappuccino</v-list-item-title>
                    <v-list-item-subtitle>x1
                        <v-btn plain color="#704232" small>Notes
                            <v-icon right>mdi-pencil</v-icon>
                        </v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="caption">10$</v-list-item-action>
            </v-list-item>
        </v-list> -->
  <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
    <v-divider class="mx-4"></v-divider>
    <v-toolbar color="rgba(0,0,0,0)" flat>
        <strong>Subtotal</strong><v-spacer></v-spacer><strong>30$</strong>
    </v-toolbar>
    <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n8">
      <span>Tax(10%)</span><v-spacer></v-spacer><span>3$</span>
    </v-toolbar>
    <v-divider class="mx-4"></v-divider>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <strong>Total</strong><v-spacer></v-spacer><strong>33$</strong>
    </v-toolbar>
    <v-toolbar class="mx-3 mt-2" flat>
      <v-btn color="#704232" block dark class="widthoutupercase">Confirm Order</v-btn>
    </v-toolbar>
  </div>
  </v-navigation-drawer>
</template>
<script>
import axo from '../common/mainaxios'

export default {
  name: 'Order',
  data() {
    return {
      menus: [
      ],
      num: 1
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
    addNum() {
      this.num += 1
    },
    delNum() {
      this.num -= 1
    }
  }
}
</script>

<style>
    .v-card.borderme{
        border: 2px solid #704232 !important;
    }
    .col-12 {
        padding: 5px !important;
    }
    .v-btn.widthoutupercase{
        text-transform: none !important;
    }
</style>
