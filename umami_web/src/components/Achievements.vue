<template>
    <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
  <v-container>
      <h1 class="text-h2 text-center font-weight-regular">LOGROS</h1>
        <p class="text-h4">HONGOS</p>
  </v-container>

    <!--HONGOS-->
    <Hongos/>

    <!--ZONAS-->
    <Zonas/>

    <!--CATEGORÍAS-->
    <Categorias/>

  </v-sheet>
</template>


<script>
//import func from 'vue-editor-bridge'
import Hongos from '../components/Achievements/Hongos';
import Zonas from '../components/Achievements/Zonas';
import Categorias from '../components/Achievements/Categorias';
    export default {
      components: {
        Hongos,
        Zonas,
        Categorias,
    },
    data: () => ({
        }),
        methods:{
        },
        computed: {
       
    }
  }
</script>