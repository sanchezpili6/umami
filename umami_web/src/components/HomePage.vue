<template>
  <v-app>
    <v-row>
      <v-col>
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="250"
              src="https://www.lajornadadeoriente.com.mx/wp-content/uploads/2015/06/5070-pue-10.jpg"
          ></v-img>

          <v-card-title>Hongo Matamoscas</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.2 (398)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $ • Oaxaca, Oaxaca
            </div>

            <div>¡El más recomendado por turistas!</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tours guiados a partir de las:</v-card-title>

          <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
              ¡Reservar!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="250"
              src="https://mxcity.mx/wp-content/uploads/2016/07/hongos-1.jpg"
          ></v-img>

          <v-card-title>Hongo Pajarito</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="4.0"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.0 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $ • Puebla, Puebla
            </div>

            <div>¡El hongo más sabroso!</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tours guiados a partir de las:</v-card-title>

          <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
              ¡Reservar!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="250"
              src="https://foodandtravel.mx/wp-content/uploads/2019/08/FestivaldeHongoscanasta.jpg"
          ></v-img>

          <v-card-title>Hongo Chanterelle</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (368)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $ • Chiapas, Tuxtla Gutiérrez
            </div>

            <div>Localizado en la mejor reserva natural del país</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tours guiados a partir de las:</v-card-title>

          <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
              ¡Reservar!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h4 style="text-align: center; font-style: italic; font-size: 25px">Lo que nuestros clientes opinan en redes sociales...</h4>
        <br><br>
        <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          max-width="60%"
        >
          <v-card-title>
            <v-icon
              large
              left
            >
              mdi-twitter
            </v-icon>
            <span class="text-h6 font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            "FungiRuta me ha ayudado a descubrir la mega-biodiversidad que tiene México y ahora hasta encontré un nuevo hongo que tiene mi nombre!!"
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avatars.githubusercontent.com/u/37568592?v=4"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Pili Sánchez</v-list-item-title>
              </v-list-item-content>

              <v-row
                  align="center"
                  justify="end"
              >
                <v-icon class="mr-1">
                  mdi-heart
                </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">
                  mdi-share-variant
                </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>