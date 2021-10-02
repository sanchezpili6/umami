<template>
  <v-container>
    <br>
    <v-row>
      <v-col
        cols="12"
        align-self="center"
      >
        <h2 style="text-align: center">¡Descubre hongos!</h2>
        <br>
      </v-col>
    </v-row>
    <v-row class="map-container">
      <v-col
        cols="12"
        align-self="center"
      >
        <gmap-map
          :zoom="17"
          :center="center"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in locationMarkers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MapScreen",
  data() {
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  },

  mounted() {
    this.locateGeoLocation();
  },

  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
/* Mobile */
@media only screen and (max-width: 600px) {
  .map-container {
    /*width: 100%;*/
  }
}
/* Web Desktop */
@media only screen and (min-width: 768px) {
  .map-container {

  }
}
</style>