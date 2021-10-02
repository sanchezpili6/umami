<template>
<v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
  <!--ZONAS-->
    <v-container>
        <p class="text-h4">ZONAS</p>
    </v-container>
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item v-for="zona in zonas" :key="zona" v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-3"
          height="200"
          width="200"
          @click="toggle"
        >
        <v-img :src="zona.image" class="fill-height"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200" tile>
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h6">
              {{zonas[model].nombre}}
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
         zonas: [
        { nombre: 'Veracruz', image: 'https://pbs.twimg.com/profile_images/1145710581934120961/f_PoGn-T.png'},
        { nombre: 'Jalisco', image: 'https://m.media-amazon.com/images/I/71hiD7WeGGL._AC_SL1500_.jpg'},
        { nombre: 'Estado de México', image: 'https://www.nicepng.com/png/detail/369-3698095_escudo-del-estado-de-mexico-png-escudo-del.png'},
        { nombre: 'Querétaro', image: 'https://lh3.googleusercontent.com/proxy/s24AGQzEUsSxAjrzFmUfChW0a_t79qdy94rNeTW2lUds0lTBK4Rq9feEwjQarUrCoSmhRGNpj2zmuo8EpJKREKl87WxVUqTfAGSZBU822csoSeEMYhQOmS85XDp2NGstHztmwG0ZOudIdqr-mxiJ16e_aA'},
        { nombre: 'Guanajuato', image: 'https://www.gob.mx/cms/uploads/document/main_image/34821/guanajuato_escudo.jpg'}
        ]
        }),
  }
</script>