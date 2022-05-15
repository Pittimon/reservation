<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBarRight/>
    <v-container style="max-width: 1500px; margin-right: 900px;">
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-spacer></v-spacer>
        <v-text-field label="Search menu" class="mt-5" color="brown" filled append-icon="mdi-magnify"
        dense solo flat background-color="grey lighten-4"></v-text-field>
      </v-toolbar>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-toolbar-title class="mt-n3">Choose Category</v-toolbar-title>
      </v-toolbar>
      <v-item-group class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="2">
              <v-item v-slot="{active, toggle}">
                <v-card :color="active ? '#f6efef' : 'white'"
                :class="active ? 'borderme' : 'borderout'"
                class="f-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-icon max-height="110" max-width="110" size="85" contain color="#704232">mdi-food</v-icon>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          ALL
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{active, toggle}">
                <v-card :color="active ? '#f6efef' : 'white'"
                :class="active ? 'borderme' : 'borderout'"
                class="f-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-icon max-height="110" max-width="110" size="85" contain color="#704232">mdi-coffee</v-icon>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          Coffee
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{active, toggle}">
                <v-card :color="active ? '#f6efef' : 'white'"
                :class="active ? 'borderme' : 'borderout'"
                class="f-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-icon max-height="110" max-width="110" size="85" contain color="#704232">mdi-cake</v-icon>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          Dessert
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{active, toggle}">
                <v-card :color="active ? '#f6efef' : 'white'"
                :class="active ? 'borderme' : 'borderout'"
                class="f-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-icon max-height="110" max-width="110" size="85" contain color="#704232">mdi-pizza</v-icon>
                          <!-- <v-img src="c1.png" max-height="110" max-width="110" contain></v-img> -->
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          Food
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-toolbar color="#eeeeee" flat>
        <v-toolbar-title>All Menu</v-toolbar-title><v-spacer></v-spacer>
        <span color="grey">12 Results</span>
      </v-toolbar>
      <v-row>
        <v-col v-for="(menu, i) in menus" :key="i" cols="12" sm="4">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img :src="menu.src"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mx-5">
                  {{ menu.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1 mx-6">{{ menu.aboutmenu }}</v-list-item-subtitle>
                <strong class="mt-3 mx-6">
                  {{ menu.price }} bath
                </strong>
              </v-list-item-content>
            </v-list-item>
             <v-textarea
             hide-details
              outlined
              auto-grow
              label="note"
              rows="2"
              row-height="20"
              class="mx-4 my-0"
              color="#704232"
              ></v-textarea>
            <v-card-actions class="px-4">
              <v-btn color="#704232" block dark class="withoutupercase mb-2">Add to cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBarRight from '../components/SideBarRight.vue'

export default {
  name: 'Menu',
  data() {
    return {
      menus: [
        {
          name: 'egg', price: '60', src: 'http://i.huffpost.com/gen/2149840/thumbs/o-HOW-TO-MAKE-SCRAMBLED-EGG-facebook.jpg', aboutmenu: 'eiei'
        },
        {
          name: 'egg', price: '60', src: 'http://i.huffpost.com/gen/2149840/thumbs/o-HOW-TO-MAKE-SCRAMBLED-EGG-facebook.jpg', aboutmenu: 'kiki'
        },
        {
          name: 'egg', price: '60', src: 'http://i.huffpost.com/gen/2149840/thumbs/o-HOW-TO-MAKE-SCRAMBLED-EGG-facebook.jpg', aboutmenu: 'kiki'
        },
        {
          name: 'egg', price: '60', src: 'http://i.huffpost.com/gen/2149840/thumbs/o-HOW-TO-MAKE-SCRAMBLED-EGG-facebook.jpg', aboutmenu: 'kiki'
        }
      ]
    }
  },
  components: {
    SideBarRight
  }
}
</script>
<style scoped>
  .v.card.borderme {
    border: 2px solid #704232 !important;
  }
  .v.card.borderout {
    border: 1px solid #bcaaa4 !important;
  }
</style>
