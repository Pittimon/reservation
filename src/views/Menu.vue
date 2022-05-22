<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBarRight/>
    <v-container style="max-width: 1200px; position:absolute; right:450px;">
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-spacer></v-spacer>
        <v-text-field label="Search menu" v-model="search" class="mt-5" color="brown" filled append-icon="mdi-magnify"
        dense solo flat background-color="grey lighten-4"></v-text-field>
      </v-toolbar>
      <v-toolbar color="#eeeeee" flat>
        <v-toolbar-title>All Menu</v-toolbar-title><v-spacer></v-spacer>
        <span color="grey">{{ filteredList.length }} menu</span>
      </v-toolbar>
      <v-row>
        <v-col v-for="(menu, i) in filteredList" :key="i" cols="12" sm="4">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img :src="menu.thumbnail"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mx-5">
                  {{ menu.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1 mx-6">{{ menu.description }}</v-list-item-subtitle>
                <strong class="mt-3 mx-6">
                  {{ menu.price }} bath
                </strong>
                    <v-list-item-action>
                  <v-row>
                    <v-btn
                      small
                      icon
                      class="mr-0 ml-8"
                      @click="updatemenu"
                      color="#704232"
                      v-if="$store.state.adminui"
                    >
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-btn
                      small
                      icon
                      @click="deletemenu"
                      color="#704232"
                      v-if="$store.state.adminui"
                    >
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item-action>
                <v-dialog
                  v-model="$store.state.dialogu"
                  persistent
                  max-width="600px"
                >
                  <UpdateMenu v-show="$store.state.dialogu" :uid="menu.id"/>
                </v-dialog>
                <v-dialog
                  v-model="$store.state.dialogd"
                  persistent
                  max-width="600px"
                >
                  <DeleteMenu v-show="$store.state.dialogd" :uid="menu.id"/>
                </v-dialog>
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
// import axios from 'axios'
import SideBarRight from '../components/SideBarRight.vue'
import axo from '../common/mainaxios'
import UpdateMenu from '@/components/UpdateMenu.vue'
import DeleteMenu from '@/components/DeleteMenu.vue'
// import Token from '@/common/getToken'

export default {
  name: 'Menu',
  data() {
    return {
      menus: [
      ],
      dialogu: false,
      dialogd: false,
      search: '',
      orders: []
    }
  },
  components: {
    SideBarRight,
    UpdateMenu,
    DeleteMenu
  },
  methods: {
    updatemenu() {
      this.dialogu = true
      this.$store.dispatch('setDialoguCancleAction', this.dialogu)
      console.log(this.$store.state.dialogu)
    },
    deletemenu() {
      this.dialogd = true
      this.$store.dispatch('setDialogdCancleAction', this.dialogd)
      console.log(this.$store.state.dialogd)
      console.log()
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
  computed: {
    filteredList() {
      return this.$store.state.menu.filter((menu) => {
        return menu.name.toLowerCase()
          .includes(this.search.toLowerCase())
      })
    }
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
  .v-list-item__content > * {
    line-height: 1.1;
    flex: 1 1 100%;
  }
</style>
