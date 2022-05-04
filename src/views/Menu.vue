<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBar/>
    <SideBarRight/>
    <v-container>
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
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="coffee.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  Caramel Frappuccino
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">Caramel sytrup with coffe, milk and whipped cream</v-list-item-subtitle>
                <strong class="mt-3">
                  10$
                </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Mood</strong><br>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <v-icon dark color="orange">mdi-fire</v-icon>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <v-icon dark color="blue">mdi-water</v-icon>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">Size</strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col col="12" sm="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">S</strong>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col col="12" sm="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">M</strong>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col col="12" sm="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">L</strong>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Sugar</strong><br>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">75%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">100%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Ice</strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">0%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">100%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <br>
            <v-card-actions>
              <v-btn color="#704232" block dark class="withoutupercase mb-2">Add Billing</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="coffee.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  Chocolate Frappuccino
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">Sweet chocolate with coffe, milk and whipped cream</v-list-item-subtitle>
                <strong class="mt-3">
                  10$
                </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Mood</strong><br>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <v-icon dark color="orange">mdi-fire</v-icon>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <v-icon dark color="blue">mdi-water</v-icon>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">Size</strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col col="12" sm="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">S</strong>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col col="12" sm="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">M</strong>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col col="12" sm="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">L</strong>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Sugar</strong><br>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">75%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">100%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Ice</strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">0%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{active, toggle}">
                            <v-card color="#f6efef"
                            :class="active ? 'borderme' : ''"
                            class="d-flex align-center rounded-circle"
                            dark height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">100%</strong>
                              </v-list-item-content>
                            </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <br>
            <v-card-actions>
              <v-btn color="#704232" block dark class="withoutupercase mb-2">Add Billing</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import SideBarRight from '../components/SideBarRight.vue'

export default {
  name: 'Menu',

  components: {
    SideBar,
    SideBarRight
  }
}
</script>
<style>
  .v.card.borderme {
    border: 2px solid #704232 !important;
  }
  .v.card.borderout{
    border: 1px solid #bcaaa4 !important;
  }
</style>
