<template lang="">
    <v-app :style="{background: $vuetify.theme.themes.dark.background}">
        <v-container>
            <v-card class="align-center rounded-lg mx-2" height="1000px"
            style=" margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;" flat>
            <v-row jusify="center">
                <v-col flat class="rounded-lg mx-5">
                    <v-card outlined center class="align-center px-5 py-5 my-5 mx-5" style="min-height: 500px; min-width: 500px; border: 1px solid #fff">
                    <div class="text-center">
                    <v-file-input
                    label="Pic Menu"
                    filled
                    prepend-icon="mdi-camera"
                    ></v-file-input>
                     <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                    v-model="menuinput"
                    label="Menu"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="detailinput"
                    label="Details"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="priceinput"
                    label="Price"
                    required
                    ></v-text-field>
                    </v-form>
                    <div class="text-center">
                    <v-btn depressed dark color="#704232">confirm</v-btn>
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
import Token from '../common/getToken'

export default {
  name: 'Admin',
  data() {
    return {
      menus: [
        {
          order: 'khhjkhjh', price: '60', note: 'eiei'
        },
        {
          order: 'egg', price: '60', note: 'kiki'
        },
        {
          order: 'egg', price: '60', note: 'kiki'
        },
        {
          order: 'egg', price: '60', note: 'kiki'
        }
      ]
    }
  },
  async mounted() {
    const token = await Token()
    console.log(token)
  }
}
</script>
<style lang="" scoped>
</style>
