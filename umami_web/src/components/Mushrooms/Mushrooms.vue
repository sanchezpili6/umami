<template>
  <v-app>
    <v-row
      v-for="hongo in hongos"
      :key="hongo.nombre"
    >
      <v-card>
        <v-img
            :src="hongo.image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
        >
          <v-card-title v-text="hongo.nombre"></v-card-title>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
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

</style>