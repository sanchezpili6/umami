<template>
  <v-app>
    <v-card
    >
      <v-card-title class="title">
        <v-spacer></v-spacer>
        <h1>
          Mis hongos encontrados
        </h1>
        <v-spacer></v-spacer>
        </v-card-title>
      <v-row>
        <v-col
            v-for="hongo in hongos"
            :key="hongo.nombre"
            class="d-flex child-flex"
            cols="4"
        >
          <v-card
              max-width="60%"
              class="mx-5 my-5"
          >
            <v-img
                :src="hongo.image"
                aspect-ratio="1"
                class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-text>
              <h2>{{hongo.nombre}}</h2>
              <v-icon>mdi-eye</v-icon>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Mushrooms.vue",
  data: () => ({
    model:null,
    hongos: [
      { nombre: 'Matamoscas o Falsa Oronja', nombreCientifico: 'Amanita muscaria', image: 'https://www.gastronomiavasca.net/uploads/image/file/6294/amanita_muscaria1.jpg'},
      { nombre: 'Hongo Velo de Novia', nombreCientifico: 'Phallus indusiatus', image: 'https://media.istockphoto.com/photos/bridal-veil-fungi-picture-id923913436?k=20&m=923913436&s=170667a&w=0&h=xdh8jMN4UGC-YzF3u8WOQsuVK5-uoWhDPegGn8W4QhE='},
      { nombre: 'Hongo Langosta', nombreCientifico: 'Hypomyces lactifluorum', image: 'https://i.etsystatic.com/18376711/r/il/2ef200/1656013834/il_570xN.1656013834_2kkr.jpg'},
      { nombre: 'Hongo Pambazo', nombreCientifico: 'Funghi porcini', image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/5628160/medium.jpg?1480281163'},
      { nombre: 'Pedos de burro', nombreCientifico: 'Lycoperdon perlatum', image: 'http://antropocene.it/wp-content/uploads/2019/03/Lycoperdon_perlatum.jpg'}
    ]
  }),
}
</script>

<style scoped>
h1{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 50px;
  text-align: center;
}

</style>