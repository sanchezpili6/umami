<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  },
  data: () => ({

  }),
};
</script>

<<<<<<< HEAD
<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');
</style>
=======
<style></style>
>>>>>>> 0b2bd78a28d37b6a427f824337f9cd95a21c50c0
