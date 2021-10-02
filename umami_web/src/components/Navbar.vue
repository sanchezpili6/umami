<template>
	<v-bottom-navigation value="value" color="teal" grow v-model="value">
		<v-spacer></v-spacer>

		<v-btn value="recent">
			<span>Perfil</span>

			<i class="fas fa-user-circle"></i>
		</v-btn>
		<v-spacer></v-spacer>

		<v-btn value="favorites">
			<span>Amigos</span>

			<i class="fas fa-user-plus"></i>
		</v-btn>
		<v-spacer></v-spacer>

		<v-btn value="nearby">
			<span>Mapa</span>

			<i class="fas fa-map"></i>
		</v-btn>
		<v-spacer></v-spacer>

		<v-btn value="nearby">
			<span>Logros</span>

			<i class="fas fa-star"></i>
		</v-btn>
		<v-spacer></v-spacer>

		<v-btn value="nearby">
			<span>Inicio</span>

			<i class="fas fa-home"></i>
		</v-btn>
		<v-spacer></v-spacer>
	</v-bottom-navigation>
</template>
