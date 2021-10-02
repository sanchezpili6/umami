<template>
  <v-app>
    <v-card
      class="mx-auto"
      width="80%"
    >
      <v-card-title class="wallpaper">
        <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
        >
          <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQGXVUNE7H7wFg/profile-displayphoto-shrink_800_800/0/1614135404698?e=1638403200&v=beta&t=3aXNAAoI997Or09JFPQkZL_-AABS2-1S-GWR4sZMtDI"></v-img>
        </v-avatar>
      </v-card-title>
      <v-card-text class="mx-2">
        <h2 class="text-h6 primary--text">
          {{name}}
        </h2>
          {{bio}}
        <v-list >
          <v-list-item-group
              v-model="selectedItem"
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
            <router-link to="/mishongos" style="text-decoration: none; color: inherit;">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Mis Hongos</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-eye</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Profile.vue",
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Nombre', icon: 'mdi-pencil' },
      { text: 'Bio', icon: 'mdi-pencil' },
      { text: 'Correo', icon: 'mdi-pencil' },
      { text: 'Contraseña', icon: 'mdi-pencil' },
    ],
    name: 'Pilionera',
    bio: 'Ingeniera en sistemas obsesionada con la micología'
  }),
}
</script>

<style scoped>
  .wallpaper{
    background-image: url("https://www.miltonandking.com/wp-content/uploads/2021/05/Wallpaper-Fungi-Latte-1.jpg");
    background-size: cover;
  }

</style>