<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container>
      <v-card class="f-flex align-center rounded-lg mx-2" height="650"
      style="top: 50px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;" flat>
        <v-row jusify="center">
          <v-col cols="6" md="6">
            <v-card
            class="f-flex align-center rounded-lg mx-2" height="350" flat>
            <v-list-item class="text-center mt-10" active-class="border">
              <v-list-item-content three-line class="mt-5">
                    <v-icon size="300" color="#704232">mdi-music</v-icon>
                    <v-list-item-title class="text-h4 brown--text mt-6">
                        REQUST SONG
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-1">Line Offical</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="6" md="6"  jusify="center">
            <v-card flat class="rounded-lg mx-8 my-8" color="#704232" height="560">
            <v-row>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h4 white--text align-left mt-6">
                            How to request music
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6 white--text align-left mt-6" justify="left">
                            1. Add friend with Line Offical
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item three-line class="text-center mt-1">
                    <v-list-item-content>
                        <div align="center">
                            <v-img contain height="200" width="200" src="https://qr-official.line.me/sid/M/704zbybf.png"></v-img>
                        </div>
                        <a class="mt-2 caption white--text" href="https://lin.ee/STBqvEW" target="_blank">Line Official</a>
                        </v-list-item-content>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6 white--text align-left mt-3" justify="left">
                            2. Chat to request music
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Song',

  components: {
  }
}
</script>
