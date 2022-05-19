<template>
<div>
  <v-card>
    <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="120">
      <v-list flat style="position: absolute; top: 15px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
        <v-list-item-group>
          <v-list-item active-class="border">
            <v-list-item-content>
              <v-avatar>
                <v-icon size="40">mdi-rabbit</v-icon>
              </v-avatar>
              <v-list-item-subtitle align="center" class="mt-3 caption">MisterA</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list flat style="position: absolute; top: 160px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false" router :to="item.route">
            <v-list-item-content>
              <v-icon v-text="item.icon"></v-icon>
              <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div style="position: absolute; bottom: 50px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
        <v-icon @click="Signout">mdi-logout</v-icon><br><span class="caption">Logout</span>
      </div>
    </v-navigation-drawer>
  </v-card>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      selectedItem: '',
      drawer: true,
      mini: true,
      items: [
        { icon: 'mdi-home', text: 'Home', route: '/Home' },
        { icon: 'mdi-food', text: 'Menu', route: '/Menu' },
        { icon: 'mdi-room-service', text: 'Bell', route: '/Bell' },
        { icon: 'mdi-star', text: 'Reserve', route: '/Reserve' },
        { icon: 'mdi-music-note', text: 'Song', route: '/Song' },
        { icon: 'mdi-account', text: 'Admin', route: '/Admin' }
      ]
    }
  },
  methods: {
    Signout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' })
        console.log('signout success')
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #704232 !important;
  border-radius: 20px;
  text-decoration: none;
  color: #704232;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list__action-text {
  color: white !important;
}
</style>
