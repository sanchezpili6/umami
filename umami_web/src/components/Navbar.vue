<template>
	<v-bottom-navigation value="value" color="teal" grow v-model="value">
		<v-spacer></v-spacer>
    <router-link to="/profile" style="text-decoration: none; color: inherit;">
      <v-btn value="recent">
        <span>Perfil</span>

        <i class="fas fa-user-circle"></i>
      </v-btn>
    </router-link>

		<v-spacer></v-spacer>

		<v-btn value="favorites" style="text-decoration: none; color: inherit;">
			<span>Amigos</span>

			<i class="fas fa-user-plus"></i>
		</v-btn>
		<v-spacer></v-spacer>

    <router-link to="/map" style="text-decoration: none; color: inherit;">
      <v-btn value="nearby">
        <span>Mapa</span>

        <i class="fas fa-map"></i>
      </v-btn>
    </router-link>

		<v-spacer></v-spacer>

    <router-link to="/achievements" style="text-decoration: none; color: inherit;">
      <v-btn value="nearby">
        <span>Logros</span>

        <i class="fas fa-star"></i>
      </v-btn>
    </router-link>

		<v-spacer></v-spacer>

    <router-link to="/" style="text-decoration: none; color: inherit;">
      <v-btn value="nearby">
        <span>Inicio</span>

        <i class="fas fa-home"></i>
      </v-btn>
    </router-link>

		<v-spacer></v-spacer>
	</v-bottom-navigation>
</template>
