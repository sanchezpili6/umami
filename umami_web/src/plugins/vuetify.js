import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light: {
                primary: '#61897D', //Verde
                secondary: '#AA6759', //Rojo
                background: '#E9D58E', //Amarillo
            }
        }
    }
});
