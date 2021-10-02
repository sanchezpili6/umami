<template>
  <v-app>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>


<script>
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
  },
  data: () => ({

  }),
};
</script>

<style>

</style>