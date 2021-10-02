<template>
<v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
  <!--ZONAS-->
    <v-container>
        <p class="text-h4">CATEGORÍAS</p>
    </v-container>
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item v-for="categoria in categorias" :key="categoria" v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-3"
          height="200"
          width="200"
          @click="toggle"
        >
        <v-img :src="categoria.image" class="fill-height"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200" tile>
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h6">
              {{categorias[model].nombre}}
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
         categorias: [
        { nombre: 'Venenosos', image: 'https://us.123rf.com/450wm/ylivdesign/ylivdesign1707/ylivdesign170727354/82832117-icono-de-veneno-blanco.jpg?ver=6'},
        { nombre: 'Comestibles', image: 'https://img.freepik.com/vector-gratis/cuchara-dibujos-animados-tenedor-cuchillo-cocina-diseno_24877-57345.jpg?size=338&ext=jpg'},
        { nombre: 'Medicinales', image: 'https://thumbs.dreamstime.com/b/icono-del-coraz-n-estetoscopio-con-latido-coraz%C3%B3n-salud-y-s%C3%ADmbolo-de-la-cardiolog%C3%ADa-ejemplo-aislado-vector-147389009.jpg'},
        { nombre: 'Alucinógenos', image: 'https://st2.depositphotos.com/1393072/42672/v/600/depositphotos_426728506-stock-illustration-hallucinogenic-mushroom-line-icon-narcotic.jpg'},
        { nombre: 'Desconocido', image: 'https://images.assetsdelivery.com/compings_v2/alexwhite/alexwhite1503/alexwhite150303586.jpg'}
        ]
        }),
  }
</script>