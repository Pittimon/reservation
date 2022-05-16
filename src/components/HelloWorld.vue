<template>
  <v-container
  style="padding: 0px; max-width: 100%;">
   <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
<v-container>
    <v-card
    class="elevation-0 "
    >
        <v-card-title
        class="black--text text-h1 font-weight-black text--darken-4 justify-center">
            <hr noshade="noshade" width="700" size="8" style="text-align: left;">
            MENU <hr noshade="noshade" width="700" size="8"  align="left"></v-card-title>
    </v-card>
</v-container>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              id="cardhover"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.img"
                height="225px"
              >
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                        {{ item.text }}
                      </p>
                      <p class="text-caption font-weight-medium font-italic text-left">
                        {{ item.subtext }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
  <br>
  <br>
  <div align="center">
  <hr noshade="noshade" width="98%" size="6" >
  </div>
  <v-container>
      <br>
      <br>
      <v-card  class="elevation-0 ">
          <v-row>
              <v-col class="ma-4 ml-4 mr-0">
                  <v-img
                    height="500"
                     src="https://i.pinimg.com/736x/66/00/31/660031262b3d889ff02a932f054aef52.jpg"
    ></v-img>
              </v-col>
              <v-col>
                <div align="center">
                  <h1>ABOUT US</h1>
                </div>
                <div align="center" class="mt-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ullamcorper sit amet risus nullam. Eu non diam phasellus vestibulum lorem sed.
                    Sed risus ultricies tristique nulla aliquet enim tortor. Amet tellus cras adipiscing enim eu.
                    In fermentum et sollicitudin ac. Tortor at auctor urna nunc id cursus metus.
                    Elementum nisi quis eleifend quam adipiscing. Tellus integer feugiat scelerisque varius morbi.
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed.
                    Lectus quam id leo in vitae turpis massa sed. Proin libero nunc consequat interdum varius sit amet.
                    Mi eget mauris pharetra et ultrices. Dolor sed viverra ipsum nunc aliquet bibendum.
                    Ut porttitor leo a diam. Quis commodo odio aenean sed.
                    Aliquet bibendum enim facilisis gravida. Maecenas pharetra convallis posuere morbi leo urna molestie at.
                    Facilisis sed odio morbi quis commodo odio aenean. Dui sapien eget mi proin sed libero enim sed faucibus.</p>
                </div>
              </v-col>
          </v-row>
      </v-card>
  </v-container>
  <div align="center" class="mt-4 mb-4">
    <h1 class="black--text text-h1 font-weight-black text--darken-4 justify-center">Our Chef</h1>
  </div>
  <v-container>
    <v-row>
      <template v-for="(chef, i) in chefs">
        <v-col
          :key="i"
          cols="12"
          md="6"
        >
            <v-card
            color="#eeeeee"
            class="elevation-0"
              align="center"
            >
              <v-img
                :src="chef.img"
                height="500px"
                width="300px"
              >
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ chef.name }}
                    </p>

                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                        {{ chef.text }}
                      </p>
                      <p class="text-caption font-weight-medium font-italic text-left">
                        {{ chef.subtext }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
   <br>
      <br>
      <template>
              <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-4 white--text text-center"
    >
<v-row>
  <v-col>
      <v-card-text class="white--text pt-6 pb-0">
        <h1>Location</h1>
        <p class="pt-2" style="margin-bottom: 0px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae </p>
      </v-card-text>
       <div class="mt-0">
      <v-btn icon href="https://www.facebook.com" target="_blank">
    <v-icon>mdi-near-me</v-icon>
  </v-btn>
  </div>
</v-col>
<v-col>
      <v-card-text class="white--text pt-6">
        <h1>Opening Hours</h1>
        <p  class="pt-2">Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
         Mauris cursus commodo interdum.</p>
      </v-card-text>
</v-col>
<v-col>
      <v-card-text class="white--text pt-6">
        <h1>Contact Us</h1>
        <p  class="pt-2" style="margin-bottom: 0px;">Phasellus feugiat arcu sapien,
           et iaculis ipsum elementum sit amet.
         Mauris cursus commodo interdum.</p>
      </v-card-text>
      <div class="mt-0">
      <v-btn icon>
        <v-icon>
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn icon>
        <i class="fab fa-instagram"></i>
      </v-btn>
      <v-btn icon>
        <v-icon>
          mdi-play
        </v-icon>
      </v-btn>
      </div>
</v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
      </template>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        {
          src: 'https://i.pinimg.com/originals/af/20/25/af2025f0dd7ad1e992013f6fb99dc36a.gif'
        },
        {
          src: 'https://i.pinimg.com/originals/5d/6c/d2/5d6cd2aade4690c7770dd403596f9499.gif'
        },
        {
          src: 'https://i.pinimg.com/originals/3a/b8/28/3ab828d046f6680dceff292df68c4ac6.gif'
        },
        {
          src: 'https://i.pinimg.com/originals/58/c2/a1/58c2a1bd0484472c18fe0f9c890de7f7.gif'
        },
        {
          src: 'https://i.pinimg.com/originals/23/b4/9a/23b49a720bf0405e0751d9089f885490.gif'
        }
      ],
      items: [
        {
          title: 'New Releases',
          text: 'Its New Release Friday',
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://i.pinimg.com/564x/2e/a9/8d/2ea98d73615ab74bac6306562e8f3a53.jpg'
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img: 'https://i.pinimg.com/736x/db/e8/10/dbe810030e2dd874cd3c904a3e67e6e1.jpg'
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'https://i.pinimg.com/736x/3d/fc/dd/3dfcdd2bb230ba92798ab36f6820cb5f.jpg'
        }
      ],
      chefs: [
        {
          name: 'Rakmodjai Fankaikorchang',
          text: 'Master Chef',
          subtext: 'korchob a kub pee ja hai nu tum ngai',
          img: 'https://s.isanook.com/ca/0/ui/278/1393385/jennierubyjane_11989189243477442452990232317624538032415441n.jpg'
        },
        {
          name: 'Rakdeaw Keawyah',
          text: 'Master Chef',
          subtext: 'kon ter ja la kor long ter eek kang',
          img: 'https://pbs.twimg.com/media/E_2rBAfVUAgNYKv.jpg'
        }
      ],
      transparent: 'rgba(255, 255, 255, 0)'
    }
  }
}
</script>
<style scoped>
#cardhover {
  transition: opacity .4s ease-in-out;
}

#cardhover:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
