<template>
<v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
     <!--HONGOS-->
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item v-for="hongo in hongos" :key="hongo" v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-3"
          height="200"
          width="200"
          @click="toggle"
        >
        <v-img :src="hongo.image" class="fill-height"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200" tile>
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h6">
              {{hongos[model].nombre}}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
</v-sheet>
</template>


<script>
  export default {
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